import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import Icon from '@/components/ui/icon'

const Maintenance = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [serviceRequest, setServiceRequest] = useState({
    equipment: '',
    serviceType: '',
    urgency: 'normal',
    description: '',
    preferredDate: '',
    contactPerson: '',
    phone: ''
  })

  const maintenanceServices = [
    {
      id: 'routine',
      title: 'Плановое ТО',
      description: 'Регулярное техническое обслуживание согласно регламенту',
      price: 'от 5,000 ₽',
      duration: '4-6 часов',
      frequency: 'Каждые 250 м/ч',
      icon: 'Settings',
      includes: [
        'Замена масла и фильтров',
        'Проверка гидравлики',
        'Диагностика двигателя',
        'Смазка узлов',
        'Проверка тормозной системы'
      ]
    },
    {
      id: 'repair',
      title: 'Ремонт техники',
      description: 'Устранение неисправностей и замена деталей',
      price: 'от 8,000 ₽',
      duration: '1-3 дня',
      frequency: 'По необходимости',
      icon: 'Wrench',
      includes: [
        'Диагностика неисправностей',
        'Замена неисправных деталей',
        'Сварочные работы',
        'Восстановление узлов',
        'Тестирование после ремонта'
      ]
    },
    {
      id: 'emergency',
      title: 'Аварийный ремонт',
      description: 'Экстренное устранение поломок на объекте',
      price: 'от 12,000 ₽',
      duration: '2-8 часов',
      frequency: 'Круглосуточно',
      icon: 'AlertTriangle',
      includes: [
        'Выезд на объект 24/7',
        'Экспресс-диагностика',
        'Временное восстановление',
        'Эвакуация при необходимости',
        'Предоставление замены'
      ]
    },
    {
      id: 'inspection',
      title: 'Техническая диагностика',
      description: 'Комплексная проверка состояния техники',
      price: 'от 3,000 ₽',
      duration: '2-3 часа',
      frequency: 'Перед арендой',
      icon: 'Search',
      includes: [
        'Компьютерная диагностика',
        'Проверка всех систем',
        'Измерение параметров',
        'Фотофиксация состояния',
        'Подробный отчет'
      ]
    }
  ]

  const equipmentStatus = [
    {
      id: 'EXC-001',
      name: 'Экскаватор JCB JS200',
      status: 'active',
      location: 'Объект "Северный"',
      nextService: '2024-02-15',
      mileage: 1250,
      condition: 92,
      lastService: '2024-01-15',
      issues: []
    },
    {
      id: 'TRK-002',
      name: 'Самосвал КАМАЗ-65115',
      status: 'maintenance',
      location: 'Сервисный центр',
      nextService: '2024-02-01',
      mileage: 2100,
      condition: 88,
      lastService: '2024-01-20',
      issues: ['Замена тормозных колодок']
    },
    {
      id: 'CRN-003',
      name: 'Автокран КС-45719',
      status: 'available',
      location: 'Склад техники',
      nextService: '2024-02-10',
      mileage: 890,
      condition: 95,
      lastService: '2024-01-05',
      issues: []
    }
  ]

  const serviceHistory = [
    {
      date: '2024-01-20',
      equipment: 'КАМАЗ-65115',
      type: 'Плановое ТО',
      description: 'Замена масла, фильтров, проверка тормозной системы',
      cost: 8500,
      technician: 'Петров А.И.',
      status: 'completed'
    },
    {
      date: '2024-01-15',
      equipment: 'JCB JS200',
      type: 'Ремонт',
      description: 'Замена гидравлического шланга, настройка системы',
      cost: 12000,
      technician: 'Сидоров М.П.',
      status: 'completed'
    },
    {
      date: '2024-01-10',
      equipment: 'КС-45719',
      type: 'Диагностика',
      description: 'Комплексная проверка перед долгосрочной арендой',
      cost: 3500,
      technician: 'Козлов В.С.',
      status: 'completed'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-600">В работе</Badge>
      case 'maintenance':
        return <Badge className="bg-yellow-600">На ТО</Badge>
      case 'available':
        return <Badge className="bg-blue-600">Доступна</Badge>
      case 'repair':
        return <Badge className="bg-red-600">В ремонте</Badge>
      default:
        return <Badge variant="outline">Неизвестно</Badge>
    }
  }

  const getConditionColor = (condition: number) => {
    if (condition >= 90) return 'text-green-600'
    if (condition >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  const updateServiceRequest = (field: string, value: any) => {
    setServiceRequest(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmitService = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Заявка на обслуживание отправлена! Наш специалист свяжется с вами.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Техническое обслуживание</h1>
          <p className="text-gray-600 mt-2">Профессиональное обслуживание и ремонт спецтехники</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="status">Статус техники</TabsTrigger>
            <TabsTrigger value="request">Заявка на ТО</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>

          {/* Услуги обслуживания */}
          <TabsContent value="services">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Виды технического обслуживания</h2>
                <p className="text-gray-600">Полный спектр услуг для поддержания техники в идеальном состоянии</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {maintenanceServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name={service.icon} size={24} className="text-blue-800" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">{service.price}</div>
                          <div className="text-xs text-gray-600">Стоимость</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">{service.duration}</div>
                          <div className="text-xs text-gray-600">Время</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">{service.frequency}</div>
                          <div className="text-xs text-gray-600">Периодичность</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-medium">Что включено:</h4>
                        {service.includes.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-blue-800 hover:bg-blue-900">
                        Заказать услугу
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                      <Icon name="Clock" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">24/7 Поддержка</h3>
                      <p className="text-blue-100">Круглосуточная аварийная служба</p>
                    </div>
                    <div>
                      <Icon name="Award" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Сертифицированные мастера</h3>
                      <p className="text-blue-100">Опытные специалисты с сертификатами</p>
                    </div>
                    <div>
                      <Icon name="Shield" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                      <p className="text-blue-100">Гарантия на все виды работ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Статус техники */}
          <TabsContent value="status">
            <Card>
              <CardHeader>
                <CardTitle>Статус техники в аренде</CardTitle>
                <CardDescription>
                  Текущее состояние и график обслуживания арендованной техники
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {equipmentStatus.map((equipment) => (
                    <div key={equipment.id} className="p-6 border rounded-lg hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold">{equipment.name}</h4>
                          <p className="text-sm text-gray-600">ID: {equipment.id}</p>
                        </div>
                        {getStatusBadge(equipment.status)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-medium mb-2">Основная информация</h5>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Локация:</span>
                              <span>{equipment.location}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Наработка:</span>
                              <span>{equipment.mileage} м/ч</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Последнее ТО:</span>
                              <span>{new Date(equipment.lastService).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-2">Техническое состояние</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Общее состояние:</span>
                              <span className={`font-medium ${getConditionColor(equipment.condition)}`}>
                                {equipment.condition}%
                              </span>
                            </div>
                            <Progress value={equipment.condition} />
                            <div className="text-xs text-gray-600">
                              Следующее ТО: {new Date(equipment.nextService).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium mb-2">Текущие проблемы</h5>
                          {equipment.issues.length > 0 ? (
                            <ul className="space-y-1">
                              {equipment.issues.map((issue, index) => (
                                <li key={index} className="flex items-center text-sm">
                                  <Icon name="AlertCircle" className="h-4 w-4 text-yellow-500 mr-2" />
                                  <span>{issue}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="flex items-center text-sm text-green-600">
                              <Icon name="CheckCircle" className="h-4 w-4 mr-2" />
                              <span>Проблем не выявлено</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-end mt-4 space-x-2">
                        <Button variant="outline" size="sm">
                          <Icon name="FileText" className="mr-2 h-4 w-4" />
                          Отчет о состоянии
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Calendar" className="mr-2 h-4 w-4" />
                          Запланировать ТО
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Заявка на обслуживание */}
          <TabsContent value="request">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Заявка на техническое обслуживание</CardTitle>
                  <CardDescription>
                    Заполните форму для вызова сервисной службы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitService} className="space-y-6">
                    <div>
                      <Label htmlFor="equipment">Техника *</Label>
                      <Select value={serviceRequest.equipment} onValueChange={(value) => updateServiceRequest('equipment', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите технику" />
                        </SelectTrigger>
                        <SelectContent>
                          {equipmentStatus.map(eq => (
                            <SelectItem key={eq.id} value={eq.id}>
                              {eq.name} (ID: {eq.id})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="serviceType">Тип обслуживания *</Label>
                      <Select value={serviceRequest.serviceType} onValueChange={(value) => updateServiceRequest('serviceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          {maintenanceServices.map(service => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="urgency">Срочность *</Label>
                      <Select value={serviceRequest.urgency} onValueChange={(value) => updateServiceRequest('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Низкая (плановое ТО)</SelectItem>
                          <SelectItem value="normal">Обычная (в течение недели)</SelectItem>
                          <SelectItem value="high">Высокая (в течение дня)</SelectItem>
                          <SelectItem value="urgent">Срочная (в течение 2 часов)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description">Описание проблемы *</Label>
                      <Textarea
                        id="description"
                        rows={5}
                        value={serviceRequest.description}
                        onChange={(e) => updateServiceRequest('description', e.target.value)}
                        placeholder="Опишите проблему, симптомы, когда началась неисправность..."
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactPerson">Контактное лицо *</Label>
                        <Input
                          id="contactPerson"
                          value={serviceRequest.contactPerson}
                          onChange={(e) => updateServiceRequest('contactPerson', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={serviceRequest.phone}
                          onChange={(e) => updateServiceRequest('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="preferredDate">Предпочтительная дата</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={serviceRequest.preferredDate}
                        onChange={(e) => updateServiceRequest('preferredDate', e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Календарь обслуживания */}
              <Card>
                <CardHeader>
                  <CardTitle>Календарь обслуживания</CardTitle>
                  <CardDescription>
                    Запланированные работы по техническому обслуживанию
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                  
                  <div className="mt-6 space-y-3">
                    <h4 className="font-medium">Запланированные работы:</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">15 февраля 2024</div>
                            <div className="text-sm text-gray-600">Плановое ТО - JCB JS200</div>
                          </div>
                          <Badge className="bg-blue-600">Запланировано</Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">20 февраля 2024</div>
                            <div className="text-sm text-gray-600">Диагностика - КАМАЗ-65115</div>
                          </div>
                          <Badge className="bg-yellow-600">В ожидании</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* История обслуживания */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>История технического обслуживания</CardTitle>
                <CardDescription>
                  Все выполненные работы по обслуживанию техники
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceHistory.map((record, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{record.equipment}</h4>
                          <p className="text-sm text-gray-600">{record.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">{new Date(record.date).toLocaleDateString()}</div>
                          <div className="font-semibold text-blue-800">{record.cost.toLocaleString()} ₽</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{record.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Мастер: {record.technician}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="FileText" className="mr-2 h-4 w-4" />
                            Акт работ
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" className="mr-2 h-4 w-4" />
                            Скачать
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Maintenance