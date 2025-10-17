"use client";
import Link from "next/link";
import type * as React from "react";

export function Brand(): React.ReactElement {
  return (
    <div className="relative z-10 flex gap-3 text-sm">
      <Link
        className="hover:-translate-x-1 transition-all duration-300"
        href={"/"}
      >
        <span className="font-medium">yourbrand.domain</span>
      </Link>
    </div>
  );
}

export function Actions(): React.ReactElement {
  return <div className="relative z-10 flex gap-2" />;
}

export function Header(): React.ReactElement {
  return (
    <header className="flex h-24 tablet:h-36 items-center justify-between">
      <Brand />
      <Actions />
    </header>
  );
}
