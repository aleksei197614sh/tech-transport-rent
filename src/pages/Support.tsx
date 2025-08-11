import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Icon from '@/components/ui/icon'

const Support = () => {
  const [ticketData, setTicketData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    priority: '',
    subject: '',
    description: ''
  })

  const supportCategories = [
    { value: 'technical', label: 'Техническая поддержка', icon: 'Wrench' },
    { value: 'booking', label: 'Вопросы по бронированию', icon: 'Calendar' },
    { value: 'billing', label: 'Вопросы по оплате', icon: 'CreditCard' },
    { value: 'equipment', label: 'Проблемы с техникой', icon: 'AlertTriangle' },
    { value: 'other', label: 'Другое', icon: 'MessageCircle' }
  ]

  const faqItems = [
    {
      category: 'Общие вопросы',
      questions: [
        {
          question: 'Как быстро можно получить технику?',
          answer: 'При наличии техники на складе доставка осуществляется в течение 2-4 часов с момента подтверждения заказа. Для планового заказа рекомендуем бронировать технику заранее.'
        },
        {
          question: 'Какие документы нужны для аренды?',
          answer: 'Для юридических лиц: договор аренды, счет на оплату, акт приема-передачи. Для физических лиц: паспорт, водительские права соответствующей категории.'
        },
        {
          question: 'Включена ли доставка в стоимость аренды?',
          answer: 'Доставка в пределах МКАД включена в стоимость при аренде от 8 часов. За МКАД доставка рассчитывается отдельно - 50 рублей за километр.'
        }
      ]
    },
    {
      category: 'Техника и обслуживание',
      questions: [
        {
          question: 'Что делать, если техника сломалась?',
          answer: 'Немедленно свяжитесь с нашей службой поддержки по телефону +7 (495) 911-24-24. Мы организуем ремонт на месте или замену техники в кратчайшие сроки.'
        },
        {
          question: 'Кто отвечает за топливо?',
          answer: 'Техника предоставляется с полным баком. Клиент возмещает стоимость израсходованного топлива по факту или заправляет технику самостоятельно.'
        },
        {
          question: 'Можно ли работать в ночное время?',
          answer: 'Да, наша техника может работать круглосуточно. При работе в ночное время рекомендуем использовать технику с дополнительным освещением.'
        }
      ]
    },
    {
      category: 'Оплата и документы',
      questions: [
        {
          question: 'Какие способы оплаты доступны?',
          answer: 'Мы принимаем оплату банковским переводом, наличными, банковскими картами. Для юридических лиц возможна оплата по счету с отсрочкой платежа.'
        },
        {
          question: 'Когда выставляется счет?',
          answer: 'Счет выставляется после подписания договора аренды. Оплата производится согласно условиям договора - предоплата или по факту выполненных работ.'
        },
        {
          question: 'Можно ли получить скидку?',
          answer: 'Да, мы предоставляем скидки при долгосрочной аренде: от 7 дней - 5%, от 1 месяца - 15%, от 3 месяцев - 25%. Постоянным клиентам дополнительная скидка 10%.'
        }
      ]
    }
  ]

  const contactMethods = [
    {
      title: 'Телефон поддержки',
      description: 'Круглосуточная горячая линия',
      contact: '+7 (495) 123-45-67',
      icon: 'Phone',
      available: '24/7'
    },
    {
      title: 'Экстренная связь',
      description: 'Для аварийных ситуаций',
      contact: '+7 (495) 911-24-24',
      icon: 'AlertTriangle',
      available: '24/7'
    },
    {
      title: 'Email поддержка',
      description: 'Ответ в течение 2 часов',
      contact: 'support@specteh.ru',
      icon: 'Mail',
      available: 'Пн-Вс 8:00-22:00'
    },
    {
      title: 'Онлайн чат',
      description: 'Быстрые ответы на вопросы',
      contact: 'Чат на сайте',
      icon: 'MessageCircle',
      available: 'Пн-Пт 9:00-18:00'
    }
  ]

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Ticket submitted:', ticketData)
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
    setTicketData({
      name: '',
      email: '',
      phone: '',
      category: '',
      priority: '',
      subject: '',
      description: ''
    })
  }

  const updateTicketData = (field: string, value: string) => {
    setTicketData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Служба поддержки</h1>
          <p className="text-gray-600 mt-2">Мы готовы помочь вам 24/7</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Способы связи */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Способы связи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={method.icon} size={32} className="text-blue-800" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-blue-800">{method.contact}</div>
                    <Badge variant="outline" className="text-xs">
                      {method.available}
                    </Badge>
                  </div>
                  <Button className="w-full mt-4 bg-blue-800 hover:bg-blue-900">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Основной контент */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="ticket">Создать заявку</TabsTrigger>
                <TabsTrigger value="guides">Руководства</TabsTrigger>
              </TabsList>

              {/* FAQ */}
              <TabsContent value="faq">
                <Card>
                  <CardHeader>
                    <CardTitle>Часто задаваемые вопросы</CardTitle>
                    <CardDescription>
                      Ответы на самые популярные вопросы наших клиентов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {faqItems.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-blue-800">
                          {category.category}
                        </h3>
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((item, itemIndex) => (
                            <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                              <AccordionTrigger className="text-left">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent>
                                <p className="text-gray-600">{item.answer}</p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Создание заявки */}
              <TabsContent value="ticket">
                <Card>
                  <CardHeader>
                    <CardTitle>Создать заявку в службу поддержки</CardTitle>
                    <CardDescription>
                      Опишите вашу проблему, и мы поможем её решить
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitTicket} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Имя *</Label>
                          <Input
                            id="name"
                            value={ticketData.name}
                            onChange={(e) => updateTicketData('name', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={ticketData.phone}
                            onChange={(e) => updateTicketData('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={ticketData.email}
                          onChange={(e) => updateTicketData('email', e.target.value)}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Категория *</Label>
                          <Select value={ticketData.category} onValueChange={(value) => updateTicketData('category', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите категорию" />
                            </SelectTrigger>
                            <SelectContent>
                              {supportCategories.map(category => (
                                <SelectItem key={category.value} value={category.value}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="priority">Приоритет *</Label>
                          <Select value={ticketData.priority} onValueChange={(value) => updateTicketData('priority', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите приоритет" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Низкий</SelectItem>
                              <SelectItem value="medium">Средний</SelectItem>
                              <SelectItem value="high">Высокий</SelectItem>
                              <SelectItem value="urgent">Срочный</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Тема *</Label>
                        <Input
                          id="subject"
                          value={ticketData.subject}
                          onChange={(e) => updateTicketData('subject', e.target.value)}
                          placeholder="Кратко опишите проблему"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Описание проблемы *</Label>
                        <Textarea
                          id="description"
                          rows={6}
                          value={ticketData.description}
                          onChange={(e) => updateTicketData('description', e.target.value)}
                          placeholder="Подробно опишите проблему, укажите номер договора, модель техники и другие важные детали..."
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                        <Icon name="Send" className="mr-2 h-4 w-4" />
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Руководства */}
              <TabsContent value="guides">
                <Card>
                  <CardHeader>
                    <CardTitle>Руководства и инструкции</CardTitle>
                    <CardDescription>
                      Полезные материалы для работы с нашей техникой
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon name="FileText" className="h-6 w-6 text-blue-600" />
                            <div>
                              <h4 className="font-medium">Руководство по эксплуатации экскаваторов</h4>
                              <p className="text-sm text-gray-600">Основные правила работы и техника безопасности</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon name="FileText" className="h-6 w-6 text-blue-600" />
                            <div>
                              <h4 className="font-medium">Инструкция по приемке техники</h4>
                              <p className="text-sm text-gray-600">Что проверить при получении техники</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon name="Video" className="h-6 w-6 text-blue-600" />
                            <div>
                              <h4 className="font-medium">Видеоинструкции по технике безопасности</h4>
                              <p className="text-sm text-gray-600">Обучающие видео для операторов</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Play" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Icon name="FileText" className="h-6 w-6 text-blue-600" />
                            <div>
                              <h4 className="font-medium">Чек-лист ежедневного осмотра</h4>
                              <p className="text-sm text-gray-600">Контрольные точки для проверки техники</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Статус системы */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Статус системы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Сайт</span>
                      <Badge className="bg-green-600">Работает</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Система бронирования</span>
                      <Badge className="bg-green-600">Работает</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Служба поддержки</span>
                      <Badge className="bg-green-600">Доступна</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">GPS мониторинг</span>
                      <Badge className="bg-yellow-600">Обслуживание</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Полезные ссылки */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Полезные ссылки</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon name="FileText" className="mr-2 h-4 w-4" />
                      Договор аренды
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                      Способы оплаты
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon name="Shield" className="mr-2 h-4 w-4" />
                      Страхование
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Icon name="MapPin" className="mr-2 h-4 w-4" />
                      Зоны доставки
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Экстренные контакты */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800">Экстренные контакты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" className="h-4 w-4 text-red-600" />
                      <div>
                        <div className="font-semibold text-red-800">+7 (495) 911-24-24</div>
                        <div className="text-xs text-red-600">Аварийная служба 24/7</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MessageCircle" className="h-4 w-4 text-red-600" />
                      <div>
                        <div className="font-semibold text-red-800">Telegram: @specteh_sos</div>
                        <div className="text-xs text-red-600">Быстрая связь</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support