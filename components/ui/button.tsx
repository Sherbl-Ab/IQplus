import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-amber-400 text-slate-950 shadow-[0_12px_35px_rgba(251,191,36,.22)] hover:-translate-y-0.5 hover:bg-amber-300",
      outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
      secondary: "border border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-amber-300",
      ghost: "text-slate-700 hover:bg-slate-100",
    },
    size: { default: "h-11 px-5", lg: "h-13 px-7 text-base", icon: "h-10 w-10" },
  }, defaultVariants: { variant: "default", size: "default" }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, asChild=false, ...props}, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({variant,size,className}))} ref={ref} {...props}/>;
});
Button.displayName="Button";
export { buttonVariants };
