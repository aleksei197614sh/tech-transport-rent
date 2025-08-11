import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from '@/components/ui/icon'

const Insurance = () => {
  const [insuranceData, setInsuranceData] = useState({
    equipment: '',
    duration: 1,
    durationType: 'days',
    coverage: 'standard',
    equipmentValue: 0,
    deductible: 10000,
    additionalCoverage: {
      theft: false,
      vandalism: false,
      naturalDisasters: false,
      operatorLiability: false
    }
  })

  const insurancePlans = [
    {
      id: 'basic',
      name: 'Базовая защита',
      price: 300,
      priceUnit: 'в сутки',
      coverage: 'До 1 млн ₽',
      deductible: '20,000 ₽',
      features: [
        'Поломка техники',
        'Механические повреждения',
        'Базовая техподдержка',
        'Замена техники при поломке'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Стандартная защита',
      price: 500,
      priceUnit: 'в сутки',
      coverage: 'До 3 млн ₽',
      deductible: '10,000 ₽',
      features: [
        'Все из базового плана',
        'Кража и угон',
        'Вандализм',
        'Приоритетная поддержка',
        'Ускоренная замена техники'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум защита',
      price: 800,
      priceUnit: 'в сутки',
      coverage: 'До 5 млн ₽',
      deductible: '5,000 ₽',
      features: [
        'Все из стандартного плана',
        'Природные катастрофы',
        'Ответственность оператора',
        'Круглосуточная поддержка',
        'Компенсация простоя'
      ],
      popular: false
    }
  ]

  const equipmentTypes = [
    { id: 'excavator', name: 'Экскаватор', baseValue: 3500000, riskMultiplier: 1.0 },
    { id: 'truck', name: 'Самосвал', baseValue: 2800000, riskMultiplier: 0.8 },
    { id: 'crane', name: 'Автокран', baseValue: 4200000, riskMultiplier: 1.2 },
    { id: 'bulldozer', name: 'Бульдозер', baseValue: 3200000, riskMultiplier: 0.9 }
  ]

  const claimProcess = [
    {
      step: 1,
      title: 'Уведомление о происшествии',
      description: 'Немедленно сообщите о случае по телефону горячей линии',
      timeframe: 'В течение 24 часов',
      icon: 'Phone'
    },
    {
      step: 2,
      title: 'Документирование',
      description: 'Зафиксируйте повреждения, сделайте фото, составьте акт',
      timeframe: 'На месте происшествия',
      icon: 'Camera'
    },
    {
      step: 3,
      title: 'Подача заявления',
      description: 'Подайте официальное заявление с приложением документов',
      timeframe: 'В течение 3 дней',
      icon: 'FileText'
    },
    {
      step: 4,
      title: 'Экспертиза',
      description: 'Проведение независимой экспертизы ущерба',
      timeframe: '5-10 рабочих дней',
      icon: 'Search'
    },
    {
      step: 5,
      title: 'Выплата',
      description: 'Получение страхового возмещения',
      timeframe: '10-15 рабочих дней',
      icon: 'CreditCard'
    }
  ]

  const faqItems = [
    {
      question: 'Что покрывает страхование техники?',
      answer: 'Страхование покрывает поломки, механические повреждения, кражу, вандализм и другие риски в зависимости от выбранного плана. Подробный список покрытий указан в договоре страхования.'
    },
    {
      question: 'Как быстро происходит выплата?',
      answer: 'После подачи всех необходимых документов и проведения экспертизы выплата производится в течение 10-15 рабочих дней.'
    },
    {
      question: 'Можно ли изменить план страхования?',
      answer: 'Да, план страхования можно изменить, но изменения вступают в силу только с начала нового периода аренды.'
    },
    {
      question: 'Что такое франшиза?',
      answer: 'Франшиза - это сумма ущерба, которую вы оплачиваете самостоятельно. Страховая компания возмещает ущерб сверх этой суммы.'
    }
  ]

  const calculateInsuranceCost = () => {
    if (!insuranceData.equipment) return 0

    const equipment = equipmentTypes.find(eq => eq.id === insuranceData.equipment)
    if (!equipment) return 0

    const plan = insurancePlans.find(p => p.id === insuranceData.coverage)
    if (!plan) return 0

    let baseCost = plan.price * insuranceData.duration
    
    // Применяем коэффициент риска для типа техники
    baseCost *= equipment.riskMultiplier

    // Дополнительные покрытия
    let additionalCost = 0
    if (insuranceData.additionalCoverage.theft) additionalCost += 100 * insuranceData.duration
    if (insuranceData.additionalCoverage.vandalism) additionalCost += 80 * insuranceData.duration
    if (insuranceData.additionalCoverage.naturalDisasters) additionalCost += 150 * insuranceData.duration
    if (insuranceData.additionalCoverage.operatorLiability) additionalCost += 200 * insuranceData.duration

    return baseCost + additionalCost
  }

  const updateInsuranceData = (field: string, value: any) => {
    setInsuranceData(prev => ({ ...prev, [field]: value }))
  }

  const updateAdditionalCoverage = (field: string, value: boolean) => {
    setInsuranceData(prev => ({
      ...prev,
      additionalCoverage: { ...prev.additionalCoverage, [field]: value }
    }))
  }

  const handleSubmitInsurance = () => {
    alert('Заявка на страхование отправлена! Мы свяжемся с вами для оформления полиса.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Страхование техники</h1>
          <p className="text-gray-600 mt-2">Защитите свой бизнес от непредвиденных расходов</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="plans" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="plans">Планы страхования</TabsTrigger>
            <TabsTrigger value="calculator">Калькулятор</TabsTrigger>
            <TabsTrigger value="claims">Урегулирование</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Планы страхования */}
          <TabsContent value="plans">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Выберите план защиты</h2>
              <p className="text-gray-600 text-center">Надежная защита вашей техники от различных рисков</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insurancePlans.map((plan) => (
                <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="text-3xl font-bold text-blue-800 mt-2">
                        {plan.price.toLocaleString()} ₽
                      </div>
                      <div className="text-sm">{plan.priceUnit}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Покрытие:</span>
                        <span className="font-medium">{plan.coverage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Франшиза:</span>
                        <span className="font-medium">{plan.deductible}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-medium">Что включено:</h4>
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-blue-800 hover:bg-blue-900">
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Icon name="Shield" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Быстрое урегулирование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Выплаты по страховым случаям в течение 10-15 рабочих дней
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Icon name="Clock" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Круглосуточная поддерж ка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Горячая линия работает 24/7 для оперативного реагирования
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Icon name="Award" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Надежный партнер</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Сотрудничаем с ведущими страховыми компаниями России
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Калькулятор страхования */}
          <TabsContent value="calculator">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Расчет стоимости страхования</CardTitle>
                  <CardDescription>
                    Рассчитайте стоимость страхования для вашей техники
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="equipmentType">Тип техники *</Label>
                    <Select value={insuranceData.equipment} onValueChange={(value) => updateInsuranceData('equipment', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип техники" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipmentTypes.map(type => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="insDuration">Период</Label>
                      <Input
                        id="insDuration"
                        type="number"
                        min="1"
                        value={insuranceData.duration}
                        onChange={(e) => updateInsuranceData('duration', parseInt(e.target.value) || 1)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="insDurationType">Единица</Label>
                      <Select value={insuranceData.durationType} onValueChange={(value) => updateInsuranceData('durationType', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="days">Дни</SelectItem>
                          <SelectItem value="weeks">Недели</SelectItem>
                          <SelectItem value="months">Месяцы</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="coverage">План страхования *</Label>
                    <Select value={insuranceData.coverage} onValueChange={(value) => updateInsuranceData('coverage', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {insurancePlans.map(plan => (
                          <SelectItem key={plan.id} value={plan.id}>
                            {plan.name} - {plan.price} ₽/сутки
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Дополнительные покрытия</Label>
                    <div className="space-y-3 mt-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="theft"
                          checked={insuranceData.additionalCoverage.theft}
                          onCheckedChange={(checked) => updateAdditionalCoverage('theft', checked as boolean)}
                        />
                        <Label htmlFor="theft" className="flex-1">
                          Расширенная защита от кражи (+100 ₽/сутки)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="vandalism"
                          checked={insuranceData.additionalCoverage.vandalism}
                          onCheckedChange={(checked) => updateAdditionalCoverage('vandalism', checked as boolean)}
                        />
                        <Label htmlFor="vandalism" className="flex-1">
                          Защита от вандализма (+80 ₽/сутки)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="naturalDisasters"
                          checked={insuranceData.additionalCoverage.naturalDisasters}
                          onCheckedChange={(checked) => updateAdditionalCoverage('naturalDisasters', checked as boolean)}
                        />
                        <Label htmlFor="naturalDisasters" className="flex-1">
                          Природные катастрофы (+150 ₽/сутки)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="operatorLiability"
                          checked={insuranceData.additionalCoverage.operatorLiability}
                          onCheckedChange={(checked) => updateAdditionalCoverage('operatorLiability', checked as boolean)}
                        />
                        <Label htmlFor="operatorLiability" className="flex-1">
                          Ответственность оператора (+200 ₽/сутки)
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Результат расчета */}
              <Card>
                <CardHeader>
                  <CardTitle>Стоимость страхования</CardTitle>
                </CardHeader>
                <CardContent>
                  {insuranceData.equipment ? (
                    <div className="space-y-6">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium mb-2">Выбранный план</h4>
                        <div className="text-lg font-bold text-blue-800">
                          {insurancePlans.find(p => p.id === insuranceData.coverage)?.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          Покрытие: {insurancePlans.find(p => p.id === insuranceData.coverage)?.coverage}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Базовая стоимость:</span>
                          <span>{(insurancePlans.find(p => p.id === insuranceData.coverage)?.price || 0 * insuranceData.duration).toLocaleString()} ₽</span>
                        </div>

                        {Object.entries(insuranceData.additionalCoverage).map(([key, value]) => {
                          if (!value) return null
                          const costs = { theft: 100, vandalism: 80, naturalDisasters: 150, operatorLiability: 200 }
                          const labels = { 
                            theft: 'Защита от кражи', 
                            vandalism: 'Защита от вандализма', 
                            naturalDisasters: 'Природные катастрофы', 
                            operatorLiability: 'Ответственность оператора' 
                          }
                          return (
                            <div key={key} className="flex justify-between text-sm">
                              <span>{labels[key as keyof typeof labels]}:</span>
                              <span>{(costs[key as keyof typeof costs] * insuranceData.duration).toLocaleString()} ₽</span>
                            </div>
                          )
                        })}
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">Итого:</span>
                          <span className="text-2xl font-bold text-blue-800">
                            {calculateInsuranceCost().toLocaleString()} ₽
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 text-center mt-2">
                          За {insuranceData.duration} {insuranceData.durationType === 'days' ? 'дн.' : insuranceData.durationType === 'weeks' ? 'нед.' : 'мес.'}
                        </div>
                      </div>

                      <Button onClick={handleSubmitInsurance} className="w-full bg-blue-800 hover:bg-blue-900">
                        <Icon name="Shield" className="mr-2 h-4 w-4" />
                        Оформить страхование
                      </Button>

                      <div className="text-xs text-gray-500 text-center">
                        * Окончательная стоимость может быть скорректирована после оценки рисков
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      Выберите тип техники для расчета
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Урегулирование убытков */}
          <TabsContent value="claims">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Процедура урегулирования убытков</CardTitle>
                  <CardDescription>
                    Пошаговая инструкция действий при страховом случае
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {claimProcess.map((step, index) => (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name={step.icon} size={20} className="text-blue-800" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold">Шаг {step.step}: {step.title}</h4>
                            <Badge variant="outline" className="text-xs">
                              {step.timeframe}
                            </Badge>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        {index < claimProcess.length - 1 && (
                          <div className="absolute left-6 mt-12 w-0.5 h-6 bg-gray-300"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Экстренные контакты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Phone" className="h-5 w-5 text-red-600" />
                          <h4 className="font-semibold text-red-800">Горячая линия</h4>
                        </div>
                        <div className="text-lg font-bold text-red-800">+7 (495) 911-24-24</div>
                        <div className="text-sm text-red-600">Круглосуточно, без выходных</div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Mail" className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-blue-800">Email для заявлений</h4>
                        </div>
                        <div className="font-medium">claims@specteh.ru</div>
                        <div className="text-sm text-blue-600">Ответ в течение 2 часов</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Необходимые документы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Icon name="FileText" className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">Заявление о страховом случае</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Camera" className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">Фотографии повреждений</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="FileCheck" className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">Акт о происшествии</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Receipt" className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">Документы о расходах</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="Shield" className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">Справка из ГИБДД (при ДТП)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
                <CardDescription>
                  Ответы на популярные вопросы о страховании техники
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Insurance