import Layout from "@/components/layout/Layout";
import { ServiceTemplate } from "@/components/screens/service/ServiceTemplate";
import { NextPage } from "next";

const Development: NextPage = () => {
  return (
    <Layout
      title="Разработка"
      description="страница услуги разработки"
      keywords={["Дизайн", "Услуга"]}
    >
      <ServiceTemplate
        title="Разработка"
        advertises={[
          "Тестирование гипотез и запуск MVP:",
          "Разработка полного цикла для стартапов и новых напровлений для корпораций",
          " MVP систем для сбора обратной связи и тестирования новых ниш рынка",
          "Разработка и запуск криптопроектов (Web3.0)",
          "Программирование пользовательских моделей и интерфейсов любой сложности с использование всех современных инструментов разработки и авторских библиотек. Мы используем наши наработки и знания для сокращения времени реализации вашего проекта, а также для быстрой его доработки под вашу аудиторию.",
          "Разработка web-платформ и порталов, мобильных приложений на платформах iOS / Android, а также CRM и ERP - систем, интеграция с Bitrix24, 1С, AmoCRM, inSales.",
          "Создаем корпоративную архитектуру на Языках программирования Node.js, Python, C#, React.js, а также мобильные приложения на Языках Swift, Kotlin/Java, ReactNative.",
        ]}
        label="Разработка"
        mainContent="Разработка полного цикла с 0, настройка Баз Данных (Postgres / MongoDB)."
      />
    </Layout>
  );
};

export default Development;
