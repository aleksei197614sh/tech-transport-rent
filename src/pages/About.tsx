import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Icon from '@/components/ui/icon'

const About = () => {
  const stats = [
    { number: '200+', label: 'Единиц техники', icon: 'Truck' },
    { number: '15', label: 'Лет опыта', icon: 'Calendar' },
    { number: '1500+', label: 'Довольных клиентов', icon: 'Users' },
    { number: '24/7', label: 'Техническая поддержка', icon: 'Clock' }
  ]

  const team = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      experience: '20 лет в строительной отрасли',
      image: '/placeholder.svg',
      description: 'Основатель компании, эксперт в области строительной техники'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Технический директор',
      experience: '15 лет опыта обслуживания техники',
      image: '/placeholder.svg',
      description: 'Отвечает за техническое состояние всего парка техники'
    },
    {
      name: 'Елена Козлова',
      position: 'Менеджер по работе с клиентами',
      experience: '8 лет в сфере аренды',
      image: '/placeholder.svg',
      description: 'Помогает клиентам выбрать оптимальное решение'
    }
  ]

  const values = [
    {
      title: 'Надежность',
      description: 'Вся наша техника проходит регулярное техническое обслуживание',
      icon: 'Shield'
    },
    {
      title: 'Качество',
      description: 'Работаем только с проверенными брендами и поставщиками',
      icon: 'Award'
    },
    {
      title: 'Профессионализм',
      description: 'Наша команда - это опытные специалисты своего дела',
      icon: 'Star'
    },
    {
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому клиенту и проекту',
      icon: 'Heart'
    }
  ]

  const achievements = [
    { year: '2009', event: 'Основание компании' },
    { year: '2012', event: 'Расширение парка до 50 единиц техники' },
    { year: '2015', event: 'Получение ISO 9001' },
    { year: '2018', event: 'Открытие второго филиала' },
    { year: '2021', event: 'Парк техники превысил 200 единиц' },
    { year: '2024', event: 'Запуск онлайн-платформы бронирования' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">О компании</h1>
          <p className="text-gray-600 mt-2">Узнайте больше о нашей истории и команде</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Основная информация */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">СпецТехАренда</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы являемся ведущей компанией в сфере аренды строительной и специальной техники. 
                За 15 лет работы мы помогли реализовать тысячи проектов различной сложности.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наша миссия - предоставлять качественную технику и профессиональные услуги, 
                которые помогают нашим клиентам достигать поставленных целей в срок и в рамках бюджета.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-blue-800 hover:bg-blue-900">
                  Наши услуги
                </Button>
                <Button variant="outline">
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="bg-blue-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Техника в идеальном состоянии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Опытные операторы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Доставка по городу</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Гарантия качества работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Конкурентные цены</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Статистика */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={stat.icon} size={24} className="text-blue-800" />
                  </div>
                  <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наши ценности */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={value.icon} size={32} className="text-blue-800" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Команда */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-800 font-medium">
                    {member.position}
                  </CardDescription>
                  <Badge variant="outline" className="mx-auto">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* История компании */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">История развития</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-800 font-bold">{achievement.year}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium text-gray-900">{achievement.event}</p>
                    </div>
                    {index < achievements.length - 1 && (
                      <div className="absolute left-8 mt-16 w-0.5 h-6 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default About