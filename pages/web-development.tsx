import Layout from "@/components/layout/Layout";
import { ServiceTemplate } from "@/components/screens/service/ServiceTemplate";
import { NextPage } from "next";

const WebDevelopment: NextPage = () => {
  return (
    <Layout
      title="Разработка"
      description="страница услуги разработки"
      keywords={["Разработка", "Услуга"]}
    >
      <ServiceTemplate
        title="Разработка"
        advertises={[
          
        ]}
        label="Разработка"
        mainContent=""
      />
    </Layout>
  );
};

export default WebDevelopment;