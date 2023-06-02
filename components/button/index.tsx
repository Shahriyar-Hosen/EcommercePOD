import Link from "next/link";
import { ReactNode } from "react";
import Btn from "./Btn";

export interface IButton {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "default";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({
  children,
  href,
  type,
  variant = "default",
  onClick,
  className,
}: IButton) => {
  const mainStyle = `${
    (variant === "default" &&
      "bg-green-500 hover:from-green-500 hover:to-green-400 hover:ring-green-400") ||
    (variant === "primary" &&
      "bg-cyan-500 hover:from-cyan-500 hover:to-cyan-400 hover:ring-cyan-400") ||
    (variant === "secondary" &&
      "bg-yellow-500 hover:from-yellow-500 hover:to-yellow-400 hover:ring-yellow-400")
  }  relative rounded px-5 py-2.5 overflow-hidden group hover:bg-gradient-to-r text-white  hover:ring-offset-2 transition-all ease-out duration-100 ${className}`;

  const Animations = () => (
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-24 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 ease"></span>
  );

  if (!href) {
    return (
      <Btn onClick={onClick} type={type} className={mainStyle}>
        <Animations />
        <span className="relative">{children}</span>
      </Btn>
    );
  }

  return (
    <Link href={href || ""} className={mainStyle}>
      <Animations />
      <span className="relative">
        <Btn onClick={onClick} type={type}>
          {children}
        </Btn>
      </span>
    </Link>
  );
};

export default Button;
