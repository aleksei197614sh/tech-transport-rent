import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import Icon from '@/components/ui/icon'

const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<any>(null)

  const equipmentCategories = [
    {
      id: 'excavators',
      name: 'Экскаваторы',
      description: 'Землеройная техника для различных видов работ',
      icon: 'Truck',
      count: 45
    },
    {
      id: 'trucks',
      name: 'Самосвалы',
      description: 'Грузовая техника для перевозки материалов',
      icon: 'Truck',
      count: 32
    },
    {
      id: 'cranes',
      name: 'Краны',
      description: 'Подъемная техника различной грузоподъемности',
      icon: 'Crane',
      count: 28
    },
    {
      id: 'bulldozers',
      name: 'Бульдозеры',
      description: 'Техника для планировки и земляных работ',
      icon: 'Tractor',
      count: 18
    }
  ]

  const equipmentList = {
    excavators: [
      {
        id: 1,
        name: 'JCB JS200',
        model: '2022',
        price: 4500,
        image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
        specs: {
          weight: '20 тонн',
          power: '129 л.с.',
          bucketCapacity: '1.0 м³',
          digDepth: '6.5 м',
          reach: '9.8 м'
        },
        features: ['GPS навигация', 'Кондиционер', 'Камера заднего вида', 'LED освещение'],
        availability: true,
        condition: 95,
        lastService: '2024-01-15'
      },
      {
        id: 2,
        name: 'CAT 320D',
        model: '2021',
        price: 4800,
        image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
        specs: {
          weight: '22 тонны',
          power: '140 л.с.',
          bucketCapacity: '1.2 м³',
          digDepth: '7.0 м',
          reach: '10.2 м'
        },
        features: ['Автоматическая система', 'Подогрев кабины', 'Bluetooth', 'Система контроля'],
        availability: true,
        condition: 92,
        lastService: '2024-01-10'
      }
    ],
    trucks: [
      {
        id: 3,
        name: 'КАМАЗ-65115',
        model: '2023',
        price: 3200,
        image: '/img/bf8ec60c-fcea-441b-9ff5-d6d3e20346b7.jpg',
        specs: {
          capacity: '15 тонн',
          power: '240 л.с.',
          bodyVolume: '12 м³',
          fuelTank: '350 л',
          maxSpeed: '90 км/ч'
        },
        features: ['Гидравлический подъем', 'ABS', 'Тахограф', 'Подогрев двигателя'],
        availability: true,
        condition: 88,
        lastService: '2024-01-20'
      }
    ],
    cranes: [
      {
        id: 4,
        name: 'КС-45719',
        model: '2022',
        price: 5800,
        image: '/img/1d37575b-149f-413e-82cb-d9dfa58c3d99.jpg',
        specs: {
          capacity: '25 тонн',
          boomLength: '22 м',
          liftHeight: '28 м',
          power: '230 л.с.',
          weight: '24 тонны'
        },
        features: ['Телескопическая стрела', 'Система стабилизации', 'Радиосвязь', 'Автокран'],
        availability: false,
        condition: 90,
        lastService: '2024-01-05'
      }
    ],
    bulldozers: [
      {
        id: 5,
        name: 'CAT D6T',
        model: '2021',
        price: 4200,
        image: '/img/839dc702-587f-4599-9174-ba27b617c34a.jpg',
        specs: {
          weight: '18 тонн',
          power: '215 л.с.',
          bladeWidth: '3.4 м',
          bladeCapacity: '4.2 м³',
          groundPressure: '0.65 кг/см²'
        },
        features: ['Автоматическое управление', 'Система GPS', 'Комфортная кабина', 'Низкий расход топлива'],
        availability: true,
        condition: 94,
        lastService: '2024-01-12'
      }
    ]
  }

  const getConditionColor = (condition: number) => {
    if (condition >= 90) return 'text-green-600'
    if (condition >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getConditionLabel = (condition: number) => {
    if (condition >= 90) return 'Отличное'
    if (condition >= 80) return 'Хорошее'
    return 'Удовлетворительное'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Наша техника</h1>
          <p className="text-gray-600 mt-2">Современный парк спецтехники для любых задач</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Категории техники */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Категории техники</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={category.icon} size={32} className="text-blue-800" />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    {category.count} единиц
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Детальный каталог */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Детальный каталог</h2>
          
          <Tabs defaultValue="excavators" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="excavators">Экскаваторы</TabsTrigger>
              <TabsTrigger value="trucks">Самосвалы</TabsTrigger>
              <TabsTrigger value="cranes">Краны</TabsTrigger>
              <TabsTrigger value="bulldozers">Бульдозеры</TabsTrigger>
            </TabsList>
            
            {Object.entries(equipmentList).map(([category, equipment]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {equipment.map((item) => (
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
                        <div className="absolute top-3 left-3 bg-white/90 rounded px-2 py-1">
                          <span className="text-sm font-medium">{item.model}</span>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center justify-between">
                            <span>Состояние: </span>
                            <span className={`font-medium ${getConditionColor(item.condition)}`}>
                              {getConditionLabel(item.condition)}
                            </span>
                          </div>
                          <Progress value={item.condition} className="mt-2" />
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(item.specs).slice(0, 4).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-600 capitalize">
                                  {key === 'weight' ? 'Вес:' :
                                   key === 'power' ? 'Мощность:' :
                                   key === 'capacity' ? 'Грузоподъемность:' :
                                   key === 'bucketCapacity' ? 'Ковш:' :
                                   `${key}:`}
                                </span>
                                <span className="font-medium">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-blue-800">
                            {item.price.toLocaleString()} ₽/сутки
                          </span>
                          <div className="space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => setSelectedEquipment(item)}
                                >
                                  <Icon name="Eye" className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>{item.name} ({item.model})</DialogTitle>
                                  <DialogDescription>
                                    Подробная информация о технике
                                  </DialogDescription>
                                </DialogHeader>
                                
                                {selectedEquipment && (
                                  <div className="space-y-6">
                                    <img 
                                      src={selectedEquipment.image} 
                                      alt={selectedEquipment.name}
                                      className="w-full h-64 object-cover rounded-lg"
                                    />
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <div>
                                        <h4 className="font-semibold mb-3">Технические характеристики</h4>
                                        <div className="space-y-2">
                                          {Object.entries(selectedEquipment.specs).map(([key, value]) => (
                                            <div key={key} className="flex justify-between">
                                              <span className="text-gray-600 capitalize">
                                                {key === 'weight' ? 'Вес:' :
                                                 key === 'power' ? 'Мощность:' :
                                                 key === 'capacity' ? 'Грузоподъемность:' :
                                                 key === 'bucketCapacity' ? 'Объем ковша:' :
                                                 key === 'digDepth' ? 'Глубина копания:' :
                                                 key === 'reach' ? 'Радиус действия:' :
                                                 key === 'bodyVolume' ? 'Объем кузова:' :
                                                 key === 'fuelTank' ? 'Топливный бак:' :
                                                 key === 'maxSpeed' ? 'Макс. скорость:' :
                                                 key === 'boomLength' ? 'Длина стрелы:' :
                                                 key === 'liftHeight' ? 'Высота подъема:' :
                                                 key === 'bladeWidth' ? 'Ширина отвала:' :
                                                 key === 'bladeCapacity' ? 'Объем отвала:' :
                                                 key === 'groundPressure' ? 'Давление на грунт:' :
                                                 `${key}:`}
                                              </span>
                                              <span className="font-medium">{value}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <h4 className="font-semibold mb-3">Дополнительные опции</h4>
                                        <ul className="space-y-2">
                                          {selectedEquipment.features.map((feature: string, index: number) => (
                                            <li key={index} className="flex items-center">
                                              <Icon name="Check" className="h-4 w-4 text-green-500 mr-2" />
                                              <span className="text-sm">{feature}</span>
                                            </li>
                                          ))}
                                        </ul>
                                        
                                        <div className="mt-6 space-y-3">
                                          <div className="flex justify-between">
                                            <span>Состояние:</span>
                                            <span className={`font-medium ${getConditionColor(selectedEquipment.condition)}`}>
                                              {getConditionLabel(selectedEquipment.condition)} ({selectedEquipment.condition}%)
                                            </span>
                                          </div>
                                          <Progress value={selectedEquipment.condition} />
                                          
                                          <div className="flex justify-between text-sm">
                                            <span>Последнее ТО:</span>
                                            <span>{new Date(selectedEquipment.lastService).toLocaleDateString()}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center pt-4 border-t">
                                      <div>
                                        <span className="text-2xl font-bold text-blue-800">
                                          {selectedEquipment.price.toLocaleString()} ₽/сутки
                                        </span>
                                        <p className="text-sm text-gray-600">Цена включает НДС</p>
                                      </div>
                                      <Button 
                                        disabled={!selectedEquipment.availability}
                                        className="bg-blue-800 hover:bg-blue-900"
                                      >
                                        {selectedEquipment.availability ? 'Забронировать' : 'Недоступна'}
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            
                            <Button 
                              disabled={!item.availability}
                              size="sm"
                              className="bg-blue-800 hover:bg-blue-900"
                            >
                              Заказать
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>
    </div>
  )
}

export default Equipment