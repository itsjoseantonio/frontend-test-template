import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  onClick: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  testId?: string;
}

const buttonVariants = {
  default: "text-white bg-[#585660]",
  outline: "text-[#585660] bg-white",
};

type Variant = keyof typeof buttonVariants;

const Button = ({
  children,
  onClick,
  variant = "default",
  className,
  testId,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `border rounded-lg py-3 px-2 w-full cursor-pointer`,
        buttonVariants[variant],
        className
      )}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

export default Button;
