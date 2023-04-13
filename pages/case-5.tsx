import Layout from "@/components/layout/Layout";
import Case5 from "@/components/screens/Case5/Case5";
import { NextPage } from "next";

const Case5Page: NextPage = () => {
  return (
    <Layout
      title="CRM-системы для образовательных услуг"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
    <Case5/>
    </Layout>
  );
};

export default Case5Page;