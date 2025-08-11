import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Icon from '@/components/ui/icon'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const categories = [
    { value: 'all', label: 'Все статьи' },
    { value: 'equipment', label: 'Техника' },
    { value: 'construction', label: 'Строительство' },
    { value: 'maintenance', label: 'Обслуживание' },
    { value: 'safety', label: 'Безопасность' },
    { value: 'business', label: 'Бизнес' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать экскаватор для строительного проекта',
      category: 'equipment',
      author: 'Александр Петров',
      date: '2024-01-25',
      readTime: '8 мин',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      excerpt: 'Подробное руководство по выбору экскаватора в зависимости от типа работ, объема проекта и условий эксплуатации.',
      content: `
        <p>Выбор правильного экскаватора - ключевой фактор успеха любого строительного проекта. В этой статье мы рассмотрим основные критерии выбора.</p>
        
        <h3>Основные типы экскаваторов</h3>
        <ul>
          <li><strong>Гусеничные экскаваторы</strong> - для тяжелых работ на мягких грунтах</li>
          <li><strong>Колесные экскаваторы</strong> - для работы на твердых покрытиях</li>
          <li><strong>Мини-экскаваторы</strong> - для работы в стесненных условиях</li>
        </ul>
        
        <h3>Критерии выбора</h3>
        <p>При выборе экскаватора учитывайте следующие факторы:</p>
        <ul>
          <li>Тип и объем выполняемых работ</li>
          <li>Характеристики грунта</li>
          <li>Размеры рабочей площадки</li>
          <li>Требуемая производительность</li>
          <li>Бюджет проекта</li>
        </ul>
      `,
      tags: ['экскаваторы', 'выбор техники', 'строительство'],
      views: 1250,
      likes: 45,
      featured: true
    },
    {
      id: 2,
      title: 'Техническое обслуживание спецтехники: график и особенности',
      category: 'maintenance',
      author: 'Михаил Сидоров',
      date: '2024-01-20',
      readTime: '12 мин',
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      excerpt: 'Важность регулярного технического обслуживания, периодичность работ и основные процедуры для различных типов техники.',
      content: `
        <p>Регулярное техническое обслуживание - залог долгой и безотказной работы спецтехники. Рассмотрим основные аспекты ТО.</p>
        
        <h3>Виды технического обслуживания</h3>
        <ul>
          <li><strong>Ежедневное ТО</strong> - проверка основных систем</li>
          <li><strong>ТО-1</strong> - каждые 125 моточасов</li>
          <li><strong>ТО-2</strong> - каждые 250 моточасов</li>
          <li><strong>ТО-3</strong> - каждые 500 моточасов</li>
        </ul>
        
        <h3>Основные процедуры</h3>
        <p>В рамках планового ТО выполняются следующие работы:</p>
        <ul>
          <li>Замена масла и фильтров</li>
          <li>Проверка гидравлической системы</li>
          <li>Диагностика двигателя</li>
          <li>Смазка узлов и механизмов</li>
          <li>Проверка тормозной системы</li>
        </ul>
      `,
      tags: ['техобслуживание', 'ремонт', 'профилактика'],
      views: 890,
      likes: 32,
      featured: false
    },
    {
      id: 3,
      title: 'Безопасность на строительной площадке: основные правила',
      category: 'safety',
      author: 'Елена Морозова',
      date: '2024-01-18',
      readTime: '10 мин',
      image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
      excerpt: 'Комплексный обзор требований безопасности при работе со спецтехникой на строительных объектах.',
      content: `
        <p>Безопасность на строительной площадке - приоритет номер один. Соблюдение правил защищает жизнь и здоровье работников.</p>
        
        <h3>Основные требования безопасности</h3>
        <ul>
          <li>Обязательное использование СИЗ</li>
          <li>Проведение инструктажей</li>
          <li>Контроль технического состояния</li>
          <li>Соблюдение режима труда и отдыха</li>
        </ul>
        
        <h3>Специфика работы с разными типами техники</h3>
        <p>Каждый тип техники имеет свои особенности безопасной эксплуатации:</p>
        <ul>
          <li><strong>Экскаваторы</strong> - контроль зоны действия стрелы</li>
          <li><strong>Краны</strong> - соблюдение грузоподъемности</li>
          <li><strong>Самосвалы</strong> - безопасность при разгрузке</li>
        </ul>
      `,
      tags: ['безопасность', 'охрана труда', 'СИЗ'],
      views: 756,
      likes: 28,
      featured: true
    },
    {
      id: 4,
      title: 'Тренды в аренде спецтехники 2024',
      category: 'business',
      author: 'Дмитрий Козлов',
      date: '2024-01-15',
      readTime: '6 мин',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      excerpt: 'Анализ современных тенденций рынка аренды спецтехники и прогнозы развития отрасли.',
      content: `
        <p>Рынок аренды спецтехники активно развивается. Рассмотрим основные тренды 2024 года.</p>
        
        <h3>Ключевые тенденции</h3>
        <ul>
          <li><strong>Цифровизация</strong> - онлайн-платформы бронирования</li>
          <li><strong>Экологичность</strong> - электрическая и гибридная техника</li>
          <li><strong>Автоматизация</strong> - беспилотная техника</li>
          <li><strong>Сервисизация</strong> - комплексные решения</li>
        </ul>
        
        <h3>Прогнозы развития</h3>
        <p>Эксперты прогнозируют следующие изменения:</p>
        <ul>
          <li>Рост рынка на 15-20% в год</li>
          <li>Увеличение доли краткосрочной аренды</li>
          <li>Развитие региональных рынков</li>
          <li>Повышение требований к экологичности</li>
        </ul>
      `,
      tags: ['тренды', 'рынок', 'прогнозы'],
      views: 1120,
      likes: 67,
      featured: false
    },
    {
      id: 5,
      title: 'Экономия на строительстве: аренда vs покупка техники',
      category: 'business',
      author: 'Сергей Волков',
      date: '2024-01-12',
      readTime: '15 мин',
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      excerpt: 'Детальный анализ экономической эффективности аренды спецтехники по сравнению с покупкой.',
      content: `
        <p>Один из главных вопросов для строительных компаний - арендовать технику или покупать. Разберем все аспекты.</p>
        
        <h3>Преимущества аренды</h3>
        <ul>
          <li>Низкие первоначальные затраты</li>
          <li>Отсутствие расходов на обслуживание</li>
          <li>Гибкость в выборе техники</li>
          <li>Налоговые преимущества</li>
        </ul>
        
        <h3>Когда выгоднее покупать</h3>
        <p>Покупка оправдана при:</p>
        <ul>
          <li>Постоянной потребности в технике</li>
          <li>Долгосрочных проектах (более 2 лет)</li>
          <li>Специфических требованиях к технике</li>
          <li>Наличии собственного сервиса</li>
        </ul>
        
        <h3>Расчет экономической эффективности</h3>
        <p>Для принятия решения рассчитайте:</p>
        <ul>
          <li>Общую стоимость владения (TCO)</li>
          <li>Период окупаемости</li>
          <li>Остаточную стоимость</li>
          <li>Альтернативные издержки</li>
        </ul>
      `,
      tags: ['экономика', 'аренда', 'покупка', 'TCO'],
      views: 2340,
      likes: 89,
      featured: true
    }
  ]

  const popularTags = [
    { tag: 'экскаваторы', count: 15 },
    { tag: 'безопасность', count: 12 },
    { tag: 'техобслуживание', count: 10 },
    { tag: 'строительство', count: 18 },
    { tag: 'аренда', count: 25 },
    { tag: 'краны', count: 8 },
    { tag: 'самосвалы', count: 6 },
    { tag: 'экономика', count: 9 }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  const getCategoryLabel = (category: string) => {
    return categories.find(cat => cat.value === category)?.label || category
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'equipment': return 'bg-blue-600'
      case 'construction': return 'bg-green-600'
      case 'maintenance': return 'bg-yellow-600'
      case 'safety': return 'bg-red-600'
      case 'business': return 'bg-purple-600'
      default: return 'bg-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Блог</h1>
          <p className="text-gray-600 mt-2">Полезные статьи о спецтехнике и строительстве</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            {/* Поиск и фильтры */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Поиск статей</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Поиск по статьям..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Популярные теги */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      #{tag.tag} ({tag.count})
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Рекомендуемые статьи */}
            <Card>
              <CardHeader>
                <CardTitle>Рекомендуем</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 hover:text-blue-800 cursor-pointer">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-600 mt-1">
                          <Icon name="Eye" className="h-3 w-3 mr-1" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            {/* Рекомендуемые статьи */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуемые статьи</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className={`absolute top-4 right-4 ${getCategoryColor(post.category)}`}>
                          {getCategoryLabel(post.category)}
                        </Badge>
                        <Badge className="absolute top-4 left-4 bg-red-600">
                          Рекомендуем
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg hover:text-blue-800 cursor-pointer">
                          {post.title}
                        </CardTitle>
                        <CardDescription>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center">
                              <Icon name="User" className="h-4 w-4 mr-1" />
                              {post.author}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Calendar" className="h-4 w-4 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Clock" className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Icon name="Eye" className="h-4 w-4 mr-1" />
                              {post.views}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Heart" className="h-4 w-4 mr-1" />
                              {post.likes}
                            </span>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedPost(post)}
                              >
                                Читать далее
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-xl">{selectedPost?.title}</DialogTitle>
                                <DialogDescription>
                                  <div className="flex items-center space-x-4 text-sm">
                                    <span>{selectedPost?.author}</span>
                                    <span>{selectedPost && new Date(selectedPost.date).toLocaleDateString()}</span>
                                    <span>{selectedPost?.readTime}</span>
                                  </div>
                                </DialogDescription>
                              </DialogHeader>
                              {selectedPost && (
                                <div className="space-y-4">
                                  <img 
                                    src={selectedPost.image} 
                                    alt={selectedPost.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                  />
                                  <div 
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                                  />
                                  <div className="flex justify-between items-center pt-4 border-t">
                                    <div className="flex flex-wrap gap-2">
                                      {selectedPost.tags.map((tag: string, index: number) => (
                                        <Badge key={index} variant="outline">
                                          #{tag}
                                        </Badge>
                                      ))}
                                    </div>
                                    <div className="flex items-center space-x-4">
                                      <Button variant="ghost" size="sm">
                                        <Icon name="Heart" className="h-4 w-4 mr-1" />
                                        {selectedPost.likes}
                                      </Button>
                                      <Button variant="ghost" size="sm">
                                        <Icon name="Share" className="h-4 w-4 mr-1" />
                                        Поделиться
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Все статьи */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Все статьи</h2>
                <p className="text-gray-600">Найдено: {filteredPosts.length} статей</p>
              </div>

              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-32 md:h-full object-cover"
                        />
                        <Badge className={`absolute top-2 right-2 ${getCategoryColor(post.category)}`}>
                          {getCategoryLabel(post.category)}
                        </Badge>
                      </div>
                      <div className="md:col-span-3 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold hover:text-blue-800 cursor-pointer line-clamp-2">
                            {post.title}
                          </h3>
                          {post.featured && (
                            <Badge className="bg-red-600 ml-2">
                              Топ
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <Icon name="User" className="h-4 w-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Calendar" className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Clock" className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Icon name="Eye" className="h-4 w-4 mr-1" />
                              {post.views}
                            </span>
                            <span className="flex items-center">
                              <Icon name="Heart" className="h-4 w-4 mr-1" />
                              {post.likes}
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => setSelectedPost(post)}
                                >
                                  Читать
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="text-xl">{selectedPost?.title}</DialogTitle>
                                  <DialogDescription>
                                    <div className="flex items-center space-x-4 text-sm">
                                      <span>{selectedPost?.author}</span>
                                      <span>{selectedPost && new Date(selectedPost.date).toLocaleDateString()}</span>
                                      <span>{selectedPost?.readTime}</span>
                                    </div>
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedPost && (
                                  <div className="space-y-4">
                                    <img 
                                      src={selectedPost.image} 
                                      alt={selectedPost.title}
                                      className="w-full h-64 object-cover rounded-lg"
                                    />
                                    <div 
                                      className="prose max-w-none"
                                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                                    />
                                    <div className="flex justify-between items-center pt-4 border-t">
                                      <div className="flex flex-wrap gap-2">
                                        {selectedPost.tags.map((tag: string, index: number) => (
                                          <Badge key={index} variant="outline">
                                            #{tag}
                                          </Badge>
                                        ))}
                                      </div>
                                      <div className="flex items-center space-x-4">
                                        <Button variant="ghost" size="sm">
                                          <Icon name="Heart" className="h-4 w-4 mr-1" />
                                          {selectedPost.likes}
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                          <Icon name="Share" className="h-4 w-4 mr-1" />
                                          Поделиться
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            <Button size="sm" variant="ghost">
                              <Icon name="Bookmark" className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Статьи не найдены</h3>
                  <p className="text-gray-600">Попробуйте изменить параметры поиска</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog