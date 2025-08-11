import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import Icon from '@/components/ui/icon'

const Comparison = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([])
  const [comparisonCriteria, setComparisonCriteria] = useState({
    price: true,
    specs: true,
    features: true,
    availability: true,
    reviews: true
  })

  const equipment = [
    {
      id: 'excavator-jcb',
      name: 'Экскаватор JCB JS200',
      category: 'Экскаваторы',
      price: { hourly: 650, daily: 4500, weekly: 28000, monthly: 110000 },
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      specs: {
        weight: '20 тонн',
        power: '129 л.с.',
        bucketCapacity: '1.0 м³',
        digDepth: '6.5 м',
        reach: '9.8 м',
        fuelConsumption: '15 л/ч'
      },
      features: [
        'GPS навигация',
        'Кондиционер',
        'Камера заднего вида',
        'LED освещение',
        'Автоматическая система'
      ],
      availability: true,
      rating: 4.8,
      reviews: 45,
      pros: [
        'Высокая надежность',
        'Экономичный расход топлива',
        'Комфортная кабина',
        'Простота обслуживания'
      ],
      cons: [
        'Высокая стоимость аренды',
        'Требует опытного оператора'
      ]
    },
    {
      id: 'excavator-cat',
      name: 'Экскаватор CAT 320D',
      category: 'Экскаваторы',
      price: { hourly: 700, daily: 4800, weekly: 30000, monthly: 115000 },
      image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
      specs: {
        weight: '22 тонны',
        power: '140 л.с.',
        bucketCapacity: '1.2 м³',
        digDepth: '7.0 м',
        reach: '10.2 м',
        fuelConsumption: '16 л/ч'
      },
      features: [
        'Автоматическая система',
        'Подогрев кабины',
        'Bluetooth',
        'Система контроля',
        'Улучшенная эргономика'
      ],
      availability: true,
      rating: 4.7,
      reviews: 38,
      pros: [
        'Высокая производительность',
        'Отличная маневренность',
        'Современные технологии',
        'Надежность CAT'
      ],
      cons: [
        'Более высокий расход топлива',
        'Дорогие запчасти'
      ]
    },
    {
      id: 'truck-kamaz',
      name: 'Самосвал КАМАЗ-65115',
      category: 'Самосвалы',
      price: { hourly: 450, daily: 3200, weekly: 20000, monthly: 75000 },
      image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
      specs: {
        capacity: '15 тонн',
        power: '240 л.с.',
        bodyVolume: '12 м³',
        fuelTank: '350 л',
        maxSpeed: '90 км/ч',
        fuelConsumption: '25 л/100км'
      },
      features: [
        'Гидравлический подъем',
        'ABS',
        'Тахограф',
        'Подогрев двигателя',
        'Кондиционер'
      ],
      availability: true,
      rating: 4.6,
      reviews: 52,
      pros: [
        'Надежность российского производства',
        'Доступные запчасти',
        'Простота обслуживания',
        'Хорошая проходимость'
      ],
      cons: [
        'Повышенный расход топлива',
        'Менее комфортная кабина'
      ]
    },
    {
      id: 'crane-ks',
      name: 'Автокран КС-45719',
      category: 'Краны',
      price: { hourly: 800, daily: 5800, weekly: 36000, monthly: 140000 },
      image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
      specs: {
        capacity: '25 тонн',
        boomLength: '22 м',
        liftHeight: '28 м',
        power: '230 л.с.',
        weight: '24 тонны',
        fuelConsumption: '20 л/ч'
      },
      features: [
        'Телескопическая стрела',
        'Система стабилизации',
        'Радиосвязь',
        'Автоматический контроль',
        'Система безопасности'
      ],
      availability: false,
      rating: 4.9,
      reviews: 28,
      pros: [
        'Высокая грузоподъемность',
        'Точность позиционирования',
        'Современные системы безопасности',
        'Универсальность применения'
      ],
      cons: [
        'Высокая стоимость аренды',
        'Требует специальных разрешений',
        'Ограничения по погоде'
      ]
    }
  ]

  const addToComparison = (equipmentId: string) => {
    if (selectedEquipment.includes(equipmentId)) {
      setSelectedEquipment(prev => prev.filter(id => id !== equipmentId))
    } else if (selectedEquipment.length < 3) {
      setSelectedEquipment(prev => [...prev, equipmentId])
    } else {
      alert('Можно сравнивать максимум 3 единицы техники')
    }
  }

  const clearComparison = () => {
    setSelectedEquipment([])
  }

  const comparedEquipment = equipment.filter(eq => selectedEquipment.includes(eq.id))

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const getBestValue = (values: number[], index: number) => {
    const min = Math.min(...values)
    return values[index] === min
  }

  const getWorstValue = (values: number[], index: number) => {
    const max = Math.max(...values)
    return values[index] === max
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Сравнение техники</h1>
          <p className="text-gray-600 mt-2">Сравните характеристики и выберите оптимальный вариант</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Выбор техники</CardTitle>
                <CardDescription>
                  Выберите до 3 единиц для сравнения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {equipment.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.id}
                        checked={selectedEquipment.includes(item.id)}
                        onCheckedChange={() => addToComparison(item.id)}
                        disabled={!selectedEquipment.includes(item.id) && selectedEquipment.length >= 3}
                      />
                      <Label htmlFor={item.id} className="flex-1 text-sm">
                        {item.name}
                      </Label>
                    </div>
                  ))}
                </div>
                
                {selectedEquipment.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" onClick={clearComparison} className="w-full">
                      <Icon name="X" className="mr-2 h-4 w-4" />
                      Очистить выбор
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Критерии сравнения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="price"
                      checked={comparisonCriteria.price}
                      onCheckedChange={(checked) => 
                        setComparisonCriteria(prev => ({ ...prev, price: checked as boolean }))
                      }
                    />
                    <Label htmlFor="price">Цены</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="specs"
                      checked={comparisonCriteria.specs}
                      onCheckedChange={(checked) => 
                        setComparisonCriteria(prev => ({ ...prev, specs: checked as boolean }))
                      }
                    />
                    <Label htmlFor="specs">Характеристики</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="features"
                      checked={comparisonCriteria.features}
                      onCheckedChange={(checked) => 
                        setComparisonCriteria(prev => ({ ...prev, features: checked as boolean }))
                      }
                    />
                    <Label htmlFor="features">Особенности</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="availability"
                      checked={comparisonCriteria.availability}
                      onCheckedChange={(checked) => 
                        setComparisonCriteria(prev => ({ ...prev, availability: checked as boolean }))
                      }
                    />
                    <Label htmlFor="availability">Доступность</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="reviews"
                      checked={comparisonCriteria.reviews}
                      onCheckedChange={(checked) => 
                        setComparisonCriteria(prev => ({ ...prev, reviews: checked as boolean }))
                      }
                    />
                    <Label htmlFor="reviews">Отзывы</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            {selectedEquipment.length === 0 ? (
              <Card>
                <CardContent className="pt-12">
                  <div className="text-center">
                    <Icon name="Scale" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Выберите технику для сравнения</h3>
                    <p className="text-gray-600 mb-6">
                      Отметьте до 3 единиц техники в боковой панели для детального сравнения
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {equipment.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className="p-4 border rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50"
                          onClick={() => addToComparison(item.id)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-32 object-cover rounded mb-3"
                          />
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.price.daily.toLocaleString()} ₽/сутки</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {/* Заголовок сравнения */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Сравнение техники</CardTitle>
                        <CardDescription>
                          Сравниваем {selectedEquipment.length} единиц техники
                        </CardDescription>
                      </div>
                      <Button variant="outline" onClick={clearComparison}>
                        <Icon name="X" className="mr-2 h-4 w-4" />
                        Очистить
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                {/* Основная информация */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {comparedEquipment.map((item, index) => (
                        <div key={item.id} className="text-center">
                          <div className="relative mb-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-40 object-cover rounded-lg"
                            />
                            <Badge 
                              className={`absolute top-2 right-2 ${item.availability ? 'bg-green-600' : 'bg-red-600'}`}
                            >
                              {item.availability ? 'Доступна' : 'Занята'}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <Badge variant="outline" className="mb-3">{item.category}</Badge>
                          <div className="flex justify-center mb-2">
                            {renderStars(item.rating)}
                          </div>
                          <p className="text-sm text-gray-600">{item.reviews} отзывов</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Сравнение цен */}
                {comparisonCriteria.price && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Сравнение цен</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3">Период</th>
                              {comparedEquipment.map((item) => (
                                <th key={item.id} className="text-center p-3">{item.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {['hourly', 'daily', 'weekly', 'monthly'].map((period) => (
                              <tr key={period} className="border-b">
                                <td className="p-3 font-medium">
                                  {period === 'hourly' ? 'Час' :
                                   period === 'daily' ? 'Сутки' :
                                   period === 'weekly' ? 'Неделя' : 'Месяц'}
                                </td>
                                {comparedEquipment.map((item, index) => {
                                  const values = comparedEquipment.map(eq => eq.price[period as keyof typeof eq.price])
                                  const isBest = getBestValue(values, index)
                                  const isWorst = getWorstValue(values, index)
                                  
                                  return (
                                    <td key={item.id} className="p-3 text-center">
                                      <span className={`font-semibold ${
                                        isBest ? 'text-green-600' : isWorst ? 'text-red-600' : 'text-gray-900'
                                      }`}>
                                        {item.price[period as keyof typeof item.price].toLocaleString()} ₽
                                      </span>
                                      {isBest && <div className="text-xs text-green-600">Лучшая цена</div>}
                                    </td>
                                  )
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Технические характеристики */}
                {comparisonCriteria.specs && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Технические характеристики</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3">Характеристика</th>
                              {comparedEquipment.map((item) => (
                                <th key={item.id} className="text-center p-3">{item.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {Object.keys(comparedEquipment[0]?.specs || {}).map((spec) => (
                              <tr key={spec} className="border-b">
                                <td className="p-3 font-medium capitalize">
                                  {spec === 'weight' ? 'Вес' :
                                   spec === 'power' ? 'Мощность' :
                                   spec === 'bucketCapacity' ? 'Объем ковша' :
                                   spec === 'digDepth' ? 'Глубина копания' :
                                   spec === 'reach' ? 'Радиус действия' :
                                   spec === 'capacity' ? 'Грузоподъемность' :
                                   spec === 'bodyVolume' ? 'Объем кузова' :
                                   spec === 'fuelTank' ? 'Топливный бак' :
                                   spec === 'maxSpeed' ? 'Макс. скорость' :
                                   spec === 'boomLength' ? 'Длина стрелы' :
                                   spec === 'liftHeight' ? 'Высота подъема' :
                                   spec === 'fuelConsumption' ? 'Расход топлива' :
                                   spec}
                                </td>
                                {comparedEquipment.map((item) => (
                                  <td key={item.id} className="p-3 text-center">
                                    {item.specs[spec as keyof typeof item.specs] || '-'}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Особенности и преимущества */}
                {comparisonCriteria.features && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Особенности и преимущества</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {comparedEquipment.map((item) => (
                          <div key={item.id}>
                            <h4 className="font-semibold mb-3">{item.name}</h4>
                            
                            <div className="mb-4">
                              <h5 className="text-sm font-medium text-green-800 mb-2">Особенности:</h5>
                              <ul className="space-y-1">
                                {item.features.map((feature, index) => (
                                  <li key={index} className="flex items-center text-sm">
                                    <Icon name="Check" className="h-3 w-3 text-green-500 mr-2" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-4">
                              <h5 className="text-sm font-medium text-green-800 mb-2">Преимущества:</h5>
                              <ul className="space-y-1">
                                {item.pros.map((pro, index) => (
                                  <li key={index} className="flex items-center text-sm">
                                    <Icon name="Plus" className="h-3 w-3 text-green-500 mr-2" />
                                    <span>{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="text-sm font-medium text-red-800 mb-2">Недостатки:</h5>
                              <ul className="space-y-1">
                                {item.cons.map((con, index) => (
                                  <li key={index} className="flex items-center text-sm">
                                    <Icon name="Minus" className="h-3 w-3 text-red-500 mr-2" />
                                    <span>{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Итоговое сравнение */}
                <Card>
                  <CardHeader>
                    <CardTitle>Итоговое сравнение</CardTitle>
                    <CardDescription>
                      Рекомендации по выбору техники
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {comparedEquipment.map((item, index) => (
                        <div key={item.id} className="text-center p-4 border rounded-lg">
                          <h4 className="font-semibold mb-3">{item.name}</h4>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                              <span>Цена/качество:</span>
                              <div className="flex">
                                {renderStars(item.rating)}
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Популярность:</span>
                              <span className="font-medium">{item.reviews} отзывов</span>
                            </div>
                          </div>

                          <div className="text-2xl font-bold text-blue-800 mb-2">
                            {item.price.daily.toLocaleString()} ₽
                          </div>
                          <div className="text-sm text-gray-600 mb-4">за сутки</div>

                          <Button 
                            className="w-full bg-blue-800 hover:bg-blue-900"
                            disabled={!item.availability}
                          >
                            {item.availability ? 'Выбрать' : 'Недоступна'}
                          </Button>
                        </div>
                      ))}
                    </div>

                    {comparedEquipment.length > 1 && (
                      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Рекомендация</h4>
                        <p className="text-blue-700 text-sm">
                          {(() => {
                            const cheapest = comparedEquipment.reduce((prev, current) => 
                              prev.price.daily < current.price.daily ? prev : current
                            )
                            const bestRated = comparedEquipment.reduce((prev, current) => 
                              prev.rating > current.rating ? prev : current
                            )
                            
                            if (cheapest.id === bestRated.id) {
                              return `${cheapest.name} - оптимальное соотношение цены и качества`
                            } else {
                              return `Для экономии выберите ${cheapest.name}, для максимального качества - ${bestRated.name}`
                            }
                          })()}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison