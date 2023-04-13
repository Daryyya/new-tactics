import Layout from "@/components/layout/Layout";
import Case12 from "@/components/screens/Case12/Case12";
import { NextPage } from "next";

const Case12Page: NextPage = () => {
  return (
    <Layout
      title="Система отслеживания показателей оборудования"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
     <Case12/>
    </Layout>
  );
};

export default Case12Page;