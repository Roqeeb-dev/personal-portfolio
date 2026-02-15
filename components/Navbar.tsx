import { User } from "lucide-react";

export const links: { text: string; to: string }[] = [
  { text: "About", to: "about" },
  { text: "Work", to: "work" },
  { text: "Skills", to: "skills" },
  { text: "Contact", to: "contact" },
];
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-50/70 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-4">
        <h1 className="text-xl font-semibold tracking-tight">CynoDev</h1>

        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-8 font-medium text-[16px]">
            {links.map((link, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={`#${link.to}`}
                  className="text-gray-800 transition-colors duration-200 group-hover:text-black"
                >
                  {link.text}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black rounded-full transition-all duration-300 ease-in-out group-hover:w-full" />
              </div>
            ))}
          </nav>

          <button className="bg-black text-white px-5 py-2 font-medium hover:opacity-90 transition">
            Get in Touch
          </button>
        </div>

        <button className="flex md:hidden p-2 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-md">
          <User className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
