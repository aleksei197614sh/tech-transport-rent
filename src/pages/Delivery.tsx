import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Delivery = () => {
  const [deliveryData, setDeliveryData] = useState({
    equipment: '',
    fromAddress: '',
    toAddress: '',
    deliveryDate: '',
    deliveryTime: '',
    returnDate: '',
    returnTime: '',
    specialRequirements: '',
    urgentDelivery: false
  })

  const deliveryZones = [
    {
      zone: 'Зона 1 - МКАД',
      description: 'В пределах Московской кольцевой автодороги',
      price: 'Бесплатно',
      timeframe: '2-4 часа',
      color: 'bg-green-600'
    },
    {
      zone: 'Зона 2 - до 30 км',
      description: 'От МКАД до 30 км в любом направлении',
      price: '50 ₽/км',
      timeframe: '3-5 часов',
      color: 'bg-blue-600'
    },
    {
      zone: 'Зона 3 - до 100 км',
      description: 'От 30 до 100 км от МКАД',
      price: '45 ₽/км',
      timeframe: '4-8 часов',
      color: 'bg-yellow-600'
    },
    {
      zone: 'Зона 4 - свыше 100 км',
      description: 'Более 100 км от МКАД',
      price: 'По договоренности',
      timeframe: 'От 1 дня',
      color: 'bg-red-600'
    }
  ]

  const deliveryServices = [
    {
      title: 'Стандартная доставка',
      description: 'Доставка в рабочее время в течение дня',
      price: 'Согласно тарифам',
      timeframe: '2-8 часов',
      features: ['Доставка в рабочее время', 'Уведомление за час', 'Базовая страховка'],
      icon: 'Truck'
    },
    {
      title: 'Срочная доставка',
      description: 'Экстренная доставка в течение 2 часов',
      price: '+100% к тарифу',
      timeframe: 'До 2 часов',
      features: ['Приоритетная подача', 'Отслеживание в реальном времени', 'Гарантия времени'],
      icon: 'Zap'
    },
    {
      title: 'Ночная доставка',
      description: 'Доставка в ночное время (22:00-06:00)',
      price: '+50% к тарифу',
      timeframe: 'В ночное время',
      features: ['Доставка ночью', 'Минимум шума', 'Специальное разрешение'],
      icon: 'Moon'
    },
    {
      title: 'Доставка выходного дня',
      description: 'Доставка в субботу и воскресенье',
      price: '+30% к тарифу',
      timeframe: 'Выходные дни',
      features: ['Работа в выходные', 'Полный сервис', 'Техподдержка'],
      icon: 'Calendar'
    }
  ]

  const trackingSteps = [
    { status: 'confirmed', title: 'Заказ подтвержден', time: '09:00', completed: true },
    { status: 'preparing', title: 'Подготовка техники', time: '09:30', completed: true },
    { status: 'loading', title: 'Погрузка на трал', time: '10:15', completed: true },
    { status: 'in-transit', title: 'В пути', time: '10:45', completed: false },
    { status: 'delivered', title: 'Доставлено', time: '12:00', completed: false }
  ]

  const equipment = [
    { id: 'excavator-jcb', name: 'Экскаватор JCB JS200', weight: '20т', dimensions: '9.8 x 2.8 x 3.2м' },
    { id: 'truck-kamaz', name: 'Самосвал КАМАЗ-65115', weight: '15т', dimensions: '8.5 x 2.5 x 3.5м' },
    { id: 'crane-ks', name: 'Автокран КС-45719', weight: '25т', dimensions: '12.0 x 2.5 x 3.8м' },
    { id: 'bulldozer-cat', name: 'Бульдозер CAT D6T', weight: '18т', dimensions: '6.2 x 3.4 x 3.1м' }
  ]

  const calculateDeliveryPrice = () => {
    // Простой расчет для демонстрации
    const distance = 25 // км за МКАД
    const basePrice = distance <= 0 ? 0 : distance * 50
    const urgentMultiplier = deliveryData.urgentDelivery ? 2 : 1
    return basePrice * urgentMultiplier
  }

  const updateDeliveryData = (field: string, value: any) => {
    setDeliveryData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmitDelivery = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Заявка на доставку отправлена! Мы свяжемся с вами для уточнения деталей.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Доставка техники</h1>
          <p className="text-gray-600 mt-2">Быстрая и надежная доставка спецтехники на ваш объект</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="zones" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="zones">Зоны доставки</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="order">Заказать доставку</TabsTrigger>
            <TabsTrigger value="tracking">Отслеживание</TabsTrigger>
          </TabsList>

          {/* Зоны доставки */}
          <TabsContent value="zones">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Зоны доставки и тарифы</CardTitle>
                  <CardDescription>
                    Мы доставляем технику по Москве и Московской области
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {deliveryZones.map((zone, index) => (
                      <Card key={index} className="border-l-4" style={{ borderLeftColor: zone.color.replace('bg-', '#') }}>
                        <CardHeader>
                          <CardTitle className="text-lg">{zone.zone}</CardTitle>
                          <CardDescription>{zone.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Стоимость:</span>
                              <span className="font-semibold">{zone.price}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Время:</span>
                              <span className="font-semibold">{zone.timeframe}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Карта зон доставки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Map" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Интерактивная карта зон доставки</p>
                      <p className="text-sm text-gray-500">Здесь будет отображена карта с зонами доставки</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Услуги доставки */}
          <TabsContent value="services">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {deliveryServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name={service.icon} size={24} className="text-blue-800" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Стоимость:</span>
                          <span className="font-semibold">{service.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Время доставки:</span>
                          <span className="font-semibold">{service.timeframe}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-medium">Особенности:</h4>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-blue-800 hover:bg-blue-900">
                        Выбрать услугу
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Требования к объекту</CardTitle>
                  <CardDescription>
                    Что нужно подготовить для доставки техники
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Подъездные пути</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Ширина проезда не менее 3.5м</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Твердое покрытие или уплотненный грунт</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Отсутствие низких мостов и проводов</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Возможность разворота трала</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Площадка для техники</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Ровная площадка для установки</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Безопасное место для стоянки</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Доступ к электричеству (при необходимости)</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Ответственное лицо на объекте</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Заказ доставки */}
          <TabsContent value="order">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Заказать доставку</CardTitle>
                  <CardDescription>
                    Заполните форму для организации доставки техники
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitDelivery} className="space-y-6">
                    <div>
                      <Label htmlFor="equipment">Техника *</Label>
                      <Select value={deliveryData.equipment} onValueChange={(value) => updateDeliveryData('equipment', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите технику" />
                        </SelectTrigger>
                        <SelectContent>
                          {equipment.map(eq => (
                            <SelectItem key={eq.id} value={eq.id}>
                              {eq.name} ({eq.weight}, {eq.dimensions})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="fromAddress">Адрес подачи</Label>
                      <Textarea
                        id="fromAddress"
                        value={deliveryData.fromAddress}
                        onChange={(e) => updateDeliveryData('fromAddress', e.target.value)}
                        placeholder="Наш склад (заполняется автоматически)"
                        rows={2}
                        disabled
                      />
                    </div>

                    <div>
                      <Label htmlFor="toAddress">Адрес доставки *</Label>
                      <Textarea
                        id="toAddress"
                        value={deliveryData.toAddress}
                        onChange={(e) => updateDeliveryData('toAddress', e.target.value)}
                        placeholder="Укажите точный адрес с ориентирами"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="deliveryDate">Дата доставки *</Label>
                        <Input
                          id="deliveryDate"
                          type="date"
                          value={deliveryData.deliveryDate}
                          onChange={(e) => updateDeliveryData('deliveryDate', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="deliveryTime">Время доставки</Label>
                        <Select value={deliveryData.deliveryTime} onValueChange={(value) => updateDeliveryData('deliveryTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите время" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Утром (8:00-12:00)</SelectItem>
                            <SelectItem value="afternoon">Днем (12:00-16:00)</SelectItem>
                            <SelectItem value="evening">Вечером (16:00-20:00)</SelectItem>
                            <SelectItem value="exact">Точное время</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="returnDate">Дата возврата</Label>
                        <Input
                          id="returnDate"
                          type="date"
                          value={deliveryData.returnDate}
                          onChange={(e) => updateDeliveryData('returnDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="returnTime">Время возврата</Label>
                        <Select value={deliveryData.returnTime} onValueChange={(value) => updateDeliveryData('returnTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите время" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Утром (8:00-12:00)</SelectItem>
                            <SelectItem value="afternoon">Днем (12:00-16:00)</SelectItem>
                            <SelectItem value="evening">Вечером (16:00-20:00)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specialRequirements">Особые требования</Label>
                      <Textarea
                        id="specialRequirements"
                        value={deliveryData.specialRequirements}
                        onChange={(e) => updateDeliveryData('specialRequirements', e.target.value)}
                        placeholder="Укажите особенности объекта, ограничения по времени, контактные данные ответственного лица..."
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="urgentDelivery"
                        checked={deliveryData.urgentDelivery}
                        onChange={(e) => updateDeliveryData('urgentDelivery', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="urgentDelivery">
                        Срочная доставка (+100% к стоимости)
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                      <Icon name="Truck" className="mr-2 h-4 w-4" />
                      Заказать доставку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Расчет стоимости */}
              <Card>
                <CardHeader>
                  <CardTitle>Расчет стоимости доставки</CardTitle>
                </CardHeader>
                <CardContent>
                  {deliveryData.equipment && deliveryData.toAddress ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium mb-2">Выбранная техника</h4>
                        <p>{equipment.find(eq => eq.id === deliveryData.equipment)?.name}</p>
                        <p className="text-sm text-gray-600">
                          {equipment.find(eq => eq.id === deliveryData.equipment)?.weight}, {equipment.find(eq => eq.id === deliveryData.equipment)?.dimensions}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Базовая стоимость доставки:</span>
                          <span>{calculateDeliveryPrice().toLocaleString()} ₽</span>
                        </div>
                        {deliveryData.urgentDelivery && (
                          <div className="flex justify-between text-sm">
                            <span>Срочная доставка:</span>
                            <span>+{calculateDeliveryPrice().toLocaleString()} ₽</span>
                          </div>
                        )}
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Итого:</span>
                          <span className="text-blue-800">
                            {(deliveryData.urgentDelivery ? calculateDeliveryPrice() * 2 : calculateDeliveryPrice()).toLocaleString()} ₽
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      Выберите технику и укажите адрес для расчета стоимости
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Отслеживание */}
          <TabsContent value="tracking">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Отслеживание доставки</CardTitle>
                  <CardDescription>
                    Следите за статусом доставки в реальном времени
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <Label htmlFor="trackingNumber">Номер заказа</Label>
                    <div className="flex space-x-2 mt-2">
                      <Input
                        id="trackingNumber"
                        placeholder="Введите номер заказа"
                        className="flex-1"
                      />
                      <Button className="bg-blue-800 hover:bg-blue-900">
                        <Icon name="Search" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="font-semibold">Статус доставки: Заказ #ORD-2024-001</h4>
                    
                    <div className="space-y-4">
                      {trackingSteps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {step.completed ? (
                              <Icon name="Check" className="h-4 w-4" />
                            ) : (
                              <span className="text-sm">{index + 1}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <h5 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                {step.title}
                              </h5>
                              <span className="text-sm text-gray-600">{step.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Truck" className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-medium text-blue-800">Текущий статус</h4>
                          <p className="text-blue-700 text-sm">
                            Техника в пути. Ожидаемое время прибытия: 12:00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Контакты водителя</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="User" className="h-4 w-4 text-gray-400" />
                        <span>Водитель: Сергей Иванов</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" className="h-4 w-4 text-gray-400" />
                        <span>+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Truck" className="h-4 w-4 text-gray-400" />
                        <span>Трал: А123БВ777</span>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" className="w-full mb-2">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        Позвонить водителю
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                        Написать в чат
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Delivery