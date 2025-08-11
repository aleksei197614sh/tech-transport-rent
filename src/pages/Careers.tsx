import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Icon from '@/components/ui/icon'

const Careers = () => {
  const [applicationData, setApplicationData] = useState({
    position: '',
    name: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    coverLetter: '',
    salary: ''
  })

  const [selectedJob, setSelectedJob] = useState<any>(null)

  const openPositions = [
    {
      id: 1,
      title: 'Машинист экскаватора',
      department: 'Производство',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '3+ года',
      salary: '80,000 - 120,000 ₽',
      description: 'Требуется опытный машинист экскаватора для работы на строительных объектах',
      requirements: [
        'Удостоверение машиниста экскаватора',
        'Опыт работы от 3 лет',
        'Знание техники безопасности',
        'Ответственность и пунктуальность',
        'Готовность к командировкам'
      ],
      responsibilities: [
        'Управление экскаватором на объектах',
        'Выполнение земляных работ',
        'Соблюдение техники безопасности',
        'Ведение рабочей документации',
        'Контроль технического состояния'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Социальный пакет',
        'Обучение и повышение квалификации',
        'Премии за качественную работу'
      ],
      urgent: true,
      posted: '2024-01-25'
    },
    {
      id: 2,
      title: 'Менеджер по продажам',
      department: 'Продажи',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '2+ года',
      salary: '60,000 - 100,000 ₽',
      description: 'Ищем активного менеджера для развития клиентской базы',
      requirements: [
        'Опыт продаж от 2 лет',
        'Знание рынка спецтехники',
        'Навыки переговоров',
        'Уверенный пользователь ПК',
        'Коммуникабельность'
      ],
      responsibilities: [
        'Поиск и привлечение новых клиентов',
        'Ведение переговоров и заключение договоров',
        'Консультирование клиентов',
        'Подготовка коммерческих предложений',
        'Участие в выставках и мероприятиях'
      ],
      benefits: [
        'Высокий доход (оклад + %)',
        'Корпоративный автомобиль',
        'Медицинская страховка',
        'Карьерный рост'
      ],
      urgent: false,
      posted: '2024-01-20'
    },
    {
      id: 3,
      title: 'Слесарь по ремонту',
      department: 'Сервис',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '5+ лет',
      salary: '70,000 - 90,000 ₽',
      description: 'Требуется квалифицированный слесарь для ремонта спецтехники',
      requirements: [
        'Профильное образование',
        'Опыт ремонта спецтехники от 5 лет',
        'Знание гидравлических систем',
        'Умение читать чертежи',
        'Наличие инструмента'
      ],
      responsibilities: [
        'Диагностика и ремонт техники',
        'Замена узлов и агрегатов',
        'Ведение технической документации',
        'Контроль качества ремонта',
        'Консультирование операторов'
      ],
      benefits: [
        'Стабильная заработная плата',
        'Доплата за сложность',
        'Обучение новым технологиям',
        'Современное оборудование'
      ],
      urgent: false,
      posted: '2024-01-18'
    },
    {
      id: 4,
      title: 'Диспетчер',
      department: 'Логистика',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '1+ год',
      salary: '45,000 - 65,000 ₽',
      description: 'Требуется диспетчер для координации работы техники',
      requirements: [
        'Опыт диспетчерской работы',
        'Знание географии Москвы и МО',
        'Стрессоустойчивость',
        'Внимательность',
        'Грамотная речь'
      ],
      responsibilities: [
        'Координация движения техники',
        'Ведение диспетчерской документации',
        'Связь с водителями и клиентами',
        'Контроль выполнения заказов',
        'Оперативное решение проблем'
      ],
      benefits: [
        'Комфортный офис',
        'Гибкий график',
        'Дружный коллектив',
        'Возможность роста'
      ],
      urgent: true,
      posted: '2024-01-22'
    }
  ]

  const companyBenefits = [
    {
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда с возможностью роста',
      icon: 'DollarSign'
    },
    {
      title: 'Социальный пакет',
      description: 'Медицинская страховка, отпуск, больничные',
      icon: 'Heart'
    },
    {
      title: 'Обучение и развитие',
      description: 'Корпоративные программы повышения квалификации',
      icon: 'GraduationCap'
    },
    {
      title: 'Карьерный рост',
      description: 'Возможности профессионального и карьерного развития',
      icon: 'TrendingUp'
    },
    {
      title: 'Современное оборудование',
      description: 'Работа с новейшей техникой и технологиями',
      icon: 'Truck'
    },
    {
      title: 'Дружный коллектив',
      description: 'Команда профессионалов и корпоративные мероприятия',
      icon: 'Users'
    }
  ]

  const departments = [
    { name: 'Производство', positions: 45, description: 'Операторы техники, водители' },
    { name: 'Продажи', positions: 12, description: 'Менеджеры, консультанты' },
    { name: 'Сервис', positions: 18, description: 'Механики, слесари, диагносты' },
    { name: 'Логистика', positions: 8, description: 'Диспетчеры, логисты' },
    { name: 'Администрация', positions: 15, description: 'Управление, бухгалтерия, HR' }
  ]

  const updateApplicationData = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Ваша заявка отправлена! Мы рассмотрим её и свяжемся с вами.')
  }

  const getJobTypeBadge = (type: string) => {
    switch (type) {
      case 'Полная занятость':
        return <Badge className="bg-green-600">Полная занятость</Badge>
      case 'Частичная занятость':
        return <Badge className="bg-blue-600">Частичная занятость</Badge>
      case 'Стажировка':
        return <Badge className="bg-yellow-600">Стажировка</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Карьера</h1>
          <p className="text-gray-600 mt-2">Присоединяйтесь к команде профессионалов</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="jobs">Вакансии</TabsTrigger>
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
            <TabsTrigger value="departments">Отделы</TabsTrigger>
            <TabsTrigger value="apply">Отклик</TabsTrigger>
          </TabsList>

          {/* Открытые вакансии */}
          <TabsContent value="jobs">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Открытые вакансии</h2>
                <p className="text-gray-600">Найдите работу своей мечты в нашей компании</p>
              </div>

              <div className="space-y-6">
                {openPositions.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            {job.urgent && (
                              <Badge className="bg-red-600">Срочно</Badge>
                            )}
                          </div>
                          <CardDescription>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="flex items-center">
                                <Icon name="Building" className="h-4 w-4 mr-1" />
                                {job.department}
                              </span>
                              <span className="flex items-center">
                                <Icon name="MapPin" className="h-4 w-4 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Icon name="Calendar" className="h-4 w-4 mr-1" />
                                {new Date(job.posted).toLocaleDateString()}
                              </span>
                            </div>
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          {getJobTypeBadge(job.type)}
                          <div className="text-lg font-bold text-blue-800 mt-2">{job.salary}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-600">Опыт работы:</span>
                          <div className="font-medium">{job.experience}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Тип занятости:</span>
                          <div className="font-medium">{job.type}</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Опубликовано: {new Date(job.posted).toLocaleDateString()}
                        </div>
                        <div className="space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedJob(job)}
                              >
                                <Icon name="Eye" className="mr-2 h-4 w-4" />
                                Подробнее
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-xl">{selectedJob?.title}</DialogTitle>
                                <DialogDescription>
                                  <div className="flex items-center space-x-4 text-sm">
                                    <span>{selectedJob?.department}</span>
                                    <span>{selectedJob?.location}</span>
                                    <span>{selectedJob?.salary}</span>
                                  </div>
                                </DialogDescription>
                              </DialogHeader>
                              
                              {selectedJob && (
                                <div className="space-y-6">
                                  <div>
                                    <h4 className="font-semibold mb-3">Описание вакансии</h4>
                                    <p className="text-gray-600">{selectedJob.description}</p>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-semibold mb-3">Требования</h4>
                                      <ul className="space-y-2">
                                        {selectedJob.requirements.map((req: string, index: number) => (
                                          <li key={index} className="flex items-start">
                                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                            <span className="text-sm">{req}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold mb-3">Обязанности</h4>
                                      <ul className="space-y-2">
                                        {selectedJob.responsibilities.map((resp: string, index: number) => (
                                          <li key={index} className="flex items-start">
                                            <Icon name="ArrowRight" className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                            <span className="text-sm">{resp}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-semibold mb-3">Что мы предлагаем</h4>
                                    <ul className="space-y-2">
                                      {selectedJob.benefits.map((benefit: string, index: number) => (
                                        <li key={index} className="flex items-center">
                                          <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-2" />
                                          <span className="text-sm">{benefit}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div className="flex justify-center pt-4 border-t">
                                    <Button className="bg-blue-800 hover:bg-blue-900">
                                      <Icon name="Send" className="mr-2 h-4 w-4" />
                                      Откликнуться на вакансию
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Button size="sm" className="bg-blue-800 hover:bg-blue-900">
                            <Icon name="Send" className="mr-2 h-4 w-4" />
                            Откликнуться
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Преимущества работы */}
          <TabsContent value="benefits">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Почему стоит работать с нами</h2>
                <p className="text-gray-600">Мы создаем лучшие условия для наших сотрудников</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyBenefits.map((benefit, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Icon name={benefit.icon} size={32} className="text-blue-800" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
                <CardContent className="pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                      <Icon name="Users" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">150+</h3>
                      <p className="text-blue-100">Сотрудников</p>
                    </div>
                    <div>
                      <Icon name="Calendar" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">15</h3>
                      <p className="text-blue-100">Лет на рынке</p>
                    </div>
                    <div>
                      <Icon name="TrendingUp" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">25%</h3>
                      <p className="text-blue-100">Рост команды в год</p>
                    </div>
                    <div>
                      <Icon name="Star" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">4.8</h3>
                      <p className="text-blue-100">Рейтинг работодателя</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Отделы компании */}
          <TabsContent value="departments">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Структура компании</h2>
                <p className="text-gray-600">Узнайте больше о наших отделах и возможностях</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl">{dept.name}</CardTitle>
                      <CardDescription>{dept.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-blue-800 mb-2">{dept.positions}</div>
                      <div className="text-gray-600 mb-4">Сотрудников</div>
                      <Button variant="outline" className="w-full">
                        <Icon name="Users" className="mr-2 h-4 w-4" />
                        Вакансии отдела
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Корпоративная культура</CardTitle>
                  <CardDescription>
                    Наши ценности и принципы работы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Наши ценности:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Heart" className="h-4 w-4 text-red-500 mr-2" />
                          <span className="text-sm">Забота о сотрудниках</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Award" className="h-4 w-4 text-yellow-500 mr-2" />
                          <span className="text-sm">Стремление к качеству</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Users" className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-sm">Командная работа</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="TrendingUp" className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">Постоянное развитие</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Корпоративные мероприятия:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Calendar" className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-sm">Ежегодный корпоратив</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Trophy" className="h-4 w-4 text-yellow-500 mr-2" />
                          <span className="text-sm">Конкурсы профмастерства</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Coffee" className="h-4 w-4 text-brown-500 mr-2" />
                          <span className="text-sm">Тимбилдинги</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Gift" className="h-4 w-4 text-purple-500 mr-2" />
                          <span className="text-sm">Поздравления с праздниками</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Форма отклика */}
          <TabsContent value="apply">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Отправить резюме</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы рассмотрим вашу кандидатуру
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitApplication} className="space-y-6">
                    <div>
                      <Label htmlFor="position">Интересующая вакансия *</Label>
                      <Select value={applicationData.position} onValueChange={(value) => updateApplicationData('position', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите вакансию" />
                        </SelectTrigger>
                        <SelectContent>
                          {openPositions.map(job => (
                            <SelectItem key={job.id} value={job.id.toString()}>
                              {job.title} - {job.department}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Инициативное предложение</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          value={applicationData.name}
                          onChange={(e) => updateApplicationData('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={applicationData.phone}
                          onChange={(e) => updateApplicationData('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationData.email}
                        onChange={(e) => updateApplicationData('email', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Опыт работы</Label>
                      <Textarea
                        id="experience"
                        rows={3}
                        value={applicationData.experience}
                        onChange={(e) => updateApplicationData('experience', e.target.value)}
                        placeholder="Опишите ваш опыт работы..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="education">Образование</Label>
                      <Input
                        id="education"
                        value={applicationData.education}
                        onChange={(e) => updateApplicationData('education', e.target.value)}
                        placeholder="Укажите ваше образование"
                      />
                    </div>

                    <div>
                      <Label htmlFor="salary">Желаемая зарплата</Label>
                      <Input
                        id="salary"
                        value={applicationData.salary}
                        onChange={(e) => updateApplicationData('salary', e.target.value)}
                        placeholder="Укажите желаемую зарплату"
                      />
                    </div>

                    <div>
                      <Label htmlFor="coverLetter">Сопроводительное письмо</Label>
                      <Textarea
                        id="coverLetter"
                        rows={5}
                        value={applicationData.coverLetter}
                        onChange={(e) => updateApplicationData('coverLetter', e.target.value)}
                        placeholder="Расскажите о себе и почему хотите работать в нашей компании..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Информация для кандидатов */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Процесс отбора</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-800">1</span>
                        </div>
                        <div>
                          <div className="font-medium">Подача резюме</div>
                          <div className="text-sm text-gray-600">Заполнение анкеты на сайте</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-800">2</span>
                        </div>
                        <div>
                          <div className="font-medium">Телефонное интервью</div>
                          <div className="text-sm text-gray-600">Первичное собеседование по телефону</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-800">3</span>
                        </div>
                        <div>
                          <div className="font-medium">Очное собеседование</div>
                          <div className="text-sm text-gray-600">Встреча с руководителем отдела</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={16} className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">Принятие решения</div>
                          <div className="text-sm text-gray-600">Оформление трудового договора</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Контакты HR-отдела</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="User" className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">HR-менеджер: Елена Козлова</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">+7 (495) 123-45-67 доб. 102</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">hr@specteh.ru</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Пн-Пт: 9:00-18:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Полезные советы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Icon name="Lightbulb" className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                        <span>Подготовьте актуальное резюме</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Lightbulb" className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                        <span>Изучите информацию о компании</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Lightbulb" className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                        <span>Подготовьте вопросы о работе</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Lightbulb" className="h-4 w-4 text-yellow-500 mr-2 mt-0.5" />
                        <span>Будьте готовы к практическим заданиям</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Careers