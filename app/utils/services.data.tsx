import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';
import development from '@/assets/images/services/development.svg';
import web from '@/assets/images/services/web.svg';
import importReplace from '@/assets/images/services/importReplace.svg';
import optimization from '@/assets/images/services/optimization.svg';
import design from '@/assets/images/services/design.svg';
import support from '@/assets/images/services/support.svg';

interface ServicesItem {
  title: string | ReactNode;
  description: string[];
  href: string;
  image: StaticImageData;
}

export const servicesItems: ServicesItem[] = [
  {
    title: 'Разработка комплексных систем',
    description: ['-Корпоративные системы', '-Порталы и web-сервисы', '-Цифровые платформы и экосистемы', '-ERP, CRM, BPM - системы', '-Разработка алгоритмов на основе ИИ'],
    href: '/development',
    image: development,
  },
  {
    title: 'Веб-разработка',
    description: ['-Мобильные приложения', '-Интернет-магазины', '-Корпоративные сайты'],
    href: '/web-development',
    image: web,
  },
  {
    title: (<>Импорто<wbr/>замещение</>),
    description: ['-Разработка отечественных аналогов ERP, CRM, BI, CMS-систем', '-Корпоративных хранилищ данных', '-Других систем'],
    href: '/import-replacement',
    image: importReplace,
  },
  {
    title: 'Оптимизация и защита',
    description: ['-Создание сис-м защиты инф-и', '-Безопасность персональных данных', '-Безопасность ЦОД'],
    href: '/optimization',
    image: optimization,
  },
  {
    title: 'Проектирование и дизайн',
    description: ['-UI/UX дизайн сайтов и приложений', '-Прототип внешнего вида будущей системы', '-Построение пользовательской логики и отрисовка всех сценариев системы'],
    href: '/design',
    image: design,
  },
  {
    title: 'Сопровождение',
    description: ['-Развитие технологически сложных систем', '-Настройка и администрирование серверов', '-Техническая поддержка', '-Хостинг'],
    href: '/support',
    image: support,
  }
];
