import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import Icon from '@/components/ui/icon'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Иван Петров',
    email: 'ivan.petrov@example.com',
    phone: '+7 (495) 123-45-67',
    company: 'ООО "СтройИнвест"',
    inn: '7701234567',
    address: 'г. Москва, ул. Строительная, 15',
    clientType: 'legal',
    notifications: {
      email: true,
      sms: true,
      push: false
    }
  })

  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-001',
      equipment: 'Экскаватор JCB JS200',
      startDate: '2024-01-15',
      endDate: '2024-01-20',
      status: 'completed',
      total: 22500,
      location: 'г. Москва, ул. Промышленная, 25'
    },
    {
      id: 'ORD-2024-002',
      equipment: 'Самосвал КАМАЗ-65115',
      startDate: '2024-01-25',
      endDate: '2024-01-30',
      status: 'active',
      total: 16000,
      location: 'г. Москва, МКАД, 15 км'
    },
    {
      id: 'ORD-2024-003',
      equipment: 'Автокран КС-45719',
      startDate: '2024-02-01',
      endDate: '2024-02-05',
      status: 'pending',
      total: 29000,
      location: 'г. Москва, ул. Центральная, 8'
    }
  ])

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Договор аренды ORD-2024-001',
      type: 'contract',
      date: '2024-01-15',
      size: '245 KB'
    },
    {
      id: 2,
      name: 'Акт приема-передачи ORD-2024-001',
      type: 'act',
      date: '2024-01-15',
      size: '189 KB'
    },
    {
      id: 3,
      name: 'Счет на оплату ORD-2024-002',
      type: 'invoice',
      date: '2024-01-25',
      size: '156 KB'
    }
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600">Завершен</Badge>
      case 'active':
        return <Badge className="bg-blue-600">Активен</Badge>
      case 'pending':
        return <Badge className="bg-yellow-600">Ожидает</Badge>
      case 'cancelled':
        return <Badge className="bg-red-600">Отменен</Badge>
      default:
        return <Badge variant="outline">Неизвестно</Badge>
    }
  }

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'contract': return 'FileText'
      case 'act': return 'FileCheck'
      case 'invoice': return 'Receipt'
      default: return 'File'
    }
  }

  const updateProfileData = (field: string, value: any) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const updateNotifications = (field: string, value: boolean) => {
    setProfileData(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: value }
    }))
  }

  const handleSaveProfile = () => {
    alert('Профиль сохранен!')
  }

  const loyaltyLevel = 'Золотой'
  const loyaltyProgress = 75
  const totalOrders = orders.length
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Личный кабинет</h1>
              <p className="text-gray-600 mt-2">Управление профилем и заказами</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-yellow-600 text-lg px-3 py-1">
                {loyaltyLevel} клиент
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="User" size={40} className="text-blue-800" />
                </div>
                <CardTitle>{profileData.name}</CardTitle>
                <CardDescription>{profileData.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Статус лояльности</span>
                      <span className="text-sm text-gray-600">{loyaltyProgress}%</span>
                    </div>
                    <Progress value={loyaltyProgress} className="mb-2" />
                    <p className="text-xs text-gray-600">
                      До следующего уровня: {100 - loyaltyProgress}%
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-800">{totalOrders}</div>
                      <div className="text-xs text-gray-600">Заказов</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-800">
                        {(totalSpent / 1000).toFixed(0)}К
                      </div>
                      <div className="text-xs text-gray-600">Потрачено ₽</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Профиль</TabsTrigger>
                <TabsTrigger value="orders">Заказы</TabsTrigger>
                <TabsTrigger value="documents">Документы</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              {/* Профиль */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Личная информация</CardTitle>
                    <CardDescription>
                      Управление основными данными профиля
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="clientType">Тип клиента</Label>
                        <Select value={profileData.clientType} onValueChange={(value) => updateProfileData('clientType', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Физическое лицо</SelectItem>
                            <SelectItem value="legal">Юридическое лицо</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Имя *</Label>
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => updateProfileData('name', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => updateProfileData('phone', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => updateProfileData('email', e.target.value)}
                        />
                      </div>

                      {profileData.clientType === 'legal' && (
                        <>
                          <div>
                            <Label htmlFor="company">Название компании *</Label>
                            <Input
                              id="company"
                              value={profileData.company}
                              onChange={(e) => updateProfileData('company', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="inn">ИНН *</Label>
                            <Input
                              id="inn"
                              value={profileData.inn}
                              onChange={(e) => updateProfileData('inn', e.target.value)}
                            />
                          </div>
                        </>
                      )}

                      <div>
                        <Label htmlFor="address">Адрес</Label>
                        <Textarea
                          id="address"
                          value={profileData.address}
                          onChange={(e) => updateProfileData('address', e.target.value)}
                          rows={3}
                        />
                      </div>

                      <Button onClick={handleSaveProfile} className="bg-blue-800 hover:bg-blue-900">
                        <Icon name="Save" className="mr-2 h-4 w-4" />
                        Сохранить изменения
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Заказы */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>История заказов</CardTitle>
                    <CardDescription>
                      Все ваши заказы и их текущий статус
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{order.equipment}</h4>
                              <p className="text-sm text-gray-600">Заказ #{order.id}</p>
                            </div>
                            {getStatusBadge(order.status)}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Период:</span>
                              <div className="font-medium">
                                {new Date(order.startDate).toLocaleDateString()} - {new Date(order.endDate).toLocaleDateString()}
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-600">Локация:</span>
                              <div className="font-medium">{order.location}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Стоимость:</span>
                              <div className="font-medium text-blue-800">{order.total.toLocaleString()} ₽</div>
                            </div>
                          </div>
                          
                          <div className="flex justify-end mt-4 space-x-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Eye" className="mr-2 h-4 w-4" />
                              Подробнее
                            </Button>
                            {order.status === 'active' && (
                              <Button variant="outline" size="sm">
                                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                                Связаться
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Документы */}
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Документы</CardTitle>
                    <CardDescription>
                      Договоры, акты и счета по вашим заказам
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {documents.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-3">
                            <Icon name={getDocumentIcon(doc.type)} className="h-8 w-8 text-blue-600" />
                            <div>
                              <h4 className="font-medium">{doc.name}</h4>
                              <p className="text-sm text-gray-600">
                                {new Date(doc.date).toLocaleDateString()} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Icon name="Eye" className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Download" className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Настройки */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Уведомления</CardTitle>
                      <CardDescription>
                        Настройте способы получения уведомлений
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email уведомления</h4>
                            <p className="text-sm text-gray-600">Получать уведомления на email</p>
                          </div>
                          <Switch
                            checked={profileData.notifications.email}
                            onCheckedChange={(checked) => updateNotifications('email', checked)}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">SMS уведомления</h4>
                            <p className="text-sm text-gray-600">Получать SMS о статусе заказов</p>
                          </div>
                          <Switch
                            checked={profileData.notifications.sms}
                            onCheckedChange={(checked) => updateNotifications('sms', checked)}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Push уведомления</h4>
                            <p className="text-sm text-gray-600">Уведомления в браузере</p>
                          </div>
                          <Switch
                            checked={profileData.notifications.push}
                            onCheckedChange={(checked) => updateNotifications('push', checked)}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Безопасность</CardTitle>
                      <CardDescription>
                        Управление паролем и безопасностью аккаунта
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Key" className="mr-2 h-4 w-4" />
                          Изменить пароль
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Smartphone" className="mr-2 h-4 w-4" />
                          Двухфакторная аутентификация
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Shield" className="mr-2 h-4 w-4" />
                          История входов
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Опасная зона</CardTitle>
                      <CardDescription>
                        Необратимые действия с аккаунтом
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="destructive" className="w-full">
                        <Icon name="Trash2" className="mr-2 h-4 w-4" />
                        Удалить аккаунт
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile