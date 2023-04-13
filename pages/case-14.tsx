import Layout from "@/components/layout/Layout";
import Case14 from "@/components/screens/Case14/Case14";
import { NextPage } from "next";

const Case14Page: NextPage = () => {
  return (
    <Layout
      title="Система для логческих контроллеров кранов и тяжелого
      оборудования"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case14 />
    </Layout>
  );
};

export default Case14Page;
