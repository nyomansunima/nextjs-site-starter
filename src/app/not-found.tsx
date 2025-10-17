import { Button } from "@shared/components";
import type { Metadata } from "next";
import Link from "next/link";
import type * as React from "react";

export const metadata: Metadata = {
  title: "Not Found",
  description: " Opps, good luck. You’re missing the pages",
};

export default function NotFound(): React.ReactElement {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center py-20">
        <h1 className="text-center font-medium tablet:text-4xl text-3xl leading-tight!">
          Not found
        </h1>

        <p className="mt-7 laptop:w-10/12 text-center text-foreground leading-relaxed!">
          You’re searching something wrong. This can be happen when the url is
          invalid or deleted, this mean your pages is not found. Start explore
          another one, we help you find better way to navigate through header
          and footer. “I’am your designer & developer”.
        </p>

        <div className="mt-16">
          <Button
            asChild
            className="transition-all hover:scale-95"
            size={"lg"}
            variant={"text"}
          >
            <Link href={"/"}>
              Bring me back <i className="fi fi-rr-paper-plane" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
