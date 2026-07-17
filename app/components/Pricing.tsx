import { Check } from "lucide-react";

import Card from "./Card";
import Button from "./Button";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const plans = [
  {
    name: "Starter",
    price: "$149",
    features: [
      "Landing Page",
      "Diseño Responsive",
      "SEO Básico",
      "Entrega en 5 días",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$299",
    features: [
      "Landing Premium",
      "Animaciones",
      "SEO Avanzado",
      "Formulario",
      "Deploy",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "$499",
    features: [
      "Todo lo anterior",
      "Blog",
      "Analytics",
      "Optimización",
      "Soporte",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <Section id="pricing">
      <SectionTitle
        subtitle="PRECIOS"
        title="Planes para cada tipo de negocio"
        description="Escoge el plan que mejor se adapte a tus necesidades."
      />

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.featured
                ? "border-blue-600 ring-2 ring-blue-600"
                : ""
            }
          >
            {plan.featured && (
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                Más Popular
              </span>
            )}

            <h3 className="mt-6 text-3xl font-bold">
              {plan.name}
            </h3>

            <p className="mt-4 text-5xl font-black text-blue-600">
              {plan.price}
            </p>

            <div className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={18}
                    className="text-green-600"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="#contact">
                Elegir Plan
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}