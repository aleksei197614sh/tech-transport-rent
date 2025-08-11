import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from '@/components/ui/icon'

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const documentCategories = [
    {
      id: 'contracts',
      title: 'Договоры и соглашения',
      description: 'Типовые формы договоров аренды',
      icon: 'FileText',
      documents: [
        {
          name: 'Договор аренды спецтехники (физ. лица)',
          description: 'Стандартный договор для физических лиц',
          format: 'PDF',
          size: '245 KB',
          updated: '2024-01-15'
        },
        {
          name: 'Договор аренды спецтехники (юр. лица)',
          description: 'Договор для юридических лиц и ИП',
          format: 'PDF',
          size: '267 KB',
          updated: '2024-01-15'
        },
        {
          name: 'Дополнительное соглашение',
          description: 'Форма для изменения условий договора',
          format: 'PDF',
          size: '156 KB',
          updated: '2024-01-10'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Техническая документация',
      description: 'Руководства по эксплуатации техники',
      icon: 'Settings',
      documents: [
        {
          name: 'Руководство по эксплуатации экскаваторов JCB',
          description: 'Полное руководство по работе с экскаваторами JCB',
          format: 'PDF',
          size: '2.1 MB',
          updated: '2024-01-20'
        },
        {
          name: 'Инструкция по ТБ для операторов кранов',
          description: 'Правила безопасной работы с подъемными кранами',
          format: 'PDF',
          size: '890 KB',
          updated: '2024-01-18'
        },
        {
          name: 'Чек-лист ежедневного осмотра техники',
          description: 'Контрольные точки для проверки перед работой',
          format: 'PDF',
          size: '234 KB',
          updated: '2024-01-12'
        }
      ]
    },
    {
      id: 'legal',
      title: 'Правовые документы',
      description: 'Лицензии, сертификаты, разрешения',
      icon: 'Shield',
      documents: [
        {
          name: 'Лицензия на аренду спецтехники',
          description: 'Действующая лицензия компании',
          format: 'PDF',
          size: '345 KB',
          updated: '2023-06-15'
        },
        {
          name: 'Сертификат ISO 9001:2015',
          description: 'Сертификат системы менеджмента качества',
          format: 'PDF',
          size: '567 KB',
          updated: '2023-12-01'
        },
        {
          name: 'Страховой полис ОСАГО',
          description: 'Полис обязательного страхования',
          format: 'PDF',
          size: '189 KB',
          updated: '2024-01-01'
        }
      ]
    },
    {
      id: 'forms',
      title: 'Формы и заявления',
      description: 'Бланки для оформления услуг',
      icon: 'FileCheck',
      documents: [
        {
          name: 'Заявка на аренду техники',
          description: 'Форма для подачи заявки на аренду',
          format: 'PDF',
          size: '123 KB',
          updated: '2024-01-10'
        },
        {
          name: 'Акт приема-передачи техники',
          description: 'Документ для фиксации состояния техники',
          format: 'PDF',
          size: '178 KB',
          updated: '2024-01-10'
        },
        {
          name: 'Заявление на возврат техники',
          description: 'Форма для оформления возврата',
          format: 'PDF',
          size: '145 KB',
          updated: '2024-01-08'
        }
      ]
    }
  ]

  const procedures = [
    {
      title: 'Процедура аренды техники',
      steps: [
        'Подача заявки через сайт или по телефону',
        'Согласование условий и стоимости',
        'Подписание договора аренды',
        'Внесение предоплаты или залога',
        'Доставка техники на объект',
        'Подписание акта приема-передачи',
        'Начало работ'
      ]
    },
    {
      title: 'Процедура возврата техники',
      steps: [
        'Уведомление о завершении работ',
        'Подготовка техники к возврату',
        'Осмотр технического состояния',
        'Подписание акта возврата',
        'Вывоз техники со строительной площадки',
        'Окончательный расчет',
        'Возврат залога (при наличии)'
      ]
    },
    {
      title: 'Процедура урегулирования споров',
      steps: [
        'Подача письменной претензии',
        'Рассмотрение претензии в течение 10 дней',
        'Попытка досудебного урегулирования',
        'Привлечение независимых экспертов',
        'Заключение мирового соглашения',
        'Обращение в арбитражный суд (при необходимости)'
      ]
    }
  ]

  const faqSections = [
    {
      title: 'Документооборот',
      questions: [
        {
          question: 'Какие документы нужны для аренды техники?',
          answer: 'Для физических лиц: паспорт, водительские права. Для юридических лиц: учредительные документы, доверенность представителя, карточка предприятия.'
        },
        {
          question: 'Как оформляется договор аренды?',
          answer: 'Договор составляется в двух экземплярах, подписывается обеими сторонами. Один экземпляр остается у арендатора, второй - у арендодателя.'
        },
        {
          question: 'Можно ли изменить условия договора?',
          answer: 'Да, изменения вносятся путем подписания дополнительного соглашения к основному договору.'
        }
      ]
    },
    {
      title: 'Оплата и расчеты',
      questions: [
        {
          question: 'Какие способы оплаты доступны?',
          answer: 'Наличный расчет, банковский перевод, оплата картой. Для юридических лиц - безналичный расчет по счету.'
        },
        {
          question: 'Когда производится оплата?',
          answer: 'Возможна предоплата, оплата по факту или частичная предоплата с доплатой по завершении работ.'
        },
        {
          question: 'Предоставляются ли документы для бухгалтерии?',
          answer: 'Да, мы предоставляем все необходимые документы: счета, акты выполненных работ, счета-фактуры.'
        }
      ]
    }
  ]

  const filteredDocuments = documentCategories.map(category => ({
    ...category,
    documents: category.documents.filter(doc =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.documents.length > 0)

  const getFileIcon = (format: string) => {
    switch (format.toLowerCase()) {
      case 'pdf': return 'FileText'
      case 'doc':
      case 'docx': return 'FileText'
      case 'xls':
      case 'xlsx': return 'FileSpreadsheet'
      default: return 'File'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Документация</h1>
          <p className="text-gray-600 mt-2">Все необходимые документы и инструкции</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Поиск документов</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Поиск по названию..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Быстрые ссылки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Icon name="Download" className="mr-2 h-4 w-4" />
                    Все документы (ZIP)
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Icon name="FileText" className="mr-2 h-4 w-4" />
                    Типовой договор
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Icon name="Shield" className="mr-2 h-4 w-4" />
                    Лицензии
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Icon name="HelpCircle" className="mr-2 h-4 w-4" />
                    FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="documents">Документы</TabsTrigger>
                <TabsTrigger value="procedures">Процедуры</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>

              {/* Документы */}
              <TabsContent value="documents">
                <div className="space-y-8">
                  {(searchTerm ? filteredDocuments : documentCategories).map((category) => (
                    <Card key={category.id}>
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Icon name={category.icon} size={24} className="text-blue-800" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{category.title}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {category.documents.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                              <div className="flex items-center space-x-3">
                                <Icon name={getFileIcon(doc.format)} className="h-8 w-8 text-blue-600" />
                                <div>
                                  <h4 className="font-medium">{doc.name}</h4>
                                  <p className="text-sm text-gray-600">{doc.description}</p>
                                  <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                                    <span>{doc.format}</span>
                                    <span>{doc.size}</span>
                                    <span>Обновлен: {new Date(doc.updated).toLocaleDateString()}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Icon name="Eye" className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Icon name="Download" className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {searchTerm && filteredDocuments.length === 0 && (
                    <div className="text-center py-12">
                      <Icon name="Search" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Документы не найдены</h3>
                      <p className="text-gray-600">Попробуйте изменить поисковый запрос</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Процедуры */}
              <TabsContent value="procedures">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Основные процедуры</h2>
                    <p className="text-gray-600">Пошаговые инструкции для работы с нашей компанией</p>
                  </div>

                  {procedures.map((procedure, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl">{procedure.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {procedure.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start space-x-4">
                              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-bold text-blue-800">{stepIndex + 1}</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-700">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-3">
                        <Icon name="Info" className="h-6 w-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-blue-800">Нужна помощь?</h4>
                          <p className="text-blue-700 text-sm">
                            Если у вас возникли вопросы по процедурам, обратитесь к нашим специалистам
                          </p>
                          <div className="mt-3">
                            <Button className="bg-blue-800 hover:bg-blue-900">
                              <Icon name="Phone" className="mr-2 h-4 w-4" />
                              Связаться с консультантом
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* FAQ */}
              <TabsContent value="faq">
                <Card>
                  <CardHeader>
                    <CardTitle>Часто задаваемые вопросы</CardTitle>
                    <CardDescription>
                      Ответы на популярные вопросы о документообороте
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {faqSections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-8">
                        <h3 className="text-lg font-semibold mb-4 text-blue-800">
                          {section.title}
                        </h3>
                        <Accordion type="single" collapsible className="w-full">
                          {section.questions.map((item, itemIndex) => (
                            <AccordionItem key={itemIndex} value={`item-${sectionIndex}-${itemIndex}`}>
                              <AccordionTrigger className="text-left">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent>
                                <p className="text-gray-600">{item.answer}</p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation