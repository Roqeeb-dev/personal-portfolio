interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  icon?: React.ElementType;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  variant,
  href,
  icon: Icon,
}: ButtonProps) {
  const primaryStyles = "bg-gray-900 text-white hover:bg-gray-800";
  const secondaryStyles =
    "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50";
  const withIconStyles = "flex items-center space-x-3";

  return (
    <a
      href={href}
      className={`${variant === "primary" ? primaryStyles : secondaryStyles} ${withIconStyles} px-6 py-3 font-medium text-base hover:border-gray-900 hover:shadow-lg transition-all duration-200`}
    >
      <span>{text}</span>
      {Icon && <Icon className="w-5 h-5 text-white animate-bounce" />}
    </a>
  );
}
