import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Texto */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Diseño Web Profesional
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
              Creamos Landing Pages que convierten visitantes en clientes.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Diseños modernos, rápidos, optimizados para SEO y completamente
              adaptables a cualquier dispositivo. Tu negocio merece una página
              que inspire confianza desde el primer segundo.
            </p>

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

          </div>

          {/* Dashboard */}

          <div className="relative">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

              <div className="mb-6 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>

              <div className="space-y-6">

                <div className="h-5 w-40 rounded bg-slate-200"></div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-blue-100 p-6">
                    <div className="h-3 w-16 rounded bg-blue-300"></div>

                    <div className="mt-6 h-8 w-20 rounded bg-blue-500"></div>
                  </div>

                  <div className="rounded-2xl bg-slate-100 p-6">
                    <div className="h-3 w-16 rounded bg-slate-300"></div>

                    <div className="mt-6 h-8 w-20 rounded bg-slate-500"></div>
                  </div>

                </div>

                <div className="rounded-2xl bg-slate-100 p-6">

                  <div className="mb-6 h-3 w-24 rounded bg-slate-300"></div>

                  <div className="flex h-32 items-end gap-3">

                    <div className="h-12 w-8 rounded bg-blue-300"></div>

                    <div className="h-24 w-8 rounded bg-blue-400"></div>

                    <div className="h-20 w-8 rounded bg-blue-500"></div>

                    <div className="h-28 w-8 rounded bg-blue-600"></div>

                    <div className="h-16 w-8 rounded bg-blue-700"></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}