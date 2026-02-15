import { ReasonsData } from "@/lib/data";

export default function WhyChooseMe() {
  return (
    <main className="max-w-[1400px] mx-auto py-16 px-6 border-t border-slate-200">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ReasonsData.map(({ title, text }, idx) => (
          <div
            key={idx}
            className="group relative p-8 border border-slate-300 bg-white transition-all duration-300 ease-out hover:border-slate-900 hover:bg-slate-50/50 hover:-translate-y-1 hover:shadow-sm"
          >
            {/* Accent line */}
            <div className="w-10 h-[4px] bg-gradient-to-r from-slate-800 to-slate-900 rounded-full transition-all duration-300 ease-out group-hover:w-16" />

            <h1 className="text-xl font-semibold tracking-tight text-slate-900 my-4">
              {title}
            </h1>

            <p className="text-slate-700 text-lg leading-relaxed">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
