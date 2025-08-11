import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from '@/components/ui/icon'

const Pricing = () => {
  const [calculatorData, setCalculatorData] = useState({
    equipment: '',
    duration: '1',
    durationType: 'days'
  })

  const equipmentPricing = {
    excavators: [
      { model: 'JCB JS200', hourly: 650, daily: 4500, weekly: 28000, monthly: 110000 },
      { model: 'CAT 320D', hourly: 700, daily: 4800, weekly: 30000, monthly: 115000 },
      { model: 'Hitachi ZX200', hourly: 680, daily: 4600, weekly: 29000, monthly: 112000 }
    ],
    trucks: [
      { model: 'КАМАЗ-65115', hourly: 450, daily: 3200, weekly: 20000, monthly: 75000 },
      { model: 'МАЗ-5516', hourly: 420, daily: 3000, weekly: 18500, monthly: 70000 },
      { model: 'Volvo FMX', hourly: 500, daily: 3500, weekly: 22000, monthly: 80000 }
    ],
    cranes: [
      { model: 'КС-45719', hourly: 800, daily: 5800, weekly: 36000, monthly: 140000 },
      { model: 'Liebherr LTM', hourly: 900, daily: 6500, weekly: 40000, monthly: 155000 },
      { model: 'Grove GMK', hourly: 850, daily: 6000, weekly: 37500, monthly: 145000 }
    ],
    bulldozers: [
      { model: 'CAT D6T', hourly: 600, daily: 4200, weekly: 26000, monthly: 100000 },
      { model: 'Komatsu D65', hourly: 580, daily: 4000, weekly: 25000, monthly: 95000 },
      { model: 'Shantui SD22', hourly: 520, daily: 3600, weekly: 22500, monthly: 85000 }
    ]
  }

  const additionalServices = [
    { service: 'Доставка техники (в пределах МКАД)', price: 2500, unit: 'за доставку' },
    { service: 'Доставка техники (за МКАД)', price: 50, unit: 'за км' },
    { service: 'Услуги оператора', price: 1800, unit: 'за смену' },
    { service: 'Топливо', price: 55, unit: 'за литр' },
    { service: 'Техническое обслуживание', price: 5000, unit: 'за ТО' },
    { service: 'Страхование техники', price: 500, unit: 'в сутки' }
  ]

  const discounts = [
    { duration: 'От 7 дней', discount: '5%', description: 'Скидка на недельную аренду' },
    { duration: 'От 1 месяца', discount: '15%', description: 'Скидка на месячную аренду' },
    { duration: 'От 3 месяцев', discount: '25%', description: 'Скидка на долгосрочную аренду' },
    { duration: 'Постоянным клиентам', discount: '10%', description: 'Дополнительная скидка' }
  ]

  const calculatePrice = () => {
    if (!calculatorData.equipment) return 0
    
    const category = calculatorData.equipment.split('-')[0]
    const modelIndex = parseInt(calculatorData.equipment.split('-')[1])
    const equipment = equipmentPricing[category as keyof typeof equipmentPricing][modelIndex]
    
    const duration = parseInt(calculatorData.duration)
    let price = 0
    
    switch (calculatorData.durationType) {
      case 'hours':
        price = equipment.hourly * duration
        break
      case 'days':
        price = equipment.daily * duration
        break
      case 'weeks':
        price = equipment.weekly * duration
        break
      case 'months':
        price = equipment.monthly * duration
        break
    }
    
    return price
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Прайс-лист</h1>
          <p className="text-gray-600 mt-2">Прозрачные цены без скрытых доплат</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Калькулятор стоимости */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Калькулятор стоимости</CardTitle>
              <CardDescription className="text-blue-100">
                Рассчитайте стоимость аренды техники
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <Label htmlFor="equipment" className="text-white">Техника</Label>
                  <Select value={calculatorData.equipment} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, equipment: value }))
                  }>
                    <SelectTrigger className="bg-white text-gray-900">
                      <SelectValue placeholder="Выберите технику" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excavators-0">JCB JS200</SelectItem>
                      <SelectItem value="excavators-1">CAT 320D</SelectItem>
                      <SelectItem value="trucks-0">КАМАЗ-65115</SelectItem>
                      <SelectItem value="cranes-0">КС-45719</SelectItem>
                      <SelectItem value="bulldozers-0">CAT D6T</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="duration" className="text-white">Количество</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    value={calculatorData.duration}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, duration: e.target.value }))}
                    className="bg-white text-gray-900"
                  />
                </div>
                
                <div>
                  <Label htmlFor="durationType" className="text-white">Период</Label>
                  <Select value={calculatorData.durationType} onValueChange={(value) => 
                    setCalculatorData(prev => ({ ...prev, durationType: value }))
                  }>
                    <SelectTrigger className="bg-white text-gray-900">
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
                
                <div className="flex items-end">
                  <div className="w-full">
                    <Label className="text-white">Стоимость</Label>
                    <div className="bg-white text-gray-900 rounded-md px-3 py-2 text-lg font-bold">
                      {calculatePrice().toLocaleString()} ₽
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-white text-blue-800 hover:bg-gray-100">
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  Заказать по этой цене
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Прайс-листы по категориям */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Цены на аренду техники</h2>
          
          <Tabs defaultValue="excavators" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="excavators">Экскаваторы</TabsTrigger>
              <TabsTrigger value="trucks">Грузовики</TabsTrigger>
              <TabsTrigger value="cranes">Краны</TabsTrigger>
              <TabsTrigger value="bulldozers">Бульдозеры</TabsTrigger>
            </TabsList>
            
            {Object.entries(equipmentPricing).map(([category, equipment]) => (
              <TabsContent key={category} value={category}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left">Модель</th>
                            <th className="border p-3 text-center">Час</th>
                            <th className="border p-3 text-center">Сутки</th>
                            <th className="border p-3 text-center">Неделя</th>
                            <th className="border p-3 text-center">Месяц</th>
                            <th className="border p-3 text-center">Действие</th>
                          </tr>
                        </thead>
                        <tbody>
                          {equipment.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">{item.model}</td>
                              <td className="border p-3 text-center font-semibold">{item.hourly.toLocaleString()} ₽</td>
                              <td className="border p-3 text-center font-semibold">{item.daily.toLocaleString()} ₽</td>
                              <td className="border p-3 text-center font-semibold">{item.weekly.toLocaleString()} ₽</td>
                              <td className="border p-3 text-center font-semibold">{item.monthly.toLocaleString()} ₽</td>
                              <td className="border p-3 text-center">
                                <Button size="sm" className="bg-blue-800 hover:bg-blue-900">
                                  Заказать
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Дополнительные услуги */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Дополнительные услуги</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{service.service}</h4>
                      <p className="text-sm text-gray-600">{service.unit}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-blue-800">
                        {service.price.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Скидки */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Система скидок</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discounts.map((discount, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-green-600">{discount.discount}</span>
                  </div>
                  <CardTitle className="text-lg">{discount.duration}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{discount.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Icon name="Info" className="h-6 w-6 text-yellow-600" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Важная информация</h4>
                  <p className="text-yellow-700 text-sm mt-1">
                    Все цены указаны без НДС. Скидки не суммируются. 
                    Окончательная стоимость рассчитывается индивидуально с учетом всех условий.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Pricing