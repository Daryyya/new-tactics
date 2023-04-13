import Layout from "@/components/layout/Layout";
import Case3 from "@/components/screens/Case3/Case3";
import { NextPage } from "next";

const Case3Page: NextPage = () => {
  return (
    <Layout
      title="Architechik"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case3/>
    </Layout>
  );
};

export default Case3Page;