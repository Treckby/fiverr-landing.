import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

import Card from "./Card";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    description:
      "Analizamos tu negocio, tus objetivos y el tipo de clientes que deseas atraer.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Diseño",
    description:
      "Creamos una propuesta visual moderna enfocada en transmitir confianza y generar conversiones.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Desarrollamos una landing rápida, responsive y optimizada con Next.js y Tailwind CSS.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Publicamos tu sitio y realizamos las últimas optimizaciones para que esté listo para recibir clientes.",
  },
];

export default function Process() {
  return (
    <Section id="process" className="bg-white">
      <SectionTitle
        subtitle="NUESTRO PROCESO"
        title="Así convertimos tu idea en una página profesional"
        description="Seguimos un proceso claro para garantizar resultados de calidad en cada proyecto."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <Card key={step.number} className="relative">
              <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                {step.number}
              </span>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <Icon
                  size={30}
                  className="text-blue-600"
                />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}