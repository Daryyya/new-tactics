import Layout from "@/components/layout/Layout";
import Case2 from "@/components/screens/Case2/Case2";
import { NextPage } from "next";

const Case2Page: NextPage = () => {
  return (
    <Layout
      title="Boomerang App"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case2/>
    </Layout>
  );
};

export default Case2Page;