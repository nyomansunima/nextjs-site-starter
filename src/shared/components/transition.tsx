"use client";

import type * as React from "react";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({
  children,
}: PageTransitionProps): React.ReactElement {
  return (
    <div className="fade-in-0 slide-in-from-bottom-36 animate-in duration-700">
      {children}
    </div>
  );
}
