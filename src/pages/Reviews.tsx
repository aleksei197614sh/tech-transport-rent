import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Icon from '@/components/ui/icon'

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    company: '',
    email: '',
    rating: 5,
    equipment: '',
    title: '',
    text: ''
  })

  const [filter, setFilter] = useState({
    rating: 'all',
    equipment: 'all',
    sortBy: 'date'
  })

  const reviews = [
    {
      id: 1,
      name: 'Алексей Петров',
      company: 'ООО "СтройИнвест"',
      rating: 5,
      equipment: 'Экскаватор JCB JS200',
      title: 'Отличная техника и сервис',
      text: 'Арендовали экскаватор для строительства жилого комплекса. Техника в идеальном состоянии, оператор профессиональный. Все сроки соблюдены, никаких нареканий. Обязательно будем обращаться еще!',
      date: '2024-01-20',
      verified: true,
      helpful: 15,
      project: 'ЖК "Северный"'
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      company: 'Мосавтодор',
      rating: 5,
      equipment: 'Самосвал КАМАЗ-65115',
      title: 'Надежный партнер',
      text: 'Работаем с СпецТехАрендой уже 3 года. Всегда качественная техника, оперативная подача, разумные цены. Особенно ценим круглосуточную поддержку - всегда помогут в сложной ситуации.',
      date: '2024-01-18',
      verified: true,
      helpful: 12,
      project: 'Реконструкция МКАД'
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      company: 'ГК "Ритейл Девелопмент"',
      rating: 4,
      equipment: 'Автокран КС-45719',
      title: 'Хорошее качество услуг',
      text: 'Арендовали кран для строительства торгового центра. В целом все хорошо - техника исправная, оператор опытный. Единственный минус - немного задержали с подачей техники, но потом все компенсировали.',
      date: '2024-01-15',
      verified: true,
      helpful: 8,
      project: 'ТРК "Галерея"'
    },
    {
      id: 4,
      name: 'Сергей Волков',
      company: 'ИП Волков С.А.',
      rating: 5,
      equipment: 'Бульдозер CAT D6T',
      title: 'Превосходно!',
      text: 'Небольшая компания, но нужно было срочно планировать участок. Обратился в СпецТехАренду - подали технику в тот же день! Оператор работал аккуратно, все сделали качественно и в срок.',
      date: '2024-01-12',
      verified: false,
      helpful: 6,
      project: 'Частное строительство'
    },
    {
      id: 5,
      name: 'Елена Морозова',
      company: 'ООО "ГидроСтрой"',
      rating: 4,
      equipment: 'Экскаватор CAT 320D',
      title: 'Качественная техника',
      text: 'Арендовали экскаватор для прокладки коммуникаций. Техника современная, в отличном состоянии. Оператор знает свое дело. Цены конкурентные. Рекомендую!',
      date: '2024-01-10',
      verified: true,
      helpful: 9,
      project: 'Прокладка водопровода'
    }
  ]

  const ratingStats = {
    average: 4.6,
    total: reviews.length,
    distribution: {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length
    }
  }

  const equipmentTypes = [
    'Экскаваторы',
    'Самосвалы',
    'Автокраны',
    'Бульдозеры',
    'Погрузчики'
  ]

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={interactive && onRatingChange ? () => onRatingChange(i + 1) : undefined}
      />
    ))
  }

  const filteredReviews = reviews
    .filter(review => {
      if (filter.rating !== 'all' && review.rating !== parseInt(filter.rating)) return false
      if (filter.equipment !== 'all' && !review.equipment.toLowerCase().includes(filter.equipment.toLowerCase())) return false
      return true
    })
    .sort((a, b) => {
      switch (filter.sortBy) {
        case 'rating-high':
          return b.rating - a.rating
        case 'rating-low':
          return a.rating - b.rating
        case 'helpful':
          return b.helpful - a.helpful
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Review submitted:', newReview)
    alert('Спасибо за отзыв! Он будет опубликован после модерации.')
    setNewReview({
      name: '',
      company: '',
      email: '',
      rating: 5,
      equipment: '',
      title: '',
      text: ''
    })
  }

  const updateNewReview = (field: string, value: any) => {
    setNewReview(prev => ({ ...prev, [field]: value }))
  }

  const updateFilter = (field: string, value: string) => {
    setFilter(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Отзывы клиентов</h1>
          <p className="text-gray-600 mt-2">Мнения наших клиентов о качестве услуг</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            {/* Общая статистика */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Общая оценка</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-800 mb-2">
                    {ratingStats.average}
                  </div>
                  <div className="flex justify-center mb-2">
                    {renderStars(Math.round(ratingStats.average))}
                  </div>
                  <div className="text-sm text-gray-600">
                    На основе {ratingStats.total} отзывов
                  </div>
                </div>
                
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center space-x-2">
                      <span className="text-sm w-3">{rating}</span>
                      <Icon name="Star" className="h-4 w-4 text-yellow-500" />
                      <Progress 
                        value={(ratingStats.distribution[rating as keyof typeof ratingStats.distribution] / ratingStats.total) * 100} 
                        className="flex-1" 
                      />
                      <span className="text-sm w-6">
                        {ratingStats.distribution[rating as keyof typeof ratingStats.distribution]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Фильтры */}
            <Card>
              <CardHeader>
                <CardTitle>Фильтры</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="ratingFilter">По рейтингу</Label>
                  <Select value={filter.rating} onValueChange={(value) => updateFilter('rating', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все оценки</SelectItem>
                      <SelectItem value="5">5 звезд</SelectItem>
                      <SelectItem value="4">4 звезды</SelectItem>
                      <SelectItem value="3">3 звезды</SelectItem>
                      <SelectItem value="2">2 звезды</SelectItem>
                      <SelectItem value="1">1 звезда</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="equipmentFilter">По технике</Label>
                  <Select value={filter.equipment} onValueChange={(value) => updateFilter('equipment', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Вся техника</SelectItem>
                      {equipmentTypes.map(type => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="sortFilter">Сортировка</Label>
                  <Select value={filter.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">По дате</SelectItem>
                      <SelectItem value="rating-high">Высокий рейтинг</SelectItem>
                      <SelectItem value="rating-low">Низкий рейтинг</SelectItem>
                      <SelectItem value="helpful">По полезности</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            {/* Кнопка добавления отзыва */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                Отзывы ({filteredReviews.length})
              </h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-800 hover:bg-blue-900">
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Оставить отзыв
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Оставить отзыв</DialogTitle>
                    <DialogDescription>
                      Поделитесь своим опытом работы с нашей компанией
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="reviewName">Имя *</Label>
                        <Input
                          id="reviewName"
                          value={newReview.name}
                          onChange={(e) => updateNewReview('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="reviewCompany">Компания</Label>
                        <Input
                          id="reviewCompany"
                          value={newReview.company}
                          onChange={(e) => updateNewReview('company', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="reviewEmail">Email *</Label>
                      <Input
                        id="reviewEmail"
                        type="email"
                        value={newReview.email}
                        onChange={(e) => updateNewReview('email', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="reviewEquipment">Арендованная техника</Label>
                      <Input
                        id="reviewEquipment"
                        value={newReview.equipment}
                        onChange={(e) => updateNewReview('equipment', e.target.value)}
                        placeholder="Например: Экскаватор JCB JS200"
                      />
                    </div>

                    <div>
                      <Label>Оценка *</Label>
                      <div className="flex space-x-1 mt-2">
                        {renderStars(newReview.rating, true, (rating) => updateNewReview('rating', rating))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="reviewTitle">Заголовок отзыва *</Label>
                      <Input
                        id="reviewTitle"
                        value={newReview.title}
                        onChange={(e) => updateNewReview('title', e.target.value)}
                        placeholder="Краткое описание вашего опыта"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="reviewText">Текст отзыва *</Label>
                      <Textarea
                        id="reviewText"
                        rows={5}
                        value={newReview.text}
                        onChange={(e) => updateNewReview('text', e.target.value)}
                        placeholder="Расскажите подробно о вашем опыте работы с нами..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить отзыв
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Список отзывов */}
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-lg">{review.name}</CardTitle>
                          {review.verified && (
                            <Badge className="bg-green-600">
                              <Icon name="CheckCircle" className="h-3 w-3 mr-1" />
                              Проверен
                            </Badge>
                          )}
                        </div>
                        <CardDescription>
                          {review.company} • {review.equipment}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="flex space-x-1 mb-1">
                          {renderStars(review.rating)}
                        </div>
                        <div className="text-sm text-gray-600">
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">{review.title}</h4>
                    <p className="text-gray-600 mb-4">{review.text}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Проект: {review.project}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="ThumbsUp" className="h-4 w-4 mr-1" />
                          Полезно ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="MessageCircle" className="h-4 w-4 mr-1" />
                          Ответить
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <Icon name="MessageCircle" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Отзывы не найдены</h3>
                <p className="text-gray-600">Попробуйте изменить параметры фильтрации</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews