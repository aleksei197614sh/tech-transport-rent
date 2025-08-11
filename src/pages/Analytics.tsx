import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import Icon from '@/components/ui/icon'

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedMetric, setSelectedMetric] = useState('revenue')

  const revenueData = [
    { month: 'Янв', revenue: 2400000, orders: 45, utilization: 78 },
    { month: 'Фев', revenue: 2800000, orders: 52, utilization: 82 },
    { month: 'Мар', revenue: 3200000, orders: 58, utilization: 85 },
    { month: 'Апр', revenue: 2900000, orders: 48, utilization: 79 },
    { month: 'Май', revenue: 3500000, orders: 65, utilization: 88 },
    { month: 'Июн', revenue: 3800000, orders: 72, utilization: 92 }
  ]

  const equipmentUtilization = [
    { name: 'Экскаваторы', value: 85, count: 45, revenue: 12500000 },
    { name: 'Самосвалы', value: 78, count: 32, revenue: 8200000 },
    { name: 'Краны', value: 92, count: 28, revenue: 15600000 },
    { name: 'Бульдозеры', value: 73, count: 18, revenue: 6800000 }
  ]

  const topClients = [
    { name: 'ООО "СтройИнвест"', orders: 15, revenue: 4500000, growth: 12 },
    { name: 'Мосавтодор', orders: 12, revenue: 3800000, growth: 8 },
    { name: 'ГК "Ритейл Девелопмент"', orders: 8, revenue: 2900000, growth: -3 },
    { name: 'ООО "ГидроСтрой"', orders: 10, revenue: 2600000, growth: 15 },
    { name: 'Газпром Межрегионгаз', orders: 6, revenue: 2200000, growth: 22 }
  ]

  const kpiMetrics = [
    {
      title: 'Общая выручка',
      value: '18.6 млн ₽',
      change: '+12.5%',
      trend: 'up',
      icon: 'TrendingUp',
      description: 'За последние 6 месяцев'
    },
    {
      title: 'Загрузка техники',
      value: '84%',
      change: '+3.2%',
      trend: 'up',
      icon: 'Activity',
      description: 'Средняя загрузка парка'
    },
    {
      title: 'Количество заказов',
      value: '340',
      change: '+8.7%',
      trend: 'up',
      icon: 'ShoppingCart',
      description: 'Всего заказов за период'
    },
    {
      title: 'Средний чек',
      value: '54,700 ₽',
      change: '+2.1%',
      trend: 'up',
      icon: 'DollarSign',
      description: 'Средняя стоимость заказа'
    },
    {
      title: 'Время простоя',
      value: '16%',
      change: '-2.8%',
      trend: 'down',
      icon: 'Clock',
      description: 'Техника без работы'
    },
    {
      title: 'Удовлетворенность',
      value: '4.6/5',
      change: '+0.3',
      trend: 'up',
      icon: 'Star',
      description: 'Средняя оценка клиентов'
    }
  ]

  const regionalData = [
    { region: 'Москва', orders: 180, revenue: 9200000, share: 49 },
    { region: 'Московская область', orders: 95, revenue: 4800000, share: 26 },
    { region: 'Калужская область', orders: 35, revenue: 2100000, share: 11 },
    { region: 'Тульская область', orders: 30, revenue: 1900000, share: 10 },
    { region: 'Другие регионы', orders: 20, revenue: 600000, share: 4 }
  ]

  const COLORS = ['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe']

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? 'TrendingUp' : 'TrendingDown'
  }

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600'
  }

  const formatCurrency = (value: number) => {
    return (value / 1000000).toFixed(1) + ' млн ₽'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Аналитика и отчеты</h1>
              <p className="text-gray-600 mt-2">Детальная статистика работы компании</p>
            </div>
            <div className="flex space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Неделя</SelectItem>
                  <SelectItem value="month">Месяц</SelectItem>
                  <SelectItem value="quarter">Квартал</SelectItem>
                  <SelectItem value="year">Год</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-800 hover:bg-blue-900">
                <Icon name="Download" className="mr-2 h-4 w-4" />
                Экспорт
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* KPI метрики */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ключевые показатели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpiMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name={metric.icon} size={24} className="text-blue-800" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{metric.title}</h3>
                        <p className="text-xs text-gray-600">{metric.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className={`flex items-center mt-1 ${getTrendColor(metric.trend)}`}>
                      <Icon name={getTrendIcon(metric.trend)} className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{metric.change}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="revenue">Выручка</TabsTrigger>
            <TabsTrigger value="equipment">Техника</TabsTrigger>
            <TabsTrigger value="clients">Клиенты</TabsTrigger>
            <TabsTrigger value="regions">Регионы</TabsTrigger>
          </TabsList>

          {/* Анализ выручки */}
          <TabsContent value="revenue">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Динамика выручки</CardTitle>
                  <CardDescription>
                    Изменение выручки по месяцам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis tickFormatter={(value) => formatCurrency(value)} />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
                          formatter={(value) => [formatCurrency(value as number), 'Выручка']}
                        />
                        <Bar dataKey="revenue" fill="#1e40af" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Количество заказов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="orders" stroke="#1e40af" strokeWidth={3} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Загрузка техники</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[0, 100]} />
                          <ChartTooltip 
                            content={<ChartTooltipContent />}
                            formatter={(value) => [`${value}%`, 'Загрузка']}
                          />
                          <Line type="monotone" dataKey="utilization" stroke="#059669" strokeWidth={3} />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Анализ техники */}
          <TabsContent value="equipment">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Эффективность использования техники</CardTitle>
                  <CardDescription>
                    Загрузка различных типов техники
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {equipmentUtilization.map((equipment, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{equipment.name}</h4>
                            <p className="text-sm text-gray-600">{equipment.count} единиц</p>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-blue-800">{equipment.value}%</div>
                            <div className="text-sm text-gray-600">{formatCurrency(equipment.revenue)}</div>
                          </div>
                        </div>
                        <Progress value={equipment.value} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Распределение выручки по типам техники</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{}} className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={equipmentUtilization}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="revenue"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {equipmentUtilization.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip 
                            content={<ChartTooltipContent />}
                            formatter={(value) => [formatCurrency(value as number), 'Выручка']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Техника по статусам</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span>В работе</span>
                        </div>
                        <div className="font-bold">85 единиц</div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span>Доступна</span>
                        </div>
                        <div className="font-bold">28 единиц</div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                          <span>На обслуживании</span>
                        </div>
                        <div className="font-bold">12 единиц</div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <span>В ремонте</span>
                        </div>
                        <div className="font-bold">3 единицы</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Анализ клиентов */}
          <TabsContent value="clients">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Топ клиенты</CardTitle>
                  <CardDescription>
                    Самые активные клиенты по выручке и количеству заказов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topClients.map((client, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="font-bold text-blue-800">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{client.name}</h4>
                            <p className="text-sm text-gray-600">{client.orders} заказов</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-800">{formatCurrency(client.revenue)}</div>
                          <div className={`text-sm flex items-center ${client.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            <Icon name={client.growth >= 0 ? 'TrendingUp' : 'TrendingDown'} className="h-4 w-4 mr-1" />
                            {Math.abs(client.growth)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Сегментация клиентов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-medium">Крупные клиенты</div>
                          <div className="text-sm text-gray-600">Свыше 1 млн ₽/год</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">15</div>
                          <div className="text-sm text-gray-600">65% выручки</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <div>
                          <div className="font-medium">Средние клиенты</div>
                          <div className="text-sm text-gray-600">300-1000 тыс ₽/год</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">45</div>
                          <div className="text-sm text-gray-600">25% выручки</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                        <div>
                          <div className="font-medium">Малые клиенты</div>
                          <div className="text-sm text-gray-600">До 300 тыс ₽/год</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">120</div>
                          <div className="text-sm text-gray-600">10% выручки</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Повторные заказы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-blue-800 mb-2">78%</div>
                      <div className="text-gray-600">Клиентов возвращаются</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Новые клиенты:</span>
                        <span className="font-medium">22%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Повторные клиенты:</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Средняя частота заказов:</span>
                        <span className="font-medium">3.2 раза/год</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Региональный анализ */}
          <TabsContent value="regions">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Распределение по регионам</CardTitle>
                  <CardDescription>
                    География работы компании
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {regionalData.map((region, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">{region.region}</h4>
                              <p className="text-sm text-gray-600">{region.orders} заказов</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-blue-800">{region.share}%</div>
                              <div className="text-sm text-gray-600">{formatCurrency(region.revenue)}</div>
                            </div>
                          </div>
                          <Progress value={region.share} />
                        </div>
                      ))}
                    </div>

                    <ChartContainer config={{}} className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={regionalData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="share"
                            label={({ region, share }) => `${region} ${share}%`}
                          >
                            {regionalData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Icon name="MapPin" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Зона покрытия</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-blue-800 mb-2">150 км</div>
                    <p className="text-gray-600">Радиус доставки от Москвы</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Icon name="Truck" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Доставок в месяц</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-blue-800 mb-2">280</div>
                    <p className="text-gray-600">Среднее количество</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Icon name="Clock" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle>Среднее время доставки</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-2xl font-bold text-blue-800 mb-2">3.2 ч</div>
                    <p className="text-gray-600">От заказа до объекта</p>
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

export default Analytics