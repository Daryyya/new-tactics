import Layout from "@/components/layout/Layout";
import About from "@/components/screens/home/About/About";
import { Awards } from "@/components/screens/home/Awards/Awards";
import Benefits from "@/components/screens/home/Benefits/Benefits";
import Cases from "@/components/screens/home/Cases/Cases";
import { Clients } from "@/components/screens/home/Clients/Clients";
import Hero from "@/components/screens/home/Hero/Hero";
import { Mission } from "@/components/screens/home/Mission/Mission";
import Purpose from "@/components/screens/home/Purpose/Purpose";
import { Reviews } from "@/components/screens/home/Reviews/Reviews";
import Services from "@/components/screens/home/Services/Services";
import { Team } from "@/components/screens/home/Team/Team";
import { BuyWidget } from "@/components/widgets/BuyWidget";

export default function Home() {
  return (
    <>
      <Layout title="Program tactics" description="Корпоративные системы на заказ" keywords={["Корпоративные системы", "Разработка", "Дизайн", "Поддержка"]}>
        <Hero />
        <Benefits />
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
    </>
  );
}
