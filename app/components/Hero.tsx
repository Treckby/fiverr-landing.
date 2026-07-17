import Badge from "./Badge";
import Button from "./Button";
import Container from "./Container";
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  Globe,
  Smartphone,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl"></div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Badge>
  🚀 Diseño Web Profesional
</Badge>
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
              Landing Pages que convierten visitas en clientes.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Diseñamos páginas modernas, rápidas y optimizadas para SEO,
              enfocadas en aumentar tus ventas y transmitir confianza desde el
              primer segundo.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact">
                Solicitar Cotización
              </Button>

              <Button
                href="#services"
                variant="secondary"
              >
                Ver Servicios
              </Button>
            </div>

            {/* Features */}

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" size={20} />

                <span className="text-slate-600">
                  Diseño totalmente personalizado
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" size={20} />

                <span className="text-slate-600">
                  Optimizada para Google (SEO)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-blue-600" size={20} />

                <span className="text-slate-600">
                  Compatible con móviles y tablets
                </span>
              </div>

            </div>

            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-12">

              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  +120
                </h2>

                <p className="text-slate-500">
                  Proyectos
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  99%
                </h2>

                <p className="text-slate-500">
                  Clientes felices
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-slate-900">
                  24h
                </h2>

                <p className="text-slate-500">
                  Soporte
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

              {/* Browser */}

              <div className="mb-8 flex items-center gap-2">

                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>

              </div>

              {/* Header */}

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">
                    Visitors
                  </p>

                  <h2 className="mt-1 text-4xl font-black text-slate-900">
                    8,420
                  </h2>
                </div>

                <div className="rounded-xl bg-blue-100 p-3">
                  <BarChart3
                    className="text-blue-600"
                    size={30}
                  />
                </div>

              </div>

              {/* Graph */}

              <div className="mt-10 flex h-40 items-end gap-4">

                <div className="h-16 w-full rounded bg-blue-200"></div>
                <div className="h-28 w-full rounded bg-blue-300"></div>
                <div className="h-20 w-full rounded bg-blue-400"></div>
                <div className="h-36 w-full rounded bg-blue-500"></div>
                <div className="h-24 w-full rounded bg-blue-600"></div>
                <div className="h-32 w-full rounded bg-blue-700"></div>

              </div>

              {/* Cards */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-slate-100 p-5">

                  <Globe
                    className="text-blue-600"
                    size={26}
                  />

                  <h3 className="mt-4 font-bold">
                    SEO Ready
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Optimizada para buscadores.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-5">

                  <Smartphone
                    className="text-blue-600"
                    size={26}
                  />

                  <h3 className="mt-4 font-bold">
                    Responsive
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Perfecta para cualquier dispositivo.
                  </p>

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-white p-6 shadow-xl lg:block">

              <p className="text-sm text-slate-500">
                Conversion Rate
              </p>

              <h3 className="mt-2 text-3xl font-black text-slate-900">
                +42%
              </h3>

              <div className="mt-3 flex items-center gap-2 text-green-600">

                <ArrowRight size={18} />

                <span className="font-semibold">
                  Crecimiento mensual
                </span>

              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}