"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { mergeClass } from "@shared/utils";
import type * as React from "react";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = ({
  ref,
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<
    typeof TooltipPrimitive.Content
  > | null>;
}) => (
  <TooltipPrimitive.Content
    className={mergeClass(
      "z-50 overflow-hidden rounded-xl border border-border bg-surface px-3 py-1.5 text-foreground/70 text-xs",
      className
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
