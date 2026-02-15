import AboutCard from "./AboutCard";

export default function About() {
  return (
    <main
      id="about"
      className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 py-20 max-w-[1400px] mx-auto"
    >
      <section className="w-full lg:w-1/2">
        <p className="uppercase text-gray-500 tracking-widest text-sm font-medium">
          About Me
        </p>

        <h1 className="text-[clamp(2.5rem,7vw,4rem)] leading-[1.05] tracking-tight my-3">
          Building the <br />
          <span className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 bg-clip-text text-transparent font-bold">
            Future of Web
          </span>
        </h1>

        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-gray-600">
            I'm a passionate developer who loves crafting elegant solutions to
            complex problems. With expertise in modern web technologies, I
            create digital experiences that are both visually stunning and
            technically robust.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            My approach combines clean code architecture, thoughtful design, and
            a deep understanding of user needs to deliver products that make a
            real impact.
          </p>
        </div>

        <a
          href="https://docs.google.com/document/d/1qw-Fb9qKjWaB8te4UOf7j9NjGyMuresa/edit?usp=drive_link&ouid=116454153911136080919&rtpof=true&sd=true"
          download
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-gray-300 text-gray-900 transition-all duration-300 ease-out hover:border-gray-900 hover:shadow-lg hover:-translate-y-0.5"
        >
          Download resume
        </a>
      </section>

      <section className="w-full lg:w-1/2">
        <AboutCard />
      </section>
    </main>
  );
}
