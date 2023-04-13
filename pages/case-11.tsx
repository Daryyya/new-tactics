import Layout from "@/components/layout/Layout";
import Case11 from "@/components/screens/Case11/Case11";
import { NextPage } from "next";

const Case11Page: NextPage = () => {
  return (
    <Layout
      title="Система документооборота для Минсельхоза"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
     <Case11/>
    </Layout>
  );
};

export default Case11Page;