import Layout from "@/components/layout/Layout";
import { ServiceTemplate } from "@/components/screens/service/ServiceTemplate";
import { NextPage } from "next";

const Support: NextPage = () => {
  return (
    <Layout
      title="Поддержка"
      description="страница услуги Поддержки"
      keywords={["Поддержка", "Услуга"]}
    >
      <ServiceTemplate
        title="Поддержка"
        description="Помогаем вести и расширять любой проект после его разработки и внедрения в компании клиента. 24/7 организовываем клиентскую поддержку, оперативное исправление возникающих трудностей в использовании. Также на постоянной основе разрабатываем обновления и расширения на базе готового проекта."
        label="Поддержка"
        mainContent="Готовы взять на себя ваши инновации в бизнесе на 15 и более лет совместного сотрудничества."
      />
    </Layout>
  );
};

export default Support;
