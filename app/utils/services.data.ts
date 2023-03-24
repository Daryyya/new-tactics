interface ServicesItem {
  title: string;
  description: string[];
}

export const servicesItems: ServicesItem[] = [
  {
    title: 'Разработка комплексных систем:',
    description: ['-Корпоративные системы', '-Порталы и web-сервисы', '-Цифровые платформы и экосистемы', '-ERP, CRM, BPM - системы', '-Разработка алгоритмов на основе ИИ'],
  },
  {
    title: 'Веб-разработка:',
    description: ['-Мобильные приложения', '-Интернет-магазины', '-Корпоративные сайты'],
  },
  {
    title: 'Импортозамещение:',
    description: ['-Разработка отечественных аналогов ERP, CRM, BI, CMS-систем', '-Корпоративных хранилищ данных', '-Других систем'],
  },
  {
    title: 'Оптимизация и защита:',
    description: ['-Создание сис-м защиты инф-и', '-Безопасность персональных данных', '-Безопасность ЦОД'],
  },
  {
    title: 'Проектирование и дизайн',
    description: ['-UI/UX дизайн сайтов и приложений', '-Прототип внешнего вида будущей системы', '-Построение пользовательской логики и отрисовка всех сценариев системы'],
  },
  {
    title: 'Сопровождение:',
    description: ['-Развитие технологически сложных систем', '-Настройка и администрирование серверов', '-Техническая поддержка', '-Хостинг'],
  }
];
