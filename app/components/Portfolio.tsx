import {
  ArrowUpRight,
  Monitor,
} from "lucide-react";

import Card from "./Card";
import Button from "./Button";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "Restaurant Landing",
    category: "Restaurante",
    image: "/portfolio/restaurant.jpg",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Fitness Landing",
    category: "Gimnasio",
    image: "/portfolio/gym.jpg",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Real Estate",
    category: "Inmobiliaria",
    image: "/portfolio/realestate.jpg",
    technologies: ["Next.js", "TypeScript"],
  },
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="bg-slate-50">
      <SectionTitle
        subtitle="PORTAFOLIO"
        title="Proyectos recientes"
        description="Cada landing está diseñada para convertir visitantes en clientes mediante un diseño moderno y un rendimiento excepcional."
      />

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-slate-200">
              <Monitor
                className="text-slate-500"
                size={56}
              />
            </div>

            <span className="mt-6 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {project.category}
            </span>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              {project.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button href="#">
                Ver Demo
                <ArrowUpRight
                  size={18}
                  className="ml-2"
                />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}