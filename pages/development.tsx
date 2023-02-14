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
        description="Разработка web-платформ и порталов, мобильных приложений на платформах iOS / Android, а также CRM и ERP - систем, интеграция с Bitrix24, 1С, AmoCRM, inSales. Создаем корпоративную архитектуру на Языках программирования Node.js, Python, C#, React.js, а также мобильные приложения на Языках Swift, Kotlin/Java, ReactNative. Разработка полного цикла с 0, настройка Баз Данных (Postgres / MongoDB)."
        label="Разработка"
      />
    </Layout>
  );
};

export default Development;
