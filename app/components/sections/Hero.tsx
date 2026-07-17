"use client"
import {
  Rocket,
  Search,
  MessageCircle,
} from "lucide-react";

import Section from "@/app/components/ui/Section";
import HeroContent from "@/app/components/ui/HeroContent";
import LaptopMockup from "@/app/components/ui/LaptopMockup";
import FloatingBadge from "@/app/components/ui/FloatingBadge";
import FadeIn from "@/app/components/ui/FadeIn";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-32"
    >
      <div className="grid items-center gap-20 lg:grid-cols-2">

        <FadeIn>

          <HeroContent
            badge="🚀 Trusted by 120+ Businesses"

            title="Landing Pages que"

            highlight="convierten visitantes en clientes"

            description="Diseñamos y desarrollamos sitios rápidos, modernos y optimizados para SEO utilizando Next.js, React y Tailwind CSS."

            primaryButton={{
              text: "Iniciar Proyecto",
              href: "#contact",
            }}

            secondaryButton={{
              text: "Ver Portafolio",
              href: "#portfolio",
            }}

            stats={[
              {
                value: "120+",
                label: "Proyectos",
              },
              {
                value: "99%",
                label: "Clientes felices",
              },
              {
                value: "24h",
                label: "Tiempo de respuesta",
              },
            ]}
          />

        </FadeIn>

        <FadeIn delay={0.3}>

          <div className="relative">

            <LaptopMockup />

            <FloatingBadge
              icon={Rocket}
              title="Performance"
              value="98/100"
              className="-top-8 -left-10"
            />

            <FloatingBadge
              icon={Search}
              title="SEO Ready"
              value="Google"
              className="top-1/2 -right-12"
            />

            <FloatingBadge
              icon={MessageCircle}
              title="Soporte"
              value="24/7"
              className="-bottom-8 left-20"
            />

          </div>

        </FadeIn>

      </div>
    </Section>
  );
}