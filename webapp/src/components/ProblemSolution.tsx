import Image from "next/image";

interface ProblemSolutionProps {
  problems: string[];
  solution: string;
  description: string;
  image: string;
  primaryColor: string;
}

export default function ProblemSolution({
  problems,
  solution,
  description,
  image,
  primaryColor,
}: ProblemSolutionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-600 mb-4 leading-tight">
                {problems.map((problem, index) => (
                  <span key={index}>
                    {problem}.{index < problems.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <h3 className="text-xl font-bold" style={{ color: primaryColor }}>
                {solution}
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={image}
              alt="App Colaborador"
              width={300}
              height={380}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
