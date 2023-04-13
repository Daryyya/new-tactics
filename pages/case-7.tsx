import Layout from "@/components/layout/Layout";
import Case7 from "@/components/screens/Case7/Case7";
import { NextPage } from "next";

const Case7Page: NextPage = () => {
  return (
    <Layout
      title="Корпоративная система для оптимизации логистики"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case7/>
    </Layout>
  );
};

export default Case7Page;