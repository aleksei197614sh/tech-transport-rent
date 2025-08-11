import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Icon from '@/components/ui/icon'

const News = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedNews, setSelectedNews] = useState<any>(null)

  const newsCategories = [
    { value: 'all', label: 'Все новости' },
    { value: 'company', label: 'Компания' },
    { value: 'equipment', label: 'Техника' },
    { value: 'projects', label: 'Проекты' },
    { value: 'industry', label: 'Отрасль' }
  ]

  const news = [
    {
      id: 1,
      title: 'Пополнение парка техники новыми экскаваторами JCB',
      category: 'equipment',
      date: '2024-01-25',
      author: 'Администратор',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      excerpt: 'В наш парк поступили 5 новых экскаваторов JCB JS200 последней модификации с улучшенными характеристиками.',
      content: `
        <p>Мы рады сообщить о значительном пополнении нашего парка техники. В январе 2024 года мы приобрели 5 новых экскаваторов JCB JS200 последней модификации.</p>
        
        <h3>Основные улучшения новой модификации:</h3>
        <ul>
          <li>Увеличенная мощность двигателя до 129 л.с.</li>
          <li>Улучшенная топливная экономичность</li>
          <li>Современная система GPS-навигации</li>
          <li>Комфортная кабина с кондиционером</li>
          <li>Система автоматического контроля работы</li>
        </ul>
        
        <p>Новая техника уже доступна для аренды и готова к работе на ваших объектах. Все экскаваторы прошли полную предпродажную подготовку и техническое обслуживание.</p>
      `,
      tags: ['JCB', 'экскаваторы', 'новая техника'],
      views: 245,
      featured: true
    },
    {
      id: 2,
      title: 'Завершение крупного проекта по строительству ЖК "Северный"',
      category: 'projects',
      date: '2024-01-20',
      author: 'Отдел проектов',
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      excerpt: 'Успешно завершен 18-месячный проект по обеспечению техникой строительства жилого комплекса.',
      content: `
        <p>После 18 месяцев интенсивной работы мы успешно завершили один из наших крупнейших проектов - обеспечение техникой строительства жилого комплекса "Северный".</p>
        
        <h3>Результаты проекта:</h3>
        <ul>
          <li>Построено 3 жилых дома общей площадью 45,000 м²</li>
          <li>Использовано более 15 единиц различной техники</li>
          <li>Отработано свыше 8,000 машино-часов</li>
          <li>Проект завершен точно в срок</li>
        </ul>
        
        <p>Благодарим команду ООО "СтройИнвест" за отличное сотрудничество и доверие к нашей компании.</p>
      `,
      tags: ['проект', 'строительство', 'ЖК'],
      views: 189,
      featured: false
    },
    {
      id: 3,
      title: 'Новые тарифы на долгосрочную аренду',
      category: 'company',
      date: '2024-01-15',
      author: 'Коммерческий отдел',
      image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
      excerpt: 'С 1 февраля 2024 года вводятся новые выгодные тарифы для долгосрочной аренды техники.',
      content: `
        <p>Мы постоянно работаем над улучшением условий сотрудничества с нашими клиентами. С 1 февраля 2024 года вводятся новые тарифы для долгосрочной аренды.</p>
        
        <h3>Новые условия:</h3>
        <ul>
          <li>Скидка 15% при аренде от 1 месяца</li>
          <li>Скидка 25% при аренде от 3 месяцев</li>
          <li>Скидка 35% при аренде от 6 месяцев</li>
          <li>Индивидуальные условия для годовых контрактов</li>
        </ul>
        
        <p>Также для постоянных клиентов действует дополнительная скидка 10%.</p>
      `,
      tags: ['тарифы', 'скидки', 'долгосрочная аренда'],
      views: 156,
      featured: false
    },
    {
      id: 4,
      title: 'Тенденции развития строительной отрасли в 2024 году',
      category: 'industry',
      date: '2024-01-10',
      author: 'Аналитический отдел',
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      excerpt: 'Обзор основных трендов и перспектив развития строительной индустрии в текущем году.',
      content: `
        <p>Строительная отрасль продолжает развиваться, адаптируясь к новым вызовам и возможностям. Рассмотрим основные тенденции 2024 года.</p>
        
        <h3>Ключевые тренды:</h3>
        <ul>
          <li>Цифровизация строительных процессов</li>
          <li>Экологичность и энергоэффективность</li>
          <li>Автоматизация и роботизация</li>
          <li>Модульное строительство</li>
          <li>Использование новых материалов</li>
        </ul>
        
        <p>Наша компания активно следит за этими тенденциями и инвестирует в современную технику.</p>
      `,
      tags: ['тренды', 'строительство', '2024'],
      views: 203,
      featured: false
    },
    {
      id: 5,
      title: 'Открытие нового сервисного центра',
      category: 'company',
      date: '2024-01-05',
      author: 'Руководство',
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      excerpt: 'В Москве открылся новый современный сервисный центр для обслуживания нашей техники.',
      content: `
        <p>Мы рады объявить об открытии нового сервисного центра в Москве, который значительно улучшит качество обслуживания нашей техники.</p>
        
        <h3>Возможности нового центра:</h3>
        <ul>
          <li>Современное диагностическое оборудование</li>
          <li>Квалифицированные специалисты</li>
          <li>Склад оригинальных запчастей</li>
          <li>Круглосуточная аварийная служба</li>
          <li>Мойка и детейлинг техники</li>
        </ul>
        
        <p>Это позволит нам еще лучше поддерживать технику в идеальном состоянии.</p>
      `,
      tags: ['сервис', 'открытие', 'техобслуживание'],
      views: 178,
      featured: true
    }
  ]

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredNews = news.filter(item => item.featured)

  const getCategoryLabel = (category: string) => {
    return newsCategories.find(cat => cat.value === category)?.label || category
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'company': return 'bg-blue-600'
      case 'equipment': return 'bg-green-600'
      case 'projects': return 'bg-purple-600'
      case 'industry': return 'bg-orange-600'
      default: return 'bg-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Новости и события</h1>
          <p className="text-gray-600 mt-2">Актуальная информация о компании и отрасли</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Рекомендуемые новости */}
        {featuredNews.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Рекомендуемые новости</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-4 right-4 ${getCategoryColor(item.category)}`}>
                      {getCategoryLabel(item.category)}
                    </Badge>
                    <Badge className="absolute top-4 left-4 bg-red-600">
                      Рекомендуем
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl hover:text-blue-800 cursor-pointer">
                      {item.title}
                    </CardTitle>
                    <CardDescription>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center">
                          <Icon name="Calendar" className="h-4 w-4 mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Icon name="User" className="h-4 w-4 mr-1" />
                          {item.author}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Eye" className="h-4 w-4 mr-1" />
                          {item.views}
                        </span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedNews(item)}
                          >
                            Читать далее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-xl">{selectedNews?.title}</DialogTitle>
                            <DialogDescription>
                              <div className="flex items-center space-x-4 text-sm">
                                <span>{selectedNews?.author}</span>
                                <span>{selectedNews && new Date(selectedNews.date).toLocaleDateString()}</span>
                                <Badge className={getCategoryColor(selectedNews?.category || '')}>
                                  {getCategoryLabel(selectedNews?.category || '')}
                                </Badge>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                          {selectedNews && (
                            <div className="space-y-4">
                              <img 
                                src={selectedNews.image} 
                                alt={selectedNews.title}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                              <div 
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                              />
                              <div className="flex flex-wrap gap-2 pt-4 border-t">
                                {selectedNews.tags.map((tag: string, index: number) => (
                                  <Badge key={index} variant="outline">
                                    #{tag}
                                  </Badge>
                                ))}
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

        {/* Фильтры */}
        <section className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск по новостям</label>
                  <Input
                    placeholder="Введите ключевые слова..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {newsCategories.map(category => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Список новостей */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Все новости</h2>
            <p className="text-gray-600">Найдено: {filteredNews.length} новостей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <Badge className={`absolute top-3 right-3 ${getCategoryColor(item.category)}`}>
                    {getCategoryLabel(item.category)}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-blue-800 cursor-pointer line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center justify-between text-xs">
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                      <span className="flex items-center">
                        <Icon name="Eye" className="h-3 w-3 mr-1" />
                        {item.views}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedNews(item)}
                        >
                          <Icon name="ArrowRight" className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl">{selectedNews?.title}</DialogTitle>
                          <DialogDescription>
                            <div className="flex items-center space-x-4 text-sm">
                              <span>{selectedNews?.author}</span>
                              <span>{selectedNews && new Date(selectedNews.date).toLocaleDateString()}</span>
                              <Badge className={getCategoryColor(selectedNews?.category || '')}>
                                {getCategoryLabel(selectedNews?.category || '')}
                              </Badge>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                        {selectedNews && (
                          <div className="space-y-4">
                            <img 
                              src={selectedNews.image} 
                              alt={selectedNews.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <div 
                              className="prose max-w-none"
                              dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                            />
                            <div className="flex flex-wrap gap-2 pt-4 border-t">
                              {selectedNews.tags.map((tag: string, index: number) => (
                                <Badge key={index} variant="outline">
                                  #{tag}
                                </Badge>
                              ))}
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

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Новости не найдены</h3>
              <p className="text-gray-600">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default News