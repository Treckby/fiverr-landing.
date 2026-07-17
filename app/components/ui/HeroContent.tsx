
import GradientText from "@/app/components/ui/GradientText";
import Button from "@/app/components/ui/Button";

interface HeroContentProps {
  badge?: string;

  title: string;

  highlight: string;

  description: string;

  primaryButton: {
    text: string;
    href: string;
  };

  secondaryButton: {
    text: string;
    href: string;
  };

  stats: {
    value: string;
    label: string;
  }[];
}

export default function HeroContent({
  badge,

  title,

  highlight,

  description,

  primaryButton,

  secondaryButton,

  stats,
}: HeroContentProps) {
  return (
    <div>

      {badge && (
        <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </div>
      )}

      <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

        {title}

        <br />

        <GradientText>
          {highlight}
        </GradientText>

      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Button href={primaryButton.href}>
          {primaryButton.text}
        </Button>

        <Button
          href={secondaryButton.href}
          variant="secondary"
        >
          {secondaryButton.text}
        </Button>

      </div>

      <div className="mt-14 flex flex-wrap gap-10">

        {stats.map((stat) => (
          <div key={stat.label}>
            <h2 className="text-3xl font-black text-slate-900">
              {stat.value}
            </h2>

            <p className="text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}