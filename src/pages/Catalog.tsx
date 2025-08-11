import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Icon from '@/components/ui/icon'

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState('name')

  const equipment = [
    {
      id: 1,
      name: 'Экскаватор JCB JS200',
      category: 'excavators',
      price: 4500,
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      specs: ['Вес: 20т', 'Глубина копания: 6.5м', 'Мощность: 129 л.с.'],
      availability: true,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Самосвал КАМАЗ-65115',
      category: 'trucks',
      price: 3200,
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      specs: ['Грузоподъемность: 15т', 'Объем кузова: 12м³', 'Мощность: 240 л.с.'],
      availability: true,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Автокран КС-45719',
      category: 'cranes',
      price: 5800,
      image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
      specs: ['Грузоподъемность: 25т', 'Вылет стрелы: 22м', 'Высота подъема: 28м'],
      availability: false,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Бульдозер CAT D6T',
      category: 'bulldozers',
      price: 4200,
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      specs: ['Мощность: 215 л.с.', 'Вес: 18т', 'Ширина отвала: 3.4м'],
      availability: true,
      rating: 4.7
    }
  ]

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'excavators', label: 'Экскаваторы' },
    { value: 'trucks', label: 'Грузовики' },
    { value: 'cranes', label: 'Краны' },
    { value: 'bulldozers', label: 'Бульдозеры' }
  ]

  const filteredEquipment = equipment
    .filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'all' || item.category === category) &&
      item.price >= priceRange[0] && item.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'rating': return b.rating - a.rating
        default: return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Каталог техники</h1>
          <p className="text-gray-600 mt-2">Найдите подходящую технику для ваших задач</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Фильтры</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск</label>
                  <Input
                    placeholder="Название техники..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Категория</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Цена за сутки: {priceRange[0]} - {priceRange[1]} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    min={0}
                    step={100}
                    className="mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Сортировка</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">По названию</SelectItem>
                      <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Список техники */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Найдено: {filteredEquipment.length} единиц техники</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="Grid3X3" className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="List" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredEquipment.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge 
                      className={`absolute top-3 right-3 ${item.availability ? 'bg-green-600' : 'bg-red-600'}`}
                    >
                      {item.availability ? 'Доступна' : 'Занята'}
                    </Badge>
                    <div className="absolute top-3 left-3 flex items-center bg-white/90 rounded px-2 py-1">
                      <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription>
                      {categories.find(cat => cat.value === item.category)?.label}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {item.specs.map((spec, index) => (
                        <li key={index}>• {spec}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-800">{item.price} ₽/сутки</span>
                      <Button 
                        disabled={!item.availability}
                        className="bg-blue-800 hover:bg-blue-900"
                      >
                        Забронировать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEquipment.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Техника не найдена</h3>
                <p className="text-gray-600">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog