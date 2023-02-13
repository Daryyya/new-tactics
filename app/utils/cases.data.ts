export interface ICasesData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const casesData: ICasesData[] = [
  {
    id: 1,
    title: "Панель для Росбанка",
    description:
      "Разработка интерактивной панели для Торговых центров и отделений с навигацией по помещению от Росбанк Удобный интерфейс навигации для пользователей. Интерактивное описание объектов на карте и отдельно удобная функциональность сервисного обслуживания и обновления ПО. - **Увеличилось количество клиентов отделений в 1,5 раза.** - **Увеличилось количество посетителей торговых центров в 1,7 раза.**",
    imageUrl: "/case-1.png",
  },
  {
    id: 2,
    title: "Система Документооборота для минсельхоза",
    description:
      "Разработка внутренней системы конструктора документов и общего дискового пространства для их хранения и обработки. Разработка мобильного приложения для простого доступа к рабочим документам, чатам и уведомлениям. Внедрение системы контроля рабочих запросов и заполнения ведомостей. - Ускорили время заполнения одной ведомости по всем предприятиям с одного месяца до четырех дней - Сократили время обработки каждого документа в 3 раза - Сохранили средства оплаты лицензий смежных программ с 1 400 000₽ в год до 0. ",
    imageUrl: "/case-1.png",
  },
  {
    id: 3,
    title: "Finance (fullstack)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/case-1.png",
  },
  {
    id: 4,
    title: "Finance (fullstack)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/case-1.png",
  },
];
