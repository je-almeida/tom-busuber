interface Metric {
  number: string;
  label: string;
}

interface StatsProps {
  title: string;
  metrics: Metric[];
  primaryColor: string;
  $bgColor?: string;
  active?: boolean;
}

export default function Stats({
  metrics,
  primaryColor,
  $bgColor,
  active,
}: StatsProps) {
  if (active === false) return null;
  return (
    <section
      className="py-16"
      style={{
        background: $bgColor,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Title */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              <span style={{ color: primaryColor }}>Resultados</span> que
              <br />
              falam por si
            </h2>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-3xl p-6 text-center shadow-sm"
                >
                  <div
                    className="text-3xl lg:text-4xl font-bold mb-2"
                    style={{ color: primaryColor }}
                  >
                    {metric.number}
                  </div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
