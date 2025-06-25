import React from "react";
import { badgeVariants, cn } from "@/lib/utils";
import { badgeVariants, cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants.variant;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants.variant[variant], className)} {...props} />
  );
}

export { Badge };
