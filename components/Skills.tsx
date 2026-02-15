import { techStackData } from "@/lib/data";

export default function Skills() {
  return (
    <main id="skills" className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="mb-6">
        <p className="uppercase text-gray-500 tracking-widest text-sm font-medium">
          Expertise
        </p>

        <h1 className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] tracking-tight my-3 text-slate-900">
          Skills and <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Technologies
          </span>
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-slate-700 max-w-2xl">
          Proficient in modern development tools and frameworks, with a focus on
          creating scalable, performant applications.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {techStackData.map((obj, idx) => (
          <div
            key={idx}
            className="group relative p-5 border border-slate-200 bg-white transition-all duration-300 ease-out hover:border-blue-800"
          >
            {/* Content */}
            <div className="relative">
              {/* Top */}
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold tracking-tight text-slate-900">
                  {obj.text}
                </p>

                <span className="text-sm font-semibold text-blue-800">
                  {obj.proficiency}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 rounded-full transition-all duration-700 ease-out group-hover:from-blue-900 group-hover:via-blue-800 group-hover:to-blue-950"
                  style={{ width: `${obj.proficiency}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
