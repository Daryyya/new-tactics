import Layout from "@/components/layout/Layout";
import Case8 from "@/components/screens/Case8/Case8";
import { NextPage } from "next";

const Case8Page: NextPage = () => {
  return (
    <Layout
      title="Корпоративная система защиты локальной сети: корпоративный
      DHCP - сервер"
      description="description"
      keywords={["Разработка", "Мобильные приложения"]}
    >
      <Case8 />
    </Layout>
  );
};

export default Case8Page;