import { aboutData } from "@/lib/data";

export default function AboutCard() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-2 gap-4">
      {aboutData.map((obj) => {
        const Icon = obj.icon;
        return (
          <div className="border border-gray-600 hover:border-3 hover:border-gray-800 p-3">
            <Icon />
            <p>{obj.title}</p>
            <p>{obj.text}</p>
          </div>
        );
      })}
    </section>
  );
}
