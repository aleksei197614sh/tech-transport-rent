import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from '@/components/ui/icon'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Строительство жилого комплекса "Северный"',
      category: 'Жилое строительство',
      location: 'г. Москва, САО',
      duration: '18 месяцев',
      equipment: ['Экскаваторы JCB', 'Самосвалы КАМАЗ', 'Автокраны'],
      description: 'Комплексное обеспечение техникой строительства 3-х жилых домов',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      status: 'completed',
      year: '2023',
      client: 'ООО "СтройИнвест"',
      value: '15 млн ₽'
    },
    {
      id: 2,
      title: 'Реконструкция дорожной развязки',
      category: 'Дорожное строительство',
      location: 'г. Москва, МКАД',
      duration: '8 месяцев',
      equipment: ['Бульдозеры CAT', 'Грейдеры', 'Катки дорожные'],
      description: 'Модернизация транспортной инфраструктуры',
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      status: 'in-progress',
      year: '2024',
      client: 'Мосавтодор',
      value: '25 млн ₽'
    },
    {
      id: 3,
      title: 'Строительство торгового центра',
      category: 'Коммерческое строительство',
      location: 'г. Москва, ЗАО',
      duration: '12 месяцев',
      equipment: ['Башенные краны', 'Бетононасосы', 'Погрузчики'],
      description: 'Возведение современного торгово-развлекательного комплекса',
      image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
      status: 'completed',
      year: '2023',
      client: 'ГК "Ритейл Девелопмент"',
      value: '32 млн ₽'
    },
    {
      id: 4,
      title: 'Прокладка газопровода',
      category: 'Инфраструктура',
      location: 'Московская область',
      duration: '6 месяцев',
      equipment: ['Экскаваторы-трубоукладчики', 'Сварочные агрегаты'],
      description: 'Строительство магистрального газопровода',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      status: 'planning',
      year: '2024',
      client: 'Газпром Межрегионгаз',
      value: '18 млн ₽'
    }
  ]

  const testimonials = [
    {
      id: 1,
      client: 'Алексей Петров',
      company: 'ООО "СтройИнвест"',
      project: 'ЖК "Северный"',
      rating: 5,
      text: 'Отличная компания! Техника всегда в идеальном состоянии, операторы профессиональные. Сроки соблюдаются неукоснительно.',
      date: '2023-12-15'
    },
    {
      id: 2,
      client: 'Мария Сидорова',
      company: 'Мосавтодор',
      project: 'Реконструкция МКАД',
      rating: 5,
      text: 'Работаем с СпецТехАрендой уже 3 года. Надежный партнер, всегда идут навстречу в сложных ситуациях.',
      date: '2024-01-20'
    },
    {
      id: 3,
      client: 'Дмитрий Козлов',
      company: 'ГК "Ритейл Девелопмент"',
      project: 'ТРК "Галерея"',
      rating: 4,
      text: 'Качественная техника, разумные цены. Особенно понравилась оперативность решения вопросов.',
      date: '2023-11-08'
    }
  ]

  const stats = [
    { label: 'Завершенных проектов', value: '150+', icon: 'CheckCircle' },
    { label: 'Довольных клиентов', value: '85+', icon: 'Users' },
    { label: 'Часов работы техники', value: '50000+', icon: 'Clock' },
    { label: 'Лет опыта', value: '15', icon: 'Award' }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-600">Завершен</Badge>
      case 'in-progress':
        return <Badge className="bg-blue-600">В работе</Badge>
      case 'planning':
        return <Badge className="bg-yellow-600">Планируется</Badge>
      default:
        return <Badge variant="outline">Неизвестно</Badge>
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Наши проекты</h1>
          <p className="text-gray-600 mt-2">Успешно реализованные проекты с нашей техникой</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Статистика */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={stat.icon} size={24} className="text-blue-800" />
                  </div>
                  <div className="text-3xl font-bold text-blue-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Проекты */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Реализованные проекты</h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">Все проекты</TabsTrigger>
              <TabsTrigger value="residential">Жилые</TabsTrigger>
              <TabsTrigger value="commercial">Коммерческие</TabsTrigger>
              <TabsTrigger value="infrastructure">Инфраструктура</TabsTrigger>
              <TabsTrigger value="roads">Дороги</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        {getStatusBadge(project.status)}
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 rounded px-2 py-1">
                        <span className="text-sm font-medium">{project.year}</span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <Icon name="MapPin" className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Clock" className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Icon name="Building" className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{project.client}</span>
                          </div>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Использованная техника:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.equipment.map((eq, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {eq}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-gray-600">Стоимость проекта:</span>
                          <div className="text-lg font-bold text-blue-800">{project.value}</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" className="mr-2 h-4 w-4" />
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Другие вкладки с фильтрацией */}
            <TabsContent value="residential">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.filter(p => p.category === 'Жилое строительство').map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Аналогичная структура карточки */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Отзывы клиентов */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.client}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Проект: {testimonial.project}</span>
                    <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-blue-800 hover:bg-blue-900">
              <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
              Оставить отзыв
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects