import * as React from "react";
import { cn } from "@/lib/utils";
export const Card=React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...p},r)=><div ref={r} className={cn("rounded-3xl border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,.06)]",className)} {...p}/>);Card.displayName="Card";
export const CardContent=React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...p},r)=><div ref={r} className={cn("p-6",className)} {...p}/>);CardContent.displayName="CardContent";
