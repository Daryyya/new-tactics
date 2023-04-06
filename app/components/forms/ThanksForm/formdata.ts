import type { IThanksParams } from './ThanksForm'

interface FormData {
    step: number;
    question: string;
    variant: string[];
    fieldName: keyof IThanksParams;
}

export const formData : FormData[] = [
    {
        step: 1,
        question: 'Что необходимо разработать?',
        variant: ['Мобильное приложение', 'CRM / EPR систему', 'Корпоративный портал', 'Корпоративный сайт', 'Интернет-магазин', 'Другое'],
        fieldName: 'product'
    },
    {
        step: 2,
        question: 'Какие участки учета хотите оптимизировать?',
        variant: ['Полная автоматизация бизнеса', 'Управление финансами', 'Документооборот', 'Складской учет. Управление закупками и продажами', 'Персонал: кадры, зарплаты, рекрутинг, аттестации и т.д.', 'CRM-системы: клиенты, маркетинг, контроль проектов и задач', 'Управление персоналом', 'Другое'],
        fieldName: 'optimization'
    },
    {
        step: 3,
        question: 'Какой у вас бюджет?',
        variant: ['100 000 рублей', '300 000 рублей', '600 000 рублей', '1 000 000 рублей'],
        fieldName: 'budget'

    },
    {
        step: 4,
        question: 'Сколько человек будет пользоваться сервисом?',
        variant: ['1-10', '10-100', '100-1000', '1000 и более'],
        fieldName: 'clientsCount'

    }
];
