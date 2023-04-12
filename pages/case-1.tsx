import Layout from "@/components/layout/Layout";
import Case1 from "../app/components/screens/Case1/Case1";
import { NextPage } from "next";

const Mobile: NextPage = () => {
  return (
    <Layout
      title="Союз Ветеранов Спорта"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case1 />
    </Layout>
  );
};

export default Mobile;
