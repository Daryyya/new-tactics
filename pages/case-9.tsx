import Layout from "@/components/layout/Layout";
import Case9 from "@/components/screens/Case9/Case9";
import { NextPage } from "next";

const Case9Page: NextPage = () => {
  return (
    <Layout
      title="Финансовая сисема инвестиционного банка"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case9/>
    </Layout>
  );
};

export default Case9Page;