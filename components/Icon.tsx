export default function Icon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="flex items-center justify-center w-12 h-12 border border-gray-300 bg-white hover:border-3 hover:border-gray-400 hover:bg-gray-50 transition duration-200 cursor-pointer">
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
  );
}
