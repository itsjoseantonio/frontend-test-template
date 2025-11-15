import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

const badgeVariants = {
  default: "text-inherit bg-[#F5F5F4]",
};

type Variant = keyof typeof badgeVariants;

const Badge = ({ children, className, variant = "default" }: BadgeProps) => {
  return (
    <span
      className={clsx(
        `py-1.5 px-3 text-base/tight rounded-md`,
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
