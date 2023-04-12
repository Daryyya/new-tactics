import Layout from "@/components/layout/Layout";
import DigitalSystemBanner from "@/components/screens/digitalSystem/digitalSystemBanner";
import About from "@/components/screens/home/About/About";
import { Awards } from "@/components/screens/home/Awards/Awards";
import Cases from "@/components/screens/home/Cases/Cases";
import { Clients } from "@/components/screens/home/Clients/Clients";
import { Mission } from "@/components/screens/home/Mission/Mission";
import Purpose from "@/components/screens/home/Purpose/Purpose";
import { Reviews } from "@/components/screens/home/Reviews/Reviews";
import Services from "@/components/screens/home/Services/Services";
import { Team } from "@/components/screens/home/Team/Team";
import OtherCase from "@/components/screens/OtherCase/OtherCase";
import UniqeCase from "@/components/screens/UniqeCase/UniqeCase";
import { BuyWidget } from "@/components/widgets/BuyWidget";
import { casesData } from "@/utils/cases.data";
import React from "react";

const DigitalSystem = () => {
  let idList = [6]
  let filteredUniqeArray = casesData.filter(el => idList.includes(el.id))
  let filteredOtherArray = casesData.filter(el => !idList.includes(el.id))
  return (
    <Layout title="Разработка экосистемы" description="description">
      <DigitalSystemBanner />
      <Services />
      <UniqeCase data={filteredUniqeArray}/>
      <OtherCase data={filteredOtherArray}/>
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

export default DigitalSystem;
