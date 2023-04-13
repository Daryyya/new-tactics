import Layout from "@/components/layout/Layout";
import Case10 from "@/components/screens/Case10/Case10";
import { NextPage } from "next";

const Case10Page: NextPage = () => {
  return (
    <Layout
      title="Панель для Росбанка"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
     <Case10/>
    </Layout>
  );
};

export default Case10Page;