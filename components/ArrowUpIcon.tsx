import { ArrowUp } from "lucide-react";

export default function ArrowUpIcon() {
  return (
    <a
      href="#"
      className="fixed bottom-5 right-5 bg-gray-900 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-50"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 sm:w-6 h-5 sm:h-6" />
    </a>
  );
}
