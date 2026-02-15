export default function Pill() {
  return (
    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-800 tracking-wide shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <p className="text-gray-700">Available for Work</p>
    </div>
  );
}
