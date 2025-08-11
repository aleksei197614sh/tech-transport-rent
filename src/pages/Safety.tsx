import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from '@/components/ui/icon'

const Safety = () => {
  const safetyRules = [
    {
      category: 'Общие требования',
      rules: [
        'Обязательное использование СИЗ (каска, спецодежда, обувь)',
        'Проверка технического состояния перед началом работы',
        'Соблюдение режима труда и отдыха',
        'Запрет работы в состоянии алкогольного опьянения',
        'Обязательный инструктаж по технике безопасности'
      ]
    },
    {
      category: 'Работа с экскаваторами',
      rules: [
        'Проверка устойчивости грунта перед началом работ',
        'Соблюдение безопасного расстояния от коммуникаций',
        'Использование сигнальщика при работе в стесненных условиях',
        'Запрет нахождения людей в зоне действия стрелы',
        'Контроль состояния гидравлической системы'
      ]
    },
    {
      category: 'Работа с кранами',
      rules: [
        'Проверка грузоподъемности согласно таблице нагрузок',
        'Использование только сертифицированных строп',
        'Установка крана на твердое основание с выносными опорами',
        'Запрет подъема грузов над людьми',
        'Контроль погодных условий (ветер, осадки)'
      ]
    },
    {
      category: 'Работа с самосвалами',
      rules: [
        'Проверка тормозной системы перед выездом',
        'Соблюдение правил дорожного движения',
        'Правильное распределение груза в кузове',
        'Использование сигнальных устройств при движении задним ходом',
        'Контроль состояния гидравлики подъема кузова'
      ]
    }
  ]

  const emergencyProcedures = [
    {
      situation: 'Поломка техники',
      steps: [
        'Немедленно остановить работу и заглушить двигатель',
        'Установить технику в безопасное положение',
        'Оградить место поломки сигнальными знаками',
        'Сообщить диспетчеру о происшествии',
        'Дождаться прибытия сервисной службы'
      ],
      contacts: '+7 (495) 911-24-24',
      icon: 'AlertTriangle'
    },
    {
      situation: 'Несчастный случай',
      steps: [
        'Вызвать скорую помощь (103) и спасательную службу (112)',
        'Оказать первую медицинскую помощь пострадавшему',
        'Обеспечить безопасность места происшествия',
        'Сохранить обстановку до прибытия комиссии',
        'Уведомить руководство и страховую компанию'
      ],
      contacts: '112, 103',
      icon: 'Heart'
    },
    {
      situation: 'Пожар',
      steps: [
        'Вызвать пожарную службу (101)',
        'Эвакуировать людей из опасной зоны',
        'Отключить электропитание и топливоподачу',
        'Приступить к тушению имеющимися средствами',
        'Обеспечить доступ пожарных расчетов'
      ],
      contacts: '101',
      icon: 'Flame'
    }
  ]

  const safetyStats = [
    { metric: 'Дни без происшествий', value: '245', trend: 'up', icon: 'Calendar' },
    { metric: 'Уровень безопасности', value: '98.5%', trend: 'up', icon: 'Shield' },
    { metric: 'Обученных операторов', value: '156', trend: 'up', icon: 'GraduationCap' },
    { metric: 'Проведенных инструктажей', value: '89', trend: 'up', icon: 'FileText' }
  ]

  const certifications = [
    {
      name: 'ISO 45001:2018',
      description: 'Система менеджмента охраны здоровья и безопасности труда',
      validUntil: '2025-06-15',
      status: 'active',
      issuer: 'TÜV NORD'
    },
    {
      name: 'OHSAS 18001',
      description: 'Стандарт системы менеджмента охраны труда',
      validUntil: '2024-12-20',
      status: 'active',
      issuer: 'Bureau Veritas'
    },
    {
      name: 'Лицензия Ростехнадзора',
      description: 'Эксплуатация опасных производственных объектов',
      validUntil: '2025-03-10',
      status: 'active',
      issuer: 'Ростехнадзор'
    }
  ]

  const trainingPrograms = [
    {
      title: 'Базовый курс по охране труда',
      duration: '16 часов',
      frequency: 'Ежегодно',
      participants: 'Все сотрудники',
      description: 'Основы безопасности труда и промышленной безопасности'
    },
    {
      title: 'Обучение операторов спецтехники',
      duration: '40 часов',
      frequency: 'При приеме на работу',
      participants: 'Машинисты',
      description: 'Специализированное обучение безопасной работе на технике'
    },
    {
      title: 'Первая медицинская помощь',
      duration: '8 часов',
      frequency: 'Раз в 3 года',
      participants: 'Все сотрудники',
      description: 'Навыки оказания первой помощи при несчастных случаях'
    },
    {
      title: 'Пожарная безопасность',
      duration: '12 часов',
      frequency: 'Ежегодно',
      participants: 'Ответственные лица',
      description: 'Предотвращение и тушение пожаров, эвакуация'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-600">Действует</Badge>
      case 'expiring':
        return <Badge className="bg-yellow-600">Истекает</Badge>
      case 'expired':
        return <Badge className="bg-red-600">Истек</Badge>
      default:
        return <Badge variant="outline">Неизвестно</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Охрана труда и безопасность</h1>
          <p className="text-gray-600 mt-2">Безопасность - наш главный приоритет</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Статистика безопасности */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Показатели безопасности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={stat.icon} size={24} className="text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Tabs defaultValue="rules" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="rules">Правила безопасности</TabsTrigger>
            <TabsTrigger value="emergency">Экстренные ситуации</TabsTrigger>
            <TabsTrigger value="training">Обучение</TabsTrigger>
            <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
          </TabsList>

          {/* Правила безопасности */}
          <TabsContent value="rules">
            <div className="space-y-8">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertTriangle" className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="text-lg font-bold text-red-800">Внимание!</h3>
                      <p className="text-red-700">
                        Соблюдение правил техники безопасности обязательно для всех сотрудников и клиентов. 
                        Нарушение может привести к серьезным последствиям.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {safetyRules.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start">
                            <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Экстренные ситуации */}
          <TabsContent value="emergency">
            <div className="space-y-8">
              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-8 w-8 text-yellow-600" />
                    <div>
                      <h3 className="text-lg font-bold text-yellow-800">Экстренные службы</h3>
                      <p className="text-yellow-700">
                        При любой экстренной ситуации немедленно звоните: 112 (единая служба экстренного реагирования)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {emergencyProcedures.map((procedure, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Icon name={procedure.icon} size={24} className="text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{procedure.situation}</CardTitle>
                          <CardDescription>
                            Экстренные контакты: {procedure.contacts}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Порядок действий:</h4>
                      <ol className="space-y-2">
                        {procedure.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-800 mr-3">
                              {stepIndex + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Обучение */}
          <TabsContent value="training">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Программы обучения по охране труда</CardTitle>
                  <CardDescription>
                    Регулярное обучение персонала - основа безопасной работы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {trainingPrograms.map((program, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                        <h4 className="font-semibold mb-2">{program.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Длительность:</span>
                            <div className="font-medium">{program.duration}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Периодичность:</span>
                            <div className="font-medium">{program.frequency}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <Badge variant="outline">{program.participants}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Учебные материалы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name="FileText" className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-sm">Инструкции по ТБ</div>
                            <div className="text-xs text-gray-600">PDF, 1.2 MB</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Download" className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name="Video" className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-sm">Видеоинструктажи</div>
                            <div className="text-xs text-gray-600">8 видео, 2.5 часа</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Play" className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon name="BookOpen" className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-sm">Тесты по ТБ</div>
                            <div className="text-xs text-gray-600">25 вопросов</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="ArrowRight" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>График обучения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                        <div className="font-medium">5 февраля, 14:00</div>
                        <div className="text-sm text-gray-600">Инструктаж по работе с кранами</div>
                        <div className="text-sm text-blue-600">Учебный класс</div>
                      </div>
                      <div className="p-3 border-l-4 border-green-500 bg-green-50">
                        <div className="font-medium">12 февраля, 10:00</div>
                        <div className="text-sm text-gray-600">Курс первой медицинской помощи</div>
                        <div className="text-sm text-green-600">Практический зал</div>
                      </div>
                      <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                        <div className="font-medium">20 февраля, 9:00</div>
                        <div className="text-sm text-gray-600">Пожарная безопасность</div>
                        <div className="text-sm text-yellow-600">Полигон</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Сертификаты */}
          <TabsContent value="certificates">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Сертификаты и лицензии</CardTitle>
                  <CardDescription>
                    Документы, подтверждающие соответствие стандартам безопасности
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Icon name="Award" size={24} className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{cert.name}</h4>
                            <p className="text-sm text-gray-600">{cert.description}</p>
                            <p className="text-xs text-gray-500">Выдан: {cert.issuer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(cert.status)}
                          <div className="text-sm text-gray-600 mt-1">
                            До {new Date(cert.validUntil).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Политика безопасности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Наша миссия</h4>
                        <p className="text-blue-700 text-sm">
                          Обеспечение безопасных условий труда для всех сотрудников и клиентов, 
                          предотвращение несчастных случаев и профессиональных заболеваний.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Основные принципы:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Жизнь и здоровье превыше всего</li>
                          <li>• Постоянное совершенствование</li>
                          <li>• Ответственность каждого</li>
                          <li>• Соблюдение законодательства</li>
                          <li>• Открытость и прозрачность</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Контакты службы безопасности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Phone" className="h-5 w-5 text-red-600" />
                          <h4 className="font-semibold text-red-800">Экстренная связь</h4>
                        </div>
                        <div className="text-lg font-bold text-red-800">+7 (495) 911-24-24</div>
                        <div className="text-sm text-red-600">Круглосуточно</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon name="User" className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">Начальник службы ОТ: Петров А.И.</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">+7 (495) 123-45-67 доб. 105</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">safety@specteh.ru</span>
                        </div>
                      </div>
                    </div>
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

export default Safety