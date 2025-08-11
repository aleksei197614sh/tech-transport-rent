import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import Icon from '@/components/ui/icon'

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [bookingData, setBookingData] = useState({
    equipment: '',
    startDate: '',
    duration: '1',
    durationType: 'days',
    clientType: 'individual',
    name: '',
    phone: '',
    email: '',
    company: '',
    inn: '',
    address: '',
    deliveryAddress: '',
    needDelivery: false,
    needOperator: false,
    needInsurance: false,
    comments: ''
  })

  const equipment = [
    { id: 'excavator-jcb', name: 'Экскаватор JCB JS200', price: 4500, available: true },
    { id: 'truck-kamaz', name: 'Самосвал КАМАЗ-65115', price: 3200, available: true },
    { id: 'crane-ks', name: 'Автокран КС-45719', price: 5800, available: false },
    { id: 'bulldozer-cat', name: 'Бульдозер CAT D6T', price: 4200, available: true }
  ]

  const steps = [
    { number: 1, title: 'Выбор техники', description: 'Выберите нужную технику и период' },
    { number: 2, title: 'Контактные данные', description: 'Укажите ваши данные' },
    { number: 3, title: 'Дополнительные услуги', description: 'Выберите дополнительные опции' },
    { number: 4, title: 'Подтверждение', description: 'Проверьте данные заказа' }
  ]

  const calculateTotal = () => {
    const selectedEquipment = equipment.find(eq => eq.id === bookingData.equipment)
    if (!selectedEquipment) return 0

    let basePrice = selectedEquipment.price * parseInt(bookingData.duration)
    let additionalCosts = 0

    if (bookingData.needDelivery) additionalCosts += 2500
    if (bookingData.needOperator) additionalCosts += 1800 * parseInt(bookingData.duration)
    if (bookingData.needInsurance) additionalCosts += 500 * parseInt(bookingData.duration)

    return basePrice + additionalCosts
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
  }

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Бронирование техники</h1>
          <p className="text-gray-600 mt-2">Оформите заявку на аренду спецтехники</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Прогресс */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.number 
                    ? 'bg-blue-800 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <Icon name="Check" className="h-5 w-5" />
                  ) : (
                    step.number
                  )}
                </div>
                {step.number < steps.length && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step.number ? 'bg-blue-800' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="mb-2" />
          <div className="text-center">
            <h3 className="font-semibold">{steps[currentStep - 1].title}</h3>
            <p className="text-sm text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основная форма */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="pt-6">
                {/* Шаг 1: Выбор техники */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium">Выберите технику</Label>
                      <div className="grid grid-cols-1 gap-4 mt-3">
                        {equipment.map((item) => (
                          <div
                            key={item.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              bookingData.equipment === item.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            } ${!item.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => item.available && updateBookingData('equipment', item.id)}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-gray-600">{item.price.toLocaleString()} ₽/сутки</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge variant={item.available ? "default" : "secondary"}>
                                  {item.available ? 'Доступна' : 'Занята'}
                                </Badge>
                                {bookingData.equipment === item.id && (
                                  <Icon name="Check" className="h-5 w-5 text-blue-500" />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="duration">Количество</Label>
                        <Input
                          id="duration"
                          type="number"
                          min="1"
                          value={bookingData.duration}
                          onChange={(e) => updateBookingData('duration', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="durationType">Период</Label>
                        <Select value={bookingData.durationType} onValueChange={(value) => updateBookingData('durationType', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hours">Часы</SelectItem>
                            <SelectItem value="days">Дни</SelectItem>
                            <SelectItem value="weeks">Недели</SelectItem>
                            <SelectItem value="months">Месяцы</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Дата начала аренды</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border mt-3"
                      />
                    </div>
                  </div>
                )}

                {/* Шаг 2: Контактные данные */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium">Тип клиента</Label>
                      <Select value={bookingData.clientType} onValueChange={(value) => updateBookingData('clientType', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Физическое лицо</SelectItem>
                          <SelectItem value="legal">Юридическое лицо</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          value={bookingData.name}
                          onChange={(e) => updateBookingData('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => updateBookingData('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => updateBookingData('email', e.target.value)}
                        required
                      />
                    </div>

                    {bookingData.clientType === 'legal' && (
                      <>
                        <div>
                          <Label htmlFor="company">Название компании *</Label>
                          <Input
                            id="company"
                            value={bookingData.company}
                            onChange={(e) => updateBookingData('company', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="inn">ИНН *</Label>
                          <Input
                            id="inn"
                            value={bookingData.inn}
                            onChange={(e) => updateBookingData('inn', e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <Label htmlFor="address">Адрес</Label>
                      <Textarea
                        id="address"
                        value={bookingData.address}
                        onChange={(e) => updateBookingData('address', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {/* Шаг 3: Дополнительные услуги */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="delivery"
                          checked={bookingData.needDelivery}
                          onCheckedChange={(checked) => updateBookingData('needDelivery', checked)}
                        />
                        <Label htmlFor="delivery" className="flex-1">
                          Доставка техники на объект (+2500 ₽)
                        </Label>
                      </div>

                      {bookingData.needDelivery && (
                        <div className="ml-6">
                          <Label htmlFor="deliveryAddress">Адрес доставки</Label>
                          <Textarea
                            id="deliveryAddress"
                            value={bookingData.deliveryAddress}
                            onChange={(e) => updateBookingData('deliveryAddress', e.target.value)}
                            rows={2}
                            placeholder="Укажите точный адрес доставки"
                          />
                        </div>
                      )}

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="operator"
                          checked={bookingData.needOperator}
                          onCheckedChange={(checked) => updateBookingData('needOperator', checked)}
                        />
                        <Label htmlFor="operator" className="flex-1">
                          Услуги оператора (+1800 ₽/смена)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="insurance"
                          checked={bookingData.needInsurance}
                          onCheckedChange={(checked) => updateBookingData('needInsurance', checked)}
                        />
                        <Label htmlFor="insurance" className="flex-1">
                          Страхование техники (+500 ₽/сутки)
                        </Label>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="comments">Комментарии к заказу</Label>
                      <Textarea
                        id="comments"
                        value={bookingData.comments}
                        onChange={(e) => updateBookingData('comments', e.target.value)}
                        rows={4}
                        placeholder="Дополнительные пожелания или требования..."
                      />
                    </div>
                  </div>
                )}

                {/* Шаг 4: Подтверждение */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Проверьте данные заказа</h3>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Техника</h4>
                          <p>{equipment.find(eq => eq.id === bookingData.equipment)?.name}</p>
                          <p className="text-sm text-gray-600">
                            {bookingData.duration} {bookingData.durationType === 'days' ? 'дн.' : 'ч.'}
                          </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Контактные данные</h4>
                          <p>{bookingData.name}</p>
                          <p>{bookingData.phone}</p>
                          <p>{bookingData.email}</p>
                        </div>

                        {(bookingData.needDelivery || bookingData.needOperator || bookingData.needInsurance) && (
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-medium mb-2">Дополнительные услуги</h4>
                            {bookingData.needDelivery && <p>• Доставка техники</p>}
                            {bookingData.needOperator && <p>• Услуги оператора</p>}
                            {bookingData.needInsurance && <p>• Страхование техники</p>}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Info" className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium text-blue-800">Важная информация</h4>
                      </div>
                      <p className="text-sm text-blue-700">
                        После отправки заявки наш менеджер свяжется с вами в течение 30 минут 
                        для подтверждения деталей и оформления договора.
                      </p>
                    </div>
                  </div>
                )}

                {/* Навигация */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                  >
                    <Icon name="ChevronLeft" className="mr-2 h-4 w-4" />
                    Назад
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNext}
                      disabled={
                        (currentStep === 1 && !bookingData.equipment) ||
                        (currentStep === 2 && (!bookingData.name || !bookingData.phone || !bookingData.email))
                      }
                      className="bg-blue-800 hover:bg-blue-900"
                    >
                      Далее
                      <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Icon name="Check" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Сводка заказа */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Сводка заказа</CardTitle>
              </CardHeader>
              <CardContent>
                {bookingData.equipment ? (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">
                        {equipment.find(eq => eq.id === bookingData.equipment)?.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {bookingData.duration} {bookingData.durationType === 'days' ? 'дн.' : 'ч.'}
                      </p>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Базовая стоимость:</span>
                        <span>{(equipment.find(eq => eq.id === bookingData.equipment)?.price || 0 * parseInt(bookingData.duration)).toLocaleString()} ₽</span>
                      </div>
                      
                      {bookingData.needDelivery && (
                        <div className="flex justify-between text-sm">
                          <span>Доставка:</span>
                          <span>2 500 ₽</span>
                        </div>
                      )}
                      
                      {bookingData.needOperator && (
                        <div className="flex justify-between text-sm">
                          <span>Оператор:</span>
                          <span>{(1800 * parseInt(bookingData.duration)).toLocaleString()} ₽</span>
                        </div>
                      )}
                      
                      {bookingData.needInsurance && (
                        <div className="flex justify-between text-sm">
                          <span>Страхование:</span>
                          <span>{(500 * parseInt(bookingData.duration)).toLocaleString()} ₽</span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="flex justify-between font-bold text-lg">
                      <span>Итого:</span>
                      <span className="text-blue-800">{calculateTotal().toLocaleString()} ₽</span>
                    </div>

                    <div className="text-xs text-gray-500">
                      * Окончательная стоимость может быть скорректирована после консультации с менеджером
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    Выберите технику для расчета стоимости
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking