"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
export const Dialog=DialogPrimitive.Root;export const DialogTrigger=DialogPrimitive.Trigger;
export const DialogContent=React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>,React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>>(({className,children,...props},ref)=><DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md data-[state=open]:animate-in"/><DialogPrimitive.Content ref={ref} className={cn("fixed left-1/2 top-1/2 z-[110] max-h-[92vh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl",className)} {...props}>{children}<DialogPrimitive.Close className="absolute left-4 top-4 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200" aria-label="إغلاق"><X className="h-5 w-5"/></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>);DialogContent.displayName="DialogContent";
export const DialogTitle=DialogPrimitive.Title;export const DialogDescription=DialogPrimitive.Description;
