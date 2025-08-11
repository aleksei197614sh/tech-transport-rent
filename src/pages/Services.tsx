import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Services = () => {
  const services = [
    {
      title: 'Почасовая аренда',
      description: 'Гибкая аренда от 1 часа с опытным оператором',
      price: 'от 1200 ₽/час',
      icon: 'Clock',
      features: ['Минимум 1 час', 'Опытный оператор', 'Топливо включено', 'Страховка'],
      popular: false
    },
    {
      title: 'Посуточная аренда',
      description: 'Оптимальный вариант для средних проектов',
      price: 'от 8500 ₽/сутки',
      icon: 'Calendar',
      features: ['8-12 часов работы', 'Доставка на объект', 'Техобслуживание', 'Замена при поломке'],
      popular: true
    },
    {
      title: 'Долгосрочная аренда',
      description: 'Выгодные условия для крупных проектов',
      price: 'от 180000 ₽/мес',
      icon: 'TrendingUp',
      features: ['Скидка до 30%', 'Приоритетная поддержка', 'Гибкий график', 'Индивидуальные условия'],
      popular: false
    }
  ]

  const additionalServices = [
    {
      title: 'Доставка техники',
      description: 'Быстрая доставка на объект в пределах города',
      price: 'от 2500 ₽',
      icon: 'Truck'
    },
    {
      title: 'Услуги оператора',
      description: 'Опытные операторы для работы на вашем объекте',
      price: 'от 1800 ₽/смена',
      icon: 'User'
    },
    {
      title: 'Техническое обслуживание',
      description: 'Полное ТО и ремонт спецтехники',
      price: 'от 5000 ₽',
      icon: 'Wrench'
    },
    {
      title: 'Консультации',
      description: 'Помощь в выборе техники для вашего проекта',
      price: 'Бесплатно',
      icon: 'MessageCircle'
    }
  ]

  const workTypes = [
    {
      category: 'Земляные работы',
      services: [
        'Рытье котлованов и траншей',
        'Планировка территории',
        'Засыпка и уплотнение грунта',
        'Демонтаж зданий и сооружений'
      ]
    },
    {
      category: 'Строительные работы',
      services: [
        'Подъем и перемещение грузов',
        'Монтаж конструкций',
        'Бетонные работы',
        'Дорожное строительство'
      ]
    },
    {
      category: 'Коммунальные услуги',
      services: [
        'Уборка снега',
        'Вывоз мусора',
        'Благоустройство территории',
        'Аварийные работы'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Наши услуги</h1>
          <p className="text-gray-600 mt-2">Полный спектр услуг аренды спецтехники</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Основные тарифы */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Тарифные планы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-blue-800" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="text-3xl font-bold text-blue-800 mt-4">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" className="h-5 w-5 text-green-500 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Дополнительные услуги */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Icon name={service.icon} size={24} className="text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-blue-800 mb-3">{service.price}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Виды работ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Виды выполняемых работ</h2>
          <Tabs defaultValue="earth" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="earth">Земляные работы</TabsTrigger>
              <TabsTrigger value="construction">Строительство</TabsTrigger>
              <TabsTrigger value="municipal">Коммунальные</TabsTrigger>
            </TabsList>
            
            {workTypes.map((workType, index) => (
              <TabsContent key={index} value={index === 0 ? 'earth' : index === 1 ? 'construction' : 'municipal'}>
                <Card>
                  <CardHeader>
                    <CardTitle>{workType.category}</CardTitle>
                    <CardDescription>
                      Профессиональное выполнение работ с использованием современной техники
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {workType.services.map((service, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mr-3" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button className="bg-blue-800 hover:bg-blue-900">
                        Получить консультацию
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>
    </div>
  )
}

export default Services