import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const contacts = [
    {
      title: 'Главный офис',
      address: 'г. Москва, ул. Промышленная, 25',
      phone: '+7 (495) 123-45-67',
      email: 'info@specteh.ru',
      hours: 'Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00',
      icon: 'Building'
    },
    {
      title: 'Склад техники',
      address: 'г. Москва, Промышленная зона, 15',
      phone: '+7 (495) 123-45-68',
      email: 'warehouse@specteh.ru',
      hours: 'Круглосуточно',
      icon: 'Warehouse'
    },
    {
      title: 'Сервисный центр',
      address: 'г. Москва, ул. Ремонтная, 8',
      phone: '+7 (495) 123-45-69',
      email: 'service@specteh.ru',
      hours: 'Пн-Пт: 8:00-18:00',
      icon: 'Wrench'
    }
  ]

  const departments = [
    { value: 'sales', label: 'Отдел продаж' },
    { value: 'support', label: 'Техническая поддержка' },
    { value: 'service', label: 'Сервисный центр' },
    { value: 'accounting', label: 'Бухгалтерия' },
    { value: 'management', label: 'Руководство' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Контакты</h1>
          <p className="text-gray-600 mt-2">Свяжитесь с нами удобным способом</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Основные контакты */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={contact.icon} size={32} className="text-blue-800" />
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{contact.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-gray-400" />
                    <a href={`tel:${contact.phone}`} className="text-blue-800 hover:underline">
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-gray-400" />
                    <a href={`mailto:${contact.email}`} className="text-blue-800 hover:underline">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">{contact.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма обратной связи */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Обратная связь</CardTitle>
                <CardDescription>
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Отдел</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите отдел" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map(dept => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Опишите ваш вопрос или запрос..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Дополнительная информация */}
          <section>
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Информация</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="social">Соцсети</TabsTrigger>
              </TabsList>

              <TabsContent value="info">
                <Card>
                  <CardHeader>
                    <CardTitle>Дополнительная информация</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Экстренная связь</h4>
                      <p className="text-gray-600 mb-2">
                        Для срочных вопросов и аварийных ситуаций:
                      </p>
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" className="h-4 w-4 text-red-500" />
                        <span className="font-semibold text-red-600">+7 (495) 911-24-24</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Реквизиты компании</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>ООО "СпецТехАренда"</p>
                        <p>ИНН: 7701234567</p>
                        <p>КПП: 770101001</p>
                        <p>ОГРН: 1027700123456</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Банковские реквизиты</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Р/с: 40702810123456789012</p>
                        <p>Банк: ПАО "Сбербанк"</p>
                        <p>БИК: 044525225</p>
                        <p>К/с: 30101810400000000225</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq">
                <Card>
                  <CardHeader>
                    <CardTitle>Часто задаваемые вопросы</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Как быстро можно получить технику?</h4>
                      <p className="text-gray-600 text-sm">
                        При наличии техники на складе - в течение 2-4 часов с момента подтверждения заказа.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Включена ли доставка в стоимость?</h4>
                      <p className="text-gray-600 text-sm">
                        Доставка в пределах МКАД включена при аренде от 8 часов.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Какие документы нужны для аренды?</h4>
                      <p className="text-gray-600 text-sm">
                        Для юридических лиц - договор, для физических - паспорт и водительские права.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social">
                <Card>
                  <CardHeader>
                    <CardTitle>Мы в социальных сетях</CardTitle>
                    <CardDescription>
                      Следите за новостями и акциями
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="justify-start">
                        <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                        Telegram
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Mail" className="mr-2 h-4 w-4" />
                        VKontakte
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Camera" className="mr-2 h-4 w-4" />
                        Instagram
                      </Button>
                    </div>
                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-600 mb-4">
                        Подпишитесь на наши каналы и получайте:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Специальные предложения</li>
                        <li>• Новости компании</li>
                        <li>• Полезные советы</li>
                        <li>• Фото с объектов</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contacts