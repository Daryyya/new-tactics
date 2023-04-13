import Layout from "@/components/layout/Layout";
import Case13 from "@/components/screens/Case13/Case13";
import { NextPage } from "next";

const Case13Page: NextPage = () => {
  return (
    <Layout
      title="Система дезинфекции на производстве"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
  <Case13/>
    </Layout>
  );
};

export default Case13Page;