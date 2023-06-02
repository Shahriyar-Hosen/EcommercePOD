import { IButton } from ".";

const Btn = ({ children, className, onClick, type }: IButton) => (
  <button
    {...(onClick && { onClick: onClick })}
    type={type || "button"}
    className={className}
  >
    {children}
  </button>
);

export default Btn;
