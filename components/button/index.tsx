import Link from "next/link";
import { ReactNode } from "react";

const Button = ({
  children,
  href,
  type,
  variant,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "default";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  if (!href && !onClick && !type && !variant) {
    return <span>Please define one of the props</span>;
  }

  const mainStyle = `${
    (variant === "default" &&
      "bg-green-500 hover:from-green-500 hover:to-green-400 hover:ring-green-400") ||
    (variant === "primary" &&
      "bg-cyan-500 hover:from-cyan-500 hover:to-cyan-400 hover:ring-cyan-400") ||
    (variant === "secondary" &&
      "bg-yellow-500 hover:from-yellow-500 hover:to-yellow-400 hover:ring-yellow-400")
  }  relative rounded px-5 py-2.5 overflow-hidden group hover:bg-gradient-to-r text-white  hover:ring-offset-2 transition-all ease-out duration-100`;

  const spanStyle =
    "absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-24 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease";

  if (!href) {
    return (
      <button
        {...(onClick && { onClick: onClick })}
        type={type || "button"}
        className={mainStyle}
      >
        <span className={spanStyle}></span>
        <span className="relative">{children}</span>
      </button>
    );
  }

  return (
    <Link href={href || ""} className={mainStyle}>
      <span className={spanStyle}></span>
      <span className="relative">
        <button {...(onClick && { onClick: onClick })} type={type || "button"}>
          {children}
        </button>
      </span>
    </Link>
  );
};

export default Button;
