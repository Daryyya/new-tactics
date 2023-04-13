import Layout from "@/components/layout/Layout";
import Case4 from "@/components/screens/Case4/Case4";
import { NextPage } from "next";

const Case4Page: NextPage = () => {
  return (
    <Layout
      title="Спорт-Отели"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case4 />
    </Layout>
  );
};

export default Case4Page;