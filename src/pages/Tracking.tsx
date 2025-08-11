import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [selectedEquipment, setSelectedEquipment] = useState('all')

  const activeOrders = [
    {
      id: 'ORD-2024-001',
      equipment: 'Экскаватор JCB JS200',
      client: 'ООО "СтройИнвест"',
      status: 'in-progress',
      location: 'г. Москва, ул. Промышленная, 25',
      startDate: '2024-01-25',
      endDate: '2024-01-30',
      operator: 'Петров А.И.',
      operatorPhone: '+7 (495) 123-45-67',
      progress: 65,
      workHours: 52,
      totalHours: 80,
      fuelLevel: 75,
      lastUpdate: '2024-01-27 14:30',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 'ORD-2024-002',
      equipment: 'Самосвал КАМАЗ-65115',
      client: 'Мосавтодор',
      status: 'delivery',
      location: 'г. Москва, МКАД, 15 км',
      startDate: '2024-01-27',
      endDate: '2024-02-02',
      operator: 'Сидоров М.П.',
      operatorPhone: '+7 (495) 123-45-68',
      progress: 15,
      workHours: 12,
      totalHours: 80,
      fuelLevel: 90,
      lastUpdate: '2024-01-27 15:45',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    {
      id: 'ORD-2024-003',
      equipment: 'Автокран КС-45719',
      client: 'ГК "Ритейл Девелопмент"',
      status: 'completed',
      location: 'г. Москва, ул. Центральная, 8',
      startDate: '2024-01-20',
      endDate: '2024-01-25',
      operator: 'Козлов В.С.',
      operatorPhone: '+7 (495) 123-45-69',
      progress: 100,
      workHours: 40,
      totalHours: 40,
      fuelLevel: 45,
      lastUpdate: '2024-01-25 18:00',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    }
  ]

  const trackingHistory = [
    {
      time: '14:30',
      date: '27.01.2024',
      event: 'Техника работает',
      description: 'Экскаватор выполняет земляные работы',
      status: 'active',
      location: 'Объект "Северный"'
    },
    {
      time: '12:00',
      date: '27.01.2024',
      event: 'Заправка техники',
      description: 'Заправлено 150 литров дизельного топлива',
      status: 'info',
      location: 'АЗС "Лукойл"'
    },
    {
      time: '08:00',
      date: '27.01.2024',
      event: 'Начало рабочей смены',
      description: 'Оператор приступил к работе',
      status: 'active',
      location: 'Объект "Северный"'
    },
    {
      time: '18:00',
      date: '26.01.2024',
      event: 'Окончание рабочей смены',
      description: 'Техника поставлена на стоянку',
      status: 'completed',
      location: 'Объект "Северный"'
    }
  ]

  const equipmentMetrics = [
    {
      title: 'Время работы',
      value: '52 ч',
      total: '80 ч',
      percentage: 65,
      icon: 'Clock',
      color: 'blue'
    },
    {
      title: 'Уровень топлива',
      value: '75%',
      total: '100%',
      percentage: 75,
      icon: 'Fuel',
      color: 'green'
    },
    {
      title: 'Пробег',
      value: '245 км',
      total: '400 км',
      percentage: 61,
      icon: 'Navigation',
      color: 'purple'
    },
    {
      title: 'Эффективность',
      value: '92%',
      total: '100%',
      percentage: 92,
      icon: 'TrendingUp',
      color: 'green'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Badge className="bg-green-600">В работе</Badge>
      case 'delivery':
        return <Badge className="bg-blue-600">Доставка</Badge>
      case 'completed':
        return <Badge className="bg-gray-600">Завершен</Badge>
      case 'maintenance':
        return <Badge className="bg-yellow-600">ТО</Badge>
      default:
        return <Badge variant="outline">Неизвестно</Badge>
    }
  }

  const getEventIcon = (status: string) => {
    switch (status) {
      case 'active': return 'Play'
      case 'completed': return 'CheckCircle'
      case 'info': return 'Info'
      case 'warning': return 'AlertTriangle'
      case 'error': return 'AlertCircle'
      default: return 'Circle'
    }
  }

  const getEventColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600'
      case 'completed': return 'text-blue-600'
      case 'info': return 'text-blue-600'
      case 'warning': return 'text-yellow-600'
      case 'error': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const filteredOrders = selectedEquipment === 'all' 
    ? activeOrders 
    : activeOrders.filter(order => order.equipment.toLowerCase().includes(selectedEquipment.toLowerCase()))

  const handleTrackOrder = () => {
    if (trackingNumber) {
      const order = activeOrders.find(o => o.id === trackingNumber)
      if (order) {
        alert(`Заказ найден: ${order.equipment} - ${order.status}`)
      } else {
        alert('Заказ с таким номером не найден')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Отслеживание техники</h1>
          <p className="text-gray-600 mt-2">Мониторинг работы техники в реальном времени</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="tracking" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tracking">Отслеживание</TabsTrigger>
            <TabsTrigger value="monitoring">Мониторинг</TabsTrigger>
            <TabsTrigger value="reports">Отчеты</TabsTrigger>
          </TabsList>

          {/* Отслеживание заказов */}
          <TabsContent value="tracking">
            <div className="space-y-8">
              {/* Поиск заказа */}
              <Card>
                <CardHeader>
                  <CardTitle>Отследить заказ</CardTitle>
                  <CardDescription>
                    Введите номер заказа для получения актуальной информации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <Label htmlFor="trackingNumber">Номер заказа</Label>
                      <Input
                        id="trackingNumber"
                        placeholder="Например: ORD-2024-001"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                      />
                    </div>
                    <div className="flex items-end">
                      <Button onClick={handleTrackOrder} className="bg-blue-800 hover:bg-blue-900">
                        <Icon name="Search" className="mr-2 h-4 w-4" />
                        Найти
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Активные заказы */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Активные заказы</CardTitle>
                      <CardDescription>Техника в работе и на доставке</CardDescription>
                    </div>
                    <select 
                      className="border rounded px-3 py-1 text-sm"
                      value={selectedEquipment}
                      onChange={(e) => setSelectedEquipment(e.target.value)}
                    >
                      <option value="all">Вся техника</option>
                      <option value="экскаватор">Экскаваторы</option>
                      <option value="самосвал">Самосвалы</option>
                      <option value="кран">Краны</option>
                    </select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {filteredOrders.map((order) => (
                      <div key={order.id} className="p-6 border rounded-lg hover:bg-gray-50">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-semibold">{order.equipment}</h4>
                            <p className="text-sm text-gray-600">Заказ #{order.id}</p>
                            <p className="text-sm text-gray-600">Клиент: {order.client}</p>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(order.status)}
                            <div className="text-sm text-gray-600 mt-1">
                              Обновлено: {order.lastUpdate}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          {equipmentMetrics.map((metric, index) => (
                            <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                              <Icon name={metric.icon} className={`h-6 w-6 mx-auto mb-2 text-${metric.color}-600`} />
                              <div className="font-semibold">{metric.value}</div>
                              <div className="text-xs text-gray-600">{metric.title}</div>
                              <Progress value={metric.percentage} className="mt-2" />
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Локация:</span>
                            <div className="font-medium">{order.location}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Оператор:</span>
                            <div className="font-medium">{order.operator}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Период:</span>
                            <div className="font-medium">
                              {new Date(order.startDate).toLocaleDateString()} - {new Date(order.endDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="MapPin" className="mr-2 h-4 w-4" />
                            На карте
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Phone" className="mr-2 h-4 w-4" />
                            Связаться
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="FileText" className="mr-2 h-4 w-4" />
                            Отчет
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Мониторинг в реальном времени */}
          <TabsContent value="monitoring">
            <div className="space-y-8">
              {/* Карта */}
              <Card>
                <CardHeader>
                  <CardTitle>Карта техники</CardTitle>
                  <CardDescription>
                    Расположение техники в реальном времени
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Map" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Интерактивная карта с GPS-трекингом</p>
                      <p className="text-sm text-gray-500">Здесь отображается реальное местоположение техники</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Детальная информация о выбранной технике */}
              <Card>
                <CardHeader>
                  <CardTitle>Детальная информация: Экскаватор JCB JS200</CardTitle>
                  <CardDescription>
                    Заказ #ORD-2024-001 • Обновлено: 27.01.2024 14:30
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Основные показатели */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Рабочие показатели</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Время работы:</span>
                          <span className="font-medium">52 из 80 часов</span>
                        </div>
                        <Progress value={65} />
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Топливо:</span>
                          <span className="font-medium">75%</span>
                        </div>
                        <Progress value={75} />
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Эффективность:</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <Progress value={92} />
                      </div>
                    </div>

                    {/* Техническое состояние */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Техническое состояние</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Двигатель:</span>
                          <Badge className="bg-green-600">Норма</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Гидравлика:</span>
                          <Badge className="bg-green-600">Норма</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Ходовая:</span>
                          <Badge className="bg-yellow-600">Внимание</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Электрика:</span>
                          <Badge className="bg-green-600">Норма</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Контакты */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Контактная информация</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Icon name="User" className="h-4 w-4 text-gray-400" />
                          <div>
                            <div className="font-medium text-sm">Петров А.И.</div>
                            <div className="text-xs text-gray-600">Оператор</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" className="h-4 w-4 text-gray-400" />
                          <div>
                            <div className="font-medium text-sm">+7 (495) 123-45-67</div>
                            <div className="text-xs text-gray-600">Прямая связь</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="MapPin" className="h-4 w-4 text-gray-400" />
                          <div>
                            <div className="font-medium text-sm">Объект "Северный"</div>
                            <div className="text-xs text-gray-600">Текущая локация</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <Icon name="Phone" className="mr-2 h-4 w-4" />
                          Позвонить оператору
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                          Написать в чат
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* История событий */}
              <Card>
                <CardHeader>
                  <CardTitle>История событий</CardTitle>
                  <CardDescription>
                    Хронология работы техники за последние дни
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingHistory.map((event, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Icon name={getEventIcon(event.status)} className={`h-5 w-5 ${getEventColor(event.status)}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{event.event}</h4>
                              <p className="text-sm text-gray-600">{event.description}</p>
                              <p className="text-xs text-gray-500 mt-1">{event.location}</p>
                            </div>
                            <div className="text-right text-sm text-gray-600">
                              <div>{event.time}</div>
                              <div>{event.date}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Отчеты */}
          <TabsContent value="reports">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Отчеты по работе техники</CardTitle>
                  <CardDescription>
                    Детальные отчеты о использовании техники
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon name="BarChart" className="h-8 w-8 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Отчет по времени работы</h4>
                          <p className="text-sm text-gray-600">Детализация рабочих часов</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" className="mr-2 h-4 w-4" />
                        Скачать
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon name="Fuel" className="h-8 w-8 text-green-600" />
                        <div>
                          <h4 className="font-medium">Отчет по топливу</h4>
                          <p className="text-sm text-gray-600">Расход топлива по дням</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" className="mr-2 h-4 w-4" />
                        Скачать
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon name="MapPin" className="h-8 w-8 text-purple-600" />
                        <div>
                          <h4 className="font-medium">Отчет по маршрутам</h4>
                          <p className="text-sm text-gray-600">GPS-треки перемещений</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" className="mr-2 h-4 w-4" />
                        Скачать
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon name="Activity" className="h-8 w-8 text-orange-600" />
                        <div>
                          <h4 className="font-medium">Отчет по производительности</h4>
                          <p className="text-sm text-gray-600">Эффективность работы</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" className="mr-2 h-4 w-4" />
                        Скачать
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon name="AlertTriangle" className="h-8 w-8 text-red-600" />
                        <div>
                          <h4 className="font-medium">Отчет по инцидентам</h4>
                          <p className="text-sm text-gray-600">Нарушения и происшествия</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" className="mr-2 h-4 w-4" />
                        Скачать
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon name="FileText" className="h-8 w-8 text-gray-600" />
                        <div>
                          <h4 className="font-medium">Сводный отчет</h4>
                          <p className="text-sm text-gray-600">Полная информация по заказу</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" className="mr-2 h-4 w-4" />
                        Скачать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Настройки уведомлений */}
              <Card>
                <CardHeader>
                  <CardTitle>Настройки уведомлений</CardTitle>
                  <CardDescription>
                    Настройте получение уведомлений о работе техники
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Начало/окончание работы</h4>
                        <p className="text-sm text-gray-600">Уведомления о начале и завершении смены</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Низкий уровень топлива</h4>
                        <p className="text-sm text-gray-600">Предупреждение при уровне топлива менее 20%</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Технические неисправности</h4>
                        <p className="text-sm text-gray-600">Уведомления о проблемах с техникой</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Выход за пределы зоны</h4>
                        <p className="text-sm text-gray-600">Предупреждение при покидании рабочей зоны</p>
                      </div>
                      <input type="checkbox" className="rounded" />
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

export default Tracking