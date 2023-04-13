import Layout from "@/components/layout/Layout";
import Case6 from "@/components/screens/Case6/Case6";
import { NextPage } from "next";

const Case1Page: NextPage = () => {
  return (
    <Layout
      title="Экосистема корпоративного обслуживания и документооборота"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case6/>
    </Layout>
  );
};

export default Case1Page;