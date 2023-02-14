import Layout from "@/components/layout/Layout";
import { ServiceTemplate } from "@/components/screens/service/ServiceTemplate";
import { NextPage } from "next";

const Design: NextPage = () => {
  return (
    <Layout
      title="Дизайн"
      description="design page"
      keywords={["Дизайн", "Услуга"]}
    >
      <ServiceTemplate
        title="Проектирование и дизайн"
        description="По запросу клиента и информации в техническом задании наши специалисты создадут подробную инфологическую UI/UX модель для сложных корпоративных систем. С учетом всех потоков данных, переходов к страницам и формам программы. В модель также включен useflow всех сценариев и ролей системы. Создание уникального дизайна CRM и ERP - систем для вашего бизнеса по всем современным стандартам качества. Любой проект будет привлекать своей простотой и хорошим вкусом дизайнерского подхода."
        label="Дизайн"
      />
    </Layout>
  );
};

export default Design;
