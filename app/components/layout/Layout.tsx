import { IMeta } from "@/types/meta.interface";
import { FC, PropsWithChildren } from "react";
import { Footer } from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import Meta from "./Meta";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Meta title={title} description={description} keywords={keywords} />
      <div className="wrapper">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
