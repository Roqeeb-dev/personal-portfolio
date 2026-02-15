export default function Icon({
  icon: Icon,
  href,
}: {
  icon: React.ElementType;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-12 h-12 border border-gray-300 bg-transparent hover:border-3 hover:border-gray-600 hover:bg-gray-50 transition duration-200 cursor-pointer"
      target="__blank"
    >
      <Icon className="w-6 h-6 text-gray-700" />
    </a>
  );
}
