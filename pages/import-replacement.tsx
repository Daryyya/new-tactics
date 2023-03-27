import Layout from "@/components/layout/Layout";
import { ServiceTemplate } from "@/components/screens/service/ServiceTemplate";
import { NextPage } from "next";

const ImportReplacement: NextPage = () => {
  return (
    <Layout
      title="Импортозамещение"
      description="страница услуги импортозамещения"
      keywords={["Импортозамещение", "Услуга"]}
    >
      <ServiceTemplate
        title="Импортозамещение"
        advertises={[
          
        ]}
        label="Импортозамещение"
        mainContent=""
      />
    </Layout>
  );
};

export default ImportReplacement;
