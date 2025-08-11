import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Icon from '@/components/ui/icon'

const Training = () => {
  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    experience: '',
    preferredDate: ''
  })

  const courses = [
    {
      id: 'excavator-basic',
      title: 'Машинист экскаватора',
      category: 'Базовый курс',
      duration: '160 часов',
      price: 35000,
      description: 'Полный курс обучения работе на экскаваторе с получением удостоверения',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      level: 'Начинающий',
      certificate: true,
      practical: 80,
      theoretical: 80,
      features: [
        'Теоретическая подготовка',
        'Практические занятия на технике',
        'Изучение техники безопасности',
        'Получение удостоверения',
        'Помощь в трудоустройстве'
      ],
      schedule: [
        'Понедельник-Пятница: 9:00-17:00',
        'Суббота: 9:00-15:00',
        'Воскресенье: выходной'
      ]
    },
    {
      id: 'crane-operator',
      title: 'Машинист крана',
      category: 'Специализированный курс',
      duration: '200 часов',
      price: 45000,
      description: 'Обучение управлению автокранами различной грузоподъемности',
      image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
      level: 'Продвинутый',
      certificate: true,
      practical: 120,
      theoretical: 80,
      features: [
        'Работа с кранами до 50 тонн',
        'Строповка и такелажные работы',
        'Расчет грузоподъемности',
        'Безопасность высотных работ',
        'Стажировка на реальных объектах'
      ],
      schedule: [
        'Понедельник-Пятница: 8:00-16:00',
        'Суббота: практические занятия',
        'Воскресенье: выходной'
      ]
    },
    {
      id: 'truck-driver',
      title: 'Водитель самосвала',
      category: 'Базовый курс',
      duration: '120 часов',
      price: 28000,
      description: 'Обучение управлению грузовой техникой и самосвалами',
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      level: 'Начинающий',
      certificate: true,
      practical: 60,
      theoretical: 60,
      features: [
        'Управление грузовой техникой',
        'Правила перевозки грузов',
        'Техническое обслуживание',
        'Оформление документов',
        'Практика на дорогах'
      ],
      schedule: [
        'Понедельник-Пятница: 10:00-18:00',
        'Гибкий график',
        'Вечерние группы'
      ]
    },
    {
      id: 'safety-course',
      title: 'Техника безопасности',
      category: 'Обязательный курс',
      duration: '40 часов',
      price: 12000,
      description: 'Курс по технике безопасности при работе со спецтехникой',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      level: 'Все уровни',
      certificate: true,
      practical: 16,
      theoretical: 24,
      features: [
        'Основы промышленной безопасности',
        'Правила работы на стройплощадке',
        'Первая медицинская помощь',
        'Действия в чрезвычайных ситуациях',
        'Обязательная аттестация'
      ],
      schedule: [
        'Интенсивный курс: 5 дней',
        'Вечерние занятия: 2 недели',
        'Онлайн формат доступен'
      ]
    }
  ]

  const instructors = [
    {
      name: 'Александр Петрович Сидоров',
      specialization: 'Экскаваторы и землеройная техника',
      experience: '25 лет',
      students: 450,
      rating: 4.9,
      image: '/placeholder.svg',
      achievements: [
        'Мастер производственного обучения',
        'Эксперт по технике безопасности',
        'Автор методических пособий'
      ]
    },
    {
      name: 'Михаил Иванович Козлов',
      specialization: 'Подъемные краны и такелажные работы',
      experience: '20 лет',
      students: 320,
      rating: 4.8,
      image: '/placeholder.svg',
      achievements: [
        'Сертифицированный инструктор',
        'Специалист по промышленной безопасности',
        'Консультант по охране труда'
      ]
    },
    {
      name: 'Елена Сергеевна Морозова',
      specialization: 'Теоретическая подготовка и безопасность',
      experience: '15 лет',
      students: 280,
      rating: 4.9,
      image: '/placeholder.svg',
      achievements: [
        'Кандидат технических наук',
        'Преподаватель высшей категории',
        'Разработчик учебных программ'
      ]
    }
  ]

  const studentProgress = {
    currentCourse: 'Машинист экскаватора',
    progress: 65,
    completedHours: 104,
    totalHours: 160,
    nextLesson: '2024-02-01',
    grade: 4.2
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const updateEnrollmentData = (field: string, value: string) => {
    setEnrollmentData(prev => ({ ...prev, [field]: value }))
  }

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Заявка на обучение отправлена! Мы свяжемся с вами для уточнения деталей.')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Обучение операторов</h1>
          <p className="text-gray-600 mt-2">Профессиональная подготовка машинистов спецтехники</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Курсы</TabsTrigger>
            <TabsTrigger value="instructors">Преподаватели</TabsTrigger>
            <TabsTrigger value="enrollment">Записаться</TabsTrigger>
            <TabsTrigger value="progress">Мой прогресс</TabsTrigger>
          </TabsList>

          {/* Курсы обучения */}
          <TabsContent value="courses">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Программы обучения</h2>
                <p className="text-gray-600">Получите профессию машиниста спецтехники с нуля или повысьте квалификацию</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-blue-600">
                        {course.category}
                      </Badge>
                      <Badge className="absolute top-4 left-4 bg-green-600">
                        {course.level}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">{course.duration}</div>
                          <div className="text-xs text-gray-600">Длительность</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">{course.practical}ч</div>
                          <div className="text-xs text-gray-600">Практика</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-800">{course.theoretical}ч</div>
                          <div className="text-xs text-gray-600">Теория</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-medium">Программа курса:</h4>
                        {course.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-medium">Расписание:</h4>
                        {course.schedule.map((schedule, index) => (
                          <div key={index} className="text-sm text-gray-600">
                            • {schedule}
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-blue-800">
                            {course.price.toLocaleString()} ₽
                          </span>
                          {course.certificate && (
                            <div className="flex items-center mt-1">
                              <Icon name="Award" className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-xs text-gray-600">С сертификатом</span>
                            </div>
                          )}
                        </div>
                        <Button className="bg-blue-800 hover:bg-blue-900">
                          Записаться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                      <Icon name="Users" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">1000+</h3>
                      <p className="text-green-100">Выпускников</p>
                    </div>
                    <div>
                      <Icon name="Award" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">95%</h3>
                      <p className="text-green-100">Успешно трудоустроены</p>
                    </div>
                    <div>
                      <Icon name="Star" className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">4.8</h3>
                      <p className="text-green-100">Средняя оценка курсов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Преподаватели */}
          <TabsContent value="instructors">
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Наши преподаватели</h2>
                <p className="text-gray-600">Опытные специалисты с многолетним стажем работы</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {instructors.map((instructor, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                      <CardTitle className="text-lg">{instructor.name}</CardTitle>
                      <CardDescription className="text-blue-800 font-medium">
                        {instructor.specialization}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-800">{instructor.experience}</div>
                          <div className="text-xs text-gray-600">Опыт работы</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-800">{instructor.students}</div>
                          <div className="text-xs text-gray-600">Учеников</div>
                        </div>
                      </div>

                      <div className="flex justify-center mb-4">
                        {renderStars(instructor.rating)}
                        <span className="ml-2 text-sm text-gray-600">({instructor.rating})</span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <h4 className="font-medium text-sm">Достижения:</h4>
                        {instructor.achievements.map((achievement, idx) => (
                          <div key={idx} className="text-xs text-gray-600">
                            • {achievement}
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full">
                        <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                        Связаться
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Запись на курсы */}
          <TabsContent value="enrollment">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Записаться на обучение</CardTitle>
                  <CardDescription>
                    Заполните заявку, и мы свяжемся с вами для уточнения деталей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEnrollment} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          value={enrollmentData.name}
                          onChange={(e) => updateEnrollmentData('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={enrollmentData.phone}
                          onChange={(e) => updateEnrollmentData('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={enrollmentData.email}
                        onChange={(e) => updateEnrollmentData('email', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="course">Курс обучения *</Label>
                      <Select value={enrollmentData.course} onValueChange={(value) => updateEnrollmentData('course', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите курс" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map(course => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.title} - {course.price.toLocaleString()} ₽
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="experience">Опыт работы</Label>
                      <Select value={enrollmentData.experience} onValueChange={(value) => updateEnrollmentData('experience', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите уровень" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Без опыта</SelectItem>
                          <SelectItem value="basic">Базовые навыки</SelectItem>
                          <SelectItem value="intermediate">Средний уровень</SelectItem>
                          <SelectItem value="advanced">Опытный</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="preferredDate">Предпочтительная дата начала</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={enrollmentData.preferredDate}
                        onChange={(e) => updateEnrollmentData('preferredDate', e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Информация о выбранном курсе */}
              <Card>
                <CardHeader>
                  <CardTitle>Информация о курсе</CardTitle>
                </CardHeader>
                <CardContent>
                  {enrollmentData.course ? (
                    <div className="space-y-4">
                      {(() => {
                        const selectedCourse = courses.find(c => c.id === enrollmentData.course)
                        if (!selectedCourse) return null
                        
                        return (
                          <>
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-2">{selectedCourse.title}</h4>
                              <p className="text-blue-700 text-sm">{selectedCourse.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-xl font-bold text-blue-800">{selectedCourse.duration}</div>
                                <div className="text-sm text-gray-600">Общая длительность</div>
                              </div>
                              <div className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-xl font-bold text-blue-800">{selectedCourse.price.toLocaleString()} ₽</div>
                                <div className="text-sm text-gray-600">Стоимость обучения</div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium mb-2">Что вы изучите:</h4>
                              <ul className="space-y-1">
                                {selectedCourse.features.map((feature, index) => (
                                  <li key={index} className="flex items-center text-sm">
                                    <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <Icon name="Award" className="h-5 w-5 text-green-600" />
                                <div>
                                  <h4 className="font-medium text-green-800">Сертификат</h4>
                                  <p className="text-green-700 text-sm">
                                    По окончании курса вы получите официальное удостоверение машиниста
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })()}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      Выберите курс для просмотра подробной информации
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Мой прогресс */}
          <TabsContent value="progress">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Текущий курс</CardTitle>
                  <CardDescription>
                    Ваш прогресс в обучении
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">{studentProgress.currentCourse}</h4>
                        <span className="text-sm text-gray-600">
                          {studentProgress.completedHours} из {studentProgress.totalHours} часов
                        </span>
                      </div>
                      <Progress value={studentProgress.progress} className="mb-2" />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Прогресс: {studentProgress.progress}%</span>
                        <span>Средняя оценка: {studentProgress.grade}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Icon name="Calendar" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold">Следующее занятие</div>
                        <div className="text-sm text-gray-600">
                          {new Date(studentProgress.nextLesson).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Icon name="CheckCircle" className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold">Пройдено</div>
                        <div className="text-sm text-gray-600">
                          {studentProgress.completedHours} часов
                        </div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <Icon name="Clock" className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                        <div className="font-semibold">Осталось</div>
                        <div className="text-sm text-gray-600">
                          {studentProgress.totalHours - studentProgress.completedHours} часов
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Расписание занятий</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                        <div className="font-medium">1 февраля, 9:00-13:00</div>
                        <div className="text-sm text-gray-600">Теория: Гидравлические системы</div>
                        <div className="text-sm text-blue-600">Аудитория 2</div>
                      </div>
                      <div className="p-3 border-l-4 border-green-500 bg-green-50">
                        <div className="font-medium">2 февраля, 9:00-17:00</div>
                        <div className="text-sm text-gray-600">Практика: Работа на полигоне</div>
                        <div className="text-sm text-green-600">Учебный полигон</div>
                      </div>
                      <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                        <div className="font-medium">3 февраля, 10:00-14:00</div>
                        <div className="text-sm text-gray-600">Экзамен: Промежуточная аттестация</div>
                        <div className="text-sm text-yellow-600">Аудитория 1</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

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
                            <div className="font-medium text-sm">Конспект лекций</div>
                            <div className="text-xs text-gray-600">PDF, 2.5 MB</div>
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
                            <div className="font-medium text-sm">Видеоуроки</div>
                            <div className="text-xs text-gray-600">12 видео, 4.2 часа</div>
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
                            <div className="font-medium text-sm">Тестовые задания</div>
                            <div className="text-xs text-gray-600">50 вопросов</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="ArrowRight" className="h-4 w-4" />
                        </Button>
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

export default Training