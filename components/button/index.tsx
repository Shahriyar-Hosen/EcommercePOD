import Link from 'next/link';

const Button = ({
  children,
  href,
  type,
  onClick,
}: {
  children: React.ReactNode,
  href?: string,
  type?: "button" | "submit" | "reset",
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}) => {

  if (!href && !onClick && !type) {
    return <span>Please define one of the props</span>;
  }

  if (href) {
    return (
      <Link href={href}>{children}</Link>
    );
  }

  return (
    <button
      {...(onClick && { onClick: onClick })}
      type={type || "button"}
      className=" h-10 rounded-lg bg-blue-500 px-4 text-white hover:bg-blue-600 transition text-sm"
    >
      {children}
    </button>
  );

}

export default Button