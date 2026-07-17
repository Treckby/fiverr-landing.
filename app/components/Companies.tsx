import Section from "./Section";

const companies = [
  "NovaTech",
  "PixelFlow",
  "CloudSync",
  "Vertex",
  "BrightLabs",
  "Nexus",
];

export default function Companies() {
  return (
    <Section className="border-y border-slate-200 bg-white">

      <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
        Empresas que confían en nosotros
      </p>

      <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

        {companies.map((company) => (
          <div
            key={company}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              py-6
              text-center
              font-bold
              text-slate-500
              transition
              hover:border-blue-300
              hover:text-blue-600
            "
          >
            {company}
          </div>
        ))}

      </div>

    </Section>
  );
}