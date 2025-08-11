import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    equipment: '',
    quantity: 1,
    duration: 1,
    durationType: 'days',
    workHours: 8,
    deliveryDistance: 0,
    needDelivery: false,
    needOperator: false,
    needInsurance: false,
    needFuel: false,
    workType: 'standard',
    urgency: false
  })

  const [comparisonData, setComparisonData] = useState({
    equipment1: '',
    equipment2: '',
    equipment3: '',
    duration: 1,
    durationType: 'days'
  })

  const equipmentPricing = {
    'excavator-jcb': { name: 'Экскаватор JCB JS200', hourly: 650, daily: 4500, weekly: 28000, monthly: 110000 },
    'excavator-cat': { name: 'Экскаватор CAT 320D', hourly: 700, daily: 4800, weekly: 30000, monthly: 115000 },
    'truck-kamaz': { name: 'Самосвал КАМАЗ-65115', hourly: 450, daily: 3200, weekly: 20000, monthly: 75000 },
    'truck-maz': { name: 'Самосвал МАЗ-5516', hourly: 420, daily: 3000, weekly: 18500, monthly: 70000 },
    'crane-ks': { name: 'Автокран КС-45719', hourly: 800, daily: 5800, weekly: 36000, monthly: 140000 },
    'crane-liebherr': { name: 'Автокран Liebherr LTM', hourly: 900, daily: 6500, weekly: 40000, monthly: 155000 },
    'bulldozer-cat': { name: 'Бульдозер CAT D6T', hourly: 600, daily: 4200, weekly: 26000, monthly: 100000 },
    'bulldozer-komatsu': { name: 'Бульдозер Komatsu D65', hourly: 580, daily: 4000, weekly: 25000, monthly: 95000 }
  }

  const additionalServices = {
    delivery: { base: 2500, perKm: 50 },
    operator: { perShift: 1800, perHour: 250 },
    insurance: { perDay: 500, perHour: 70 },
    fuel: { perLiter: 55, avgConsumption: 15 }
  }

  const workTypeMultipliers = {
    standard: { name: 'Стандартные работы', multiplier: 1.0 },
    complex: { name: 'Сложные условия', multiplier: 1.2 },
    hazardous: { name: 'Опасные работы', multiplier: 1.5 },
    night: { name: 'Ночные работы', multiplier: 1.3 }
  }

  const calculateBasePrice = (equipmentId: string, duration: number, durationType: string) => {
    const equipment = equipmentPricing[equipmentId as keyof typeof equipmentPricing]
    if (!equipment) return 0

    switch (durationType) {
      case 'hours':
        return equipment.hourly * duration
      case 'days':
        return equipment.daily * duration
      case 'weeks':
        return equipment.weekly * duration
      case 'months':
        return equipment.monthly * duration
      default:
        return 0
    }
  }

  const calculateTotal = () => {
    if (!calculatorData.equipment) return { breakdown: [], total: 0 }

    const breakdown = []
    let total = 0

    // Базовая стоимость
    const basePrice = calculateBasePrice(calculatorData.equipment, calculatorData.duration, calculatorData.durationType) * calculatorData.quantity
    breakdown.push({
      item: `${equipmentPricing[calculatorData.equipment as keyof typeof equipmentPricing]?.name} x${calculatorData.quantity}`,
      price: basePrice,
      description: `${calculatorData.duration} ${calculatorData.durationType === 'days' ? 'дн.' : calculatorData.durationType === 'hours' ? 'ч.' : calculatorData.durationType === 'weeks' ? 'нед.' : 'мес.'}`
    })
    total += basePrice

    // Коэффициент сложности работ
    const workMultiplier = workTypeMultipliers[calculatorData.workType as keyof typeof workTypeMultipliers]?.multiplier || 1
    if (workMultiplier > 1) {
      const workTypePrice = basePrice * (workMultiplier - 1)
      breakdown.push({
        item: workTypeMultipliers[calculatorData.workType as keyof typeof workTypeMultipliers]?.name,
        price: workTypePrice,
        description: `+${((workMultiplier - 1) * 100).toFixed(0)}% к базовой стоимости`
      })
      total += workTypePrice
    }

    // Срочность
    if (calculatorData.urgency) {
      const urgencyPrice = basePrice * 0.3
      breakdown.push({
        item: 'Срочный заказ',
        price: urgencyPrice,
        description: '+30% к базовой стоимости'
      })
      total += urgencyPrice
    }

    // Доставка
    if (calculatorData.needDelivery) {
      const deliveryPrice = additionalServices.delivery.base + (calculatorData.deliveryDistance * additionalServices.delivery.perKm)
      breakdown.push({
        item: 'Доставка техники',
        price: deliveryPrice,
        description: calculatorData.deliveryDistance > 0 ? `${calculatorData.deliveryDistance} км` : 'В пределах МКАД'
      })
      total += deliveryPrice
    }

    // Оператор
    if (calculatorData.needOperator) {
      let operatorPrice = 0
      if (calculatorData.durationType === 'hours') {
        operatorPrice = additionalServices.operator.perHour * calculatorData.duration * calculatorData.quantity
      } else {
        const shifts = calculatorData.durationType === 'days' ? calculatorData.duration : calculatorData.duration * 7
        operatorPrice = additionalServices.operator.perShift * shifts * calculatorData.quantity
      }
      breakdown.push({
        item: 'Услуги оператора',
        price: operatorPrice,
        description: `${calculatorData.quantity} оператор(а)`
      })
      total += operatorPrice
    }

    // Страхование
    if (calculatorData.needInsurance) {
      let insurancePrice = 0
      if (calculatorData.durationType === 'hours') {
        insurancePrice = additionalServices.insurance.perHour * calculatorData.duration * calculatorData.quantity
      } else {
        const days = calculatorData.durationType === 'days' ? calculatorData.duration : calculatorData.duration * 7
        insurancePrice = additionalServices.insurance.perDay * days * calculatorData.quantity
      }
      breakdown.push({
        item: 'Страхование техники',
        price: insurancePrice,
        description: `${calculatorData.quantity} единиц техники`
      })
      total += insurancePrice
    }

    // Топливо
    if (calculatorData.needFuel) {
      const fuelConsumption = additionalServices.fuel.avgConsumption * calculatorData.workHours * calculatorData.duration * calculatorData.quantity
      const fuelPrice = fuelConsumption * additionalServices.fuel.perLiter
      breakdown.push({
        item: 'Топливо',
        price: fuelPrice,
        description: `~${fuelConsumption.toFixed(0)} литров`
      })
      total += fuelPrice
    }

    return { breakdown, total }
  }

  const calculateComparison = () => {
    const results = []
    const equipmentIds = [comparisonData.equipment1, comparisonData.equipment2, comparisonData.equipment3].filter(Boolean)
    
    equipmentIds.forEach(equipmentId => {
      if (equipmentId) {
        const equipment = equipmentPricing[equipmentId as keyof typeof equipmentPricing]
        const price = calculateBasePrice(equipmentId, comparisonData.duration, comparisonData.durationType)
        results.push({
          id: equipmentId,
          name: equipment.name,
          price,
          pricePerUnit: price / comparisonData.duration
        })
      }
    })

    return results.sort((a, b) => a.price - b.price)
  }

  const updateCalculatorData = (field: string, value: any) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }))
  }

  const updateComparisonData = (field: string, value: any) => {
    setComparisonData(prev => ({ ...prev, [field]: value }))
  }

  const { breakdown, total } = calculateTotal()
  const comparisonResults = calculateComparison()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Калькулятор стоимости</h1>
          <p className="text-gray-600 mt-2">Рассчитайте точную стоимость аренды техники</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Калькулятор</TabsTrigger>
            <TabsTrigger value="comparison">Сравнение техники</TabsTrigger>
          </TabsList>

          {/* Основной калькулятор */}
          <TabsContent value="calculator">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Форма расчета */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Параметры расчета</CardTitle>
                    <CardDescription>
                      Укажите детали для точного расчета стоимости
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Выбор техники */}
                    <div>
                      <Label htmlFor="equipment">Техника *</Label>
                      <Select value={calculatorData.equipment} onValueChange={(value) => updateCalculatorData('equipment', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите технику" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excavator-jcb">Экскаватор JCB JS200</SelectItem>
                          <SelectItem value="excavator-cat">Экскаватор CAT 320D</SelectItem>
                          <SelectItem value="truck-kamaz">Самосвал КАМАЗ-65115</SelectItem>
                          <SelectItem value="truck-maz">Самосвал МАЗ-5516</SelectItem>
                          <SelectItem value="crane-ks">Автокран КС-45719</SelectItem>
                          <SelectItem value="crane-liebherr">Автокран Liebherr LTM</SelectItem>
                          <SelectItem value="bulldozer-cat">Бульдозер CAT D6T</SelectItem>
                          <SelectItem value="bulldozer-komatsu">Бульдозер Komatsu D65</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Количество и период */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="quantity">Количество</Label>
                        <Input
                          id="quantity"
                          type="number"
                          min="1"
                          value={calculatorData.quantity}
                          onChange={(e) => updateCalculatorData('quantity', parseInt(e.target.value) || 1)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration">Продолжительность</Label>
                        <Input
                          id="duration"
                          type="number"
                          min="1"
                          value={calculatorData.duration}
                          onChange={(e) => updateCalculatorData('duration', parseInt(e.target.value) || 1)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="durationType">Единица времени</Label>
                        <Select value={calculatorData.durationType} onValueChange={(value) => updateCalculatorData('durationType', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hours">Часы</SelectItem>
                            <SelectItem value="days">Дни</SelectItem>
                            <SelectItem value="weeks">Недели</SelectItem>
                            <SelectItem value="months">Месяцы</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Тип работ */}
                    <div>
                      <Label htmlFor="workType">Тип работ</Label>
                      <Select value={calculatorData.workType} onValueChange={(value) => updateCalculatorData('workType', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(workTypeMultipliers).map(([key, type]) => (
                            <SelectItem key={key} value={key}>
                              {type.name} {type.multiplier > 1 && `(+${((type.multiplier - 1) * 100).toFixed(0)}%)`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Часы работы в день */}
                    {calculatorData.durationType !== 'hours' && (
                      <div>
                        <Label htmlFor="workHours">Часов работы в день</Label>
                        <Input
                          id="workHours"
                          type="number"
                          min="1"
                          max="24"
                          value={calculatorData.workHours}
                          onChange={(e) => updateCalculatorData('workHours', parseInt(e.target.value) || 8)}
                        />
                      </div>
                    )}

                    {/* Дополнительные опции */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Дополнительные услуги</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="urgency"
                            checked={calculatorData.urgency}
                            onCheckedChange={(checked) => updateCalculatorData('urgency', checked)}
                          />
                          <Label htmlFor="urgency" className="flex-1">
                            Срочный заказ (+30%)
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="delivery"
                            checked={calculatorData.needDelivery}
                            onCheckedChange={(checked) => updateCalculatorData('needDelivery', checked)}
                          />
                          <Label htmlFor="delivery" className="flex-1">
                            Доставка техники
                          </Label>
                        </div>

                        {calculatorData.needDelivery && (
                          <div className="ml-6">
                            <Label htmlFor="deliveryDistance">Расстояние доставки (км за МКАД)</Label>
                            <Input
                              id="deliveryDistance"
                              type="number"
                              min="0"
                              value={calculatorData.deliveryDistance}
                              onChange={(e) => updateCalculatorData('deliveryDistance', parseInt(e.target.value) || 0)}
                              placeholder="0 - в пределах МКАД"
                            />
                          </div>
                        )}

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="operator"
                            checked={calculatorData.needOperator}
                            onCheckedChange={(checked) => updateCalculatorData('needOperator', checked)}
                          />
                          <Label htmlFor="operator" className="flex-1">
                            Услуги оператора
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="insurance"
                            checked={calculatorData.needInsurance}
                            onCheckedChange={(checked) => updateCalculatorData('needInsurance', checked)}
                          />
                          <Label htmlFor="insurance" className="flex-1">
                            Страхование техники
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="fuel"
                            checked={calculatorData.needFuel}
                            onCheckedChange={(checked) => updateCalculatorData('needFuel', checked)}
                          />
                          <Label htmlFor="fuel" className="flex-1">
                            Включить топливо
                          </Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Результат расчета */}
              <div className="lg:col-span-1">
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle>Расчет стоимости</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {calculatorData.equipment ? (
                      <div className="space-y-4">
                        <div className="space-y-3">
                          {breakdown.map((item, index) => (
                            <div key={index}>
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{item.item}</div>
                                  {item.description && (
                                    <div className="text-xs text-gray-600">{item.description}</div>
                                  )}
                                </div>
                                <div className="text-sm font-medium ml-2">
                                  {item.price.toLocaleString()} ₽
                                </div>
                              </div>
                              {index < breakdown.length - 1 && <Separator className="mt-2" />}
                            </div>
                          ))}
                        </div>

                        <Separator />

                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">Итого:</span>
                          <span className="text-2xl font-bold text-blue-800">
                            {total.toLocaleString()} ₽
                          </span>
                        </div>

                        <div className="text-xs text-gray-500 text-center">
                          * Цены указаны с НДС
                        </div>

                        <div className="space-y-2">
                          <Button className="w-full bg-blue-800 hover:bg-blue-900">
                            <Icon name="Phone" className="mr-2 h-4 w-4" />
                            Заказать по этой цене
                          </Button>
                          <Button variant="outline" className="w-full">
                            <Icon name="Send" className="mr-2 h-4 w-4" />
                            Отправить расчет на email
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Выберите технику для расчета стоимости
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Сравнение техники */}
          <TabsContent value="comparison">
            <Card>
              <CardHeader>
                <CardTitle>Сравнение стоимости техники</CardTitle>
                <CardDescription>
                  Сравните цены на разную технику для выбора оптимального варианта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Параметры сравнения */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="compDuration">Продолжительность</Label>
                        <Input
                          id="compDuration"
                          type="number"
                          min="1"
                          value={comparisonData.duration}
                          onChange={(e) => updateComparisonData('duration', parseInt(e.target.value) || 1)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="compDurationType">Единица времени</Label>
                        <Select value={comparisonData.durationType} onValueChange={(value) => updateComparisonData('durationType', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hours">Часы</SelectItem>
                            <SelectItem value="days">Дни</SelectItem>
                            <SelectItem value="weeks">Недели</SelectItem>
                            <SelectItem value="months">Месяцы</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="equipment1">Техника 1</Label>
                        <Select value={comparisonData.equipment1} onValueChange={(value) => updateComparisonData('equipment1', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите технику" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(equipmentPricing).map(([key, equipment]) => (
                              <SelectItem key={key} value={key}>{equipment.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="equipment2">Техника 2</Label>
                        <Select value={comparisonData.equipment2} onValueChange={(value) => updateComparisonData('equipment2', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите технику" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(equipmentPricing).map(([key, equipment]) => (
                              <SelectItem key={key} value={key}>{equipment.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="equipment3">Техника 3 (опционально)</Label>
                        <Select value={comparisonData.equipment3} onValueChange={(value) => updateComparisonData('equipment3', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите технику" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Не выбрано</SelectItem>
                            {Object.entries(equipmentPricing).map(([key, equipment]) => (
                              <SelectItem key={key} value={key}>{equipment.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Результаты сравнения */}
                  <div>
                    <h4 className="font-medium mb-4">Результаты сравнения</h4>
                    {comparisonResults.length > 0 ? (
                      <div className="space-y-4">
                        {comparisonResults.map((result, index) => (
                          <Card key={result.id} className={`${index === 0 ? 'ring-2 ring-green-500' : ''}`}>
                            <CardContent className="pt-4">
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-medium">{result.name}</h5>
                                {index === 0 && (
                                  <Badge className="bg-green-600">Лучшая цена</Badge>
                                )}
                              </div>
                              <div className="space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-600">Общая стоимость:</span>
                                  <span className="font-bold text-blue-800">
                                    {result.price.toLocaleString()} ₽
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-600">
                                    За {comparisonData.durationType === 'days' ? 'день' : comparisonData.durationType === 'hours' ? 'час' : comparisonData.durationType === 'weeks' ? 'неделю' : 'месяц'}:
                                  </span>
                                  <span className="text-sm">
                                    {result.pricePerUnit.toLocaleString()} ₽
                                  </span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-8">
                        Выберите технику для сравнения
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Calculator