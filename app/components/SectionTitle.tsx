interface SectionTitleProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <span className="font-semibold uppercase tracking-[0.3em] text-blue-600">
        {subtitle}
      </span>

      <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>

    </div>
  );
}