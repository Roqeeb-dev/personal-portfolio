import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <main className="bg-gray-300/10 p-5">
      {/* top */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="uppercase text-gray-500 tracking-widest text-sm font-medium">
          Get in touch
        </p>
        <h1 className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] text-center tracking-tight my-3 text-slate-900">
          Let's create <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Something Amazing
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-center leading-relaxed text-slate-700 max-w-2xl">
          Have a project in mind? Let's discuss how we can work together to
          bring your ideas to life.
        </p>
      </div>

      {/* bottom */}
      <section>
        {/* left */}
        <div>
          {personalInfo.map(({ icon: Icon, title, text }) => (
            <article>
              <p>{title}</p>
              <p>{text}</p>
            </article>
          ))}
        </div>

        {/* right */}
        <form action=""></form>
      </section>
    </main>
  );
}
