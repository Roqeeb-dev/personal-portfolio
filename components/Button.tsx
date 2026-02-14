interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  icon?: React.ElementType;
}

export default function Button({ text, variant, icon: Icon }: ButtonProps) {
  const primaryStyles = "bg-gray-900 text-white hover:bg-gray-800";
  const secondaryStyles =
    "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50";

  return (
    <button
      className={`${variant === "primary" ? primaryStyles : secondaryStyles} px-6 py-3 font-medium text-base hover:scale-105 transition-all duration-200`}
    >
      <span>{text}</span>
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
}
