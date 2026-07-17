import {
  Globe,
  ShoppingCart,
  Smartphone,
  ArrowRight,
} from "lucide-react";

import Card from "./Card";
import Button from "./Button";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "Landing pages modernas diseñadas para captar clientes y aumentar las conversiones.",
  },
  {
    icon: ShoppingCart,
    title: "Business Websites",
    description:
      "Sitios web profesionales para empresas que buscan fortalecer su presencia digital.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Páginas optimizadas para computadoras, tablets y dispositivos móviles.",
  },
];

export default function Services() {
  return (
    <Section className="bg-slate-50" id="services">
      <SectionTitle
        subtitle="SERVICIOS"
        title="Todo lo que necesitas para destacar en Internet"
        description="Creamos experiencias web modernas utilizando las mejores tecnologías para que tu negocio genere confianza y consiga más clientes."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.title}>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <Icon
                  size={32}
                  className="text-blue-600"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8">
                <Button href="#contact">
                  Saber más
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}