import Layout from "@/components/layout/Layout";
import CorporateSystemBanner from "@/components/screens/corporateSystem/CorporateSystemBanner";
import About from "@/components/screens/home/About/About";
import { Awards } from "@/components/screens/home/Awards/Awards";
import Cases from "@/components/screens/home/Cases/Cases";
import { Clients } from "@/components/screens/home/Clients/Clients";
import { Mission } from "@/components/screens/home/Mission/Mission";
import Purpose from "@/components/screens/home/Purpose/Purpose";
import { Reviews } from "@/components/screens/home/Reviews/Reviews";
import Services from "@/components/screens/home/Services/Services";
import { Team } from "@/components/screens/home/Team/Team";
import { BuyWidget } from "@/components/widgets/BuyWidget";
import React from "react";

const CorporateSystem = () => {
  return (
    <Layout title="Корпоративные системы" description="description">
      <CorporateSystemBanner/>
      <Services />
      <Cases />
      <About />
      <Purpose />
      <Mission />
      <Team />
      <Awards />
      <Clients />
      <Reviews />
      <BuyWidget />
    </Layout>
  );
};

export default CorporateSystem;