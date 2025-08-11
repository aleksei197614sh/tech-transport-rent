import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Icon from '@/components/ui/icon'

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'JCB',
      category: 'Производитель техники',
      logo: '/placeholder.svg',
      description: 'Ведущий мировой производитель строительной техники',
      partnership: 'Официальный дилер',
      since: '2015',
      benefits: [
        'Оригинальные запчасти',
        'Гарантийное обслуживание',
        'Обучение персонала',
        'Техническая поддержка'
      ],
      projects: 45,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Caterpillar',
      category: 'Производитель техники',
      logo: '/placeholder.svg',
      description: 'Американская корпорация, крупнейший производитель спецтехники',
      partnership: 'Авторизованный сервис',
      since: '2012',
      benefits: [
        'Сертифицированный сервис',
        'Оригинальные детали CAT',
        'Программы лояльности',
        'Расширенная гарантия'
      ],
      projects: 38,
      rating: 4.8
    },
    {
      id: 3,
      name: 'КАМАЗ',
      category: 'Производитель техники',
      logo: '/placeholder.svg',
      description: 'Российский производитель грузовых автомобилей',
      partnership: 'Стратегический партнер',
      since: '2010',
      benefits: [
        'Прямые поставки',
        'Специальные цены',
        'Приоритетное обслуживание',
        'Совместные проекты'
      ],
      projects: 52,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Росгосстрах',
      category: 'Страховая компания',
      logo: '/placeholder.svg',
      description: 'Ведущая российская страховая компания',
      partnership: 'Эксклюзивный партнер',
      since: '2018',
      benefits: [
        'Специальные тарифы',
        'Быстрое урегулирование',
        'Комплексное покрытие',
        'Персональный менеджер'
      ],
      projects: 28,
      rating: 4.6
    }
  ]

  const partnerPrograms = [
    {
      title: 'Дилерская программа',
      description: 'Станьте официальным дилером нашей компании в вашем регионе',
      benefits: [
        'Эксклюзивная территория',
        'Маркетинговая поддержка',
        'Обучение персонала',
        'Техническая поддержка',
        'Совместная реклама'
      ],
      requirements: [
        'Опыт в сфере аренды техники',
        'Собственный сервисный центр',
        'Квалифицированный персонал',
        'Финансовая стабильность'
      ],
      icon: 'Handshake'
    },
    {
      title: 'Субподрядная программа',
      description: 'Сотрудничество на основе субподрядных договоров',
      benefits: [
        'Стабильный поток заказов',
        'Гарантированная оплата',
        'Техническая поддержка',
        'Совместное планирование',
        'Развитие бизнеса'
      ],
      requirements: [
        'Наличие собственной техники',
        'Лицензии и сертификаты',
        'Страхование ответственности',
        'Положительная репутация'
      ],
      icon: 'Users'
    },
    {
      title: 'Поставщики услуг',
      description: 'Партнерство с поставщиками дополнительных услуг',
      benefits: [
        'Взаимные рекомендации',
        'Совместные проекты',
        'Обмен клиентской базой',
        'Комплексные предложения',
        'Развитие экосистемы'
      ],
      requirements: [
        'Качественные услуги',
        'Надежность и пунктуальность',
        'Конкурентные цены',
        'Готовность к сотрудничеству'
      ],
      icon: 'Building'
    }
  ]

  const achievements = [
    {
      title: 'Партнер года JCB 2023',
      description: 'Признание за выдающиеся результаты продаж и сервиса',
      year: '2023',
      icon: 'Award'
    },
    {
      title: 'Лучший дилер КАМАЗ',
      description: 'Награда за развитие дилерской сети в ЦФО',
      year: '2022',
      icon: 'Trophy'
    },
    {
      title: 'Сертификат качества ISO 9001',
      description: 'Международный стандарт системы менеджмента качества',
      year: '2021',
      icon: 'Shield'
    },
    {
      title: 'Экологический сертификат',
      description: 'Соответствие экологическим стандартам',
      year: '2023',
      icon: 'Leaf'
    }
  ]

  const partnerBenefits = [
    {
      title: 'Взаимовыгодное сотрудничество',
      description: 'Развиваем бизнес вместе, создавая ценность для клиентов',
      icon: 'TrendingUp'
    },
    {
      title: 'Техническая экспертиза',
      description: 'Делимся знаниями и опытом в области спецтехники',
      icon: 'Wrench'
    },
    {
      title: 'Маркетинговая поддержка',
      description: 'Совместные маркетинговые кампании и продвижение',
      icon: 'Megaphone'
    },
    {
      title: 'Обучение и развитие',
      description: 'Программы обучения для партнеров и их сотрудников',
      icon: 'GraduationCap'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Партнеры</h1>
          <p className="text-gray-600 mt-2">Надежные партнеры для качественного сервиса</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="partners" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="partners">Наши партнеры</TabsTrigger>
            <TabsTrigger value="programs">Программы</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
          </TabsList>

          {/* Наши партнеры */}
          <TabsContent value="partners">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Наши ключевые партнеры</h2>
                <p className="text-gray-600">Мы работаем с ведущими компаниями отрасли</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {partners.map((partner) => (
                  <Card key={partner.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon name="Building" size={32} className="text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{partner.name}</CardTitle>
                          <CardDescription>{partner.category}</CardDescription>
                          <div className="flex items-center mt-2">
                            {renderStars(partner.rating)}
                            <span className="ml-2 text-sm text-gray-600">({partner.rating})</span>
                          </div>
                        </div>
                        <Badge className="bg-blue-600">
                          {partner.partnership}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{partner.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-800">{partner.since}</div>
                          <div className="text-xs text-gray-600">Год начала партнерства</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-blue-800">{partner.projects}</div>
                          <div className="text-xs text-gray-600">Совместных проектов</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <h4 className="font-medium">Преимущества партнерства:</h4>
                        {partner.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full">
                        <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                        Подробнее о партнере
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Партнерские программы */}
          <TabsContent value="programs">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Партнерские программы</h2>
                <p className="text-gray-600">Присоединяйтесь к нашей партнерской сети</p>
              </div>

              <div className="space-y-8">
                {partnerPrograms.map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name={program.icon} size={32} className="text-blue-800" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{program.title}</CardTitle>
                          <CardDescription className="text-lg">{program.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-green-800">Преимущества партнерства:</h4>
                          <ul className="space-y-2">
                            {program.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center">
                                <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4 text-blue-800">Требования к партнерам:</h4>
                          <ul className="space-y-2">
                            {program.requirements.map((requirement, idx) => (
                              <li key={idx} className="flex items-center">
                                <Icon name="CheckCircle" className="h-4 w-4 text-blue-500 mr-2" />
                                <span className="text-sm">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <Button className="bg-blue-800 hover:bg-blue-900">
                          <Icon name="Send" className="mr-2 h-4 w-4" />
                          Подать заявку на партнерство
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Достижения */}
          <TabsContent value="achievements">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Награды и достижения</h2>
                <p className="text-gray-600">Признание нашей работы партнерами и отраслевыми организациями</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Icon name={achievement.icon} size={32} className="text-yellow-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <CardDescription>{achievement.description}</CardDescription>
                          <Badge className="mt-2 bg-yellow-600">{achievement.year}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
                <CardContent className="pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div>
                      <Icon name="Award" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">15+</h3>
                      <p className="text-blue-100">Наград и сертификатов</p>
                    </div>
                    <div>
                      <Icon name="Users" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">50+</h3>
                      <p className="text-blue-100">Активных партнеров</p>
                    </div>
                    <div>
                      <Icon name="Globe" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">12</h3>
                      <p className="text-blue-100">Регионов присутствия</p>
                    </div>
                    <div>
                      <Icon name="TrendingUp" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">25%</h3>
                      <p className="text-blue-100">Рост партнерской сети</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Преимущества */}
          <TabsContent value="benefits">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Преимущества сотрудничества</h2>
                <p className="text-gray-600">Почему компании выбирают нас в качестве партнера</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {partnerBenefits.map((benefit, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon name={benefit.icon} size={24} className="text-blue-800" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{benefit.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Этапы сотрудничества</CardTitle>
                  <CardDescription>
                    Как начать работать с нами
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="font-bold text-blue-800">1</span>
                      </div>
                      <h4 className="font-medium mb-2">Заявка</h4>
                      <p className="text-sm text-gray-600">Подача заявки на партнерство</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="font-bold text-blue-800">2</span>
                      </div>
                      <h4 className="font-medium mb-2">Анализ</h4>
                      <p className="text-sm text-gray-600">Изучение вашей компании</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="font-bold text-blue-800">3</span>
                      </div>
                      <h4 className="font-medium mb-2">Переговоры</h4>
                      <p className="text-sm text-gray-600">Обсуждение условий</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="font-bold text-blue-800">4</span>
                      </div>
                      <h4 className="font-medium mb-2">Договор</h4>
                      <p className="text-sm text-gray-600">Подписание соглашения</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon name="Check" size={20} className="text-green-600" />
                      </div>
                      <h4 className="font-medium mb-2">Старт</h4>
                      <p className="text-sm text-gray-600">Начало сотрудничества</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Готовы стать нашим партнером?</h3>
                    <p className="text-green-100 mb-6">
                      Присоединяйтесь к успешной команде профессионалов
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button className="bg-white text-green-700 hover:bg-gray-100">
                        <Icon name="Phone" className="mr-2 h-4 w-4" />
                        Связаться с нами
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                        <Icon name="Download" className="mr-2 h-4 w-4" />
                        Скачать презентацию
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

export default Partners