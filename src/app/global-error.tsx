"use client";

import "@shared/styles/globals.css";
import { Button, CenteredLayout } from "@shared/components";
import { fonts } from "@shared/fonts";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html
      className={`${fonts.inter.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <CenteredLayout>
          <main className="min-h-screen py-20 tablet:py-36 tablet:pb-56">
            <h1 className="text-center font-medium tablet:text-4xl text-3xl leading-tight!">
              Something wrong!
            </h1>

            <p className="mt-7 laptop:w-10/12 text-center text-foreground leading-relaxed!">
              Opps, something happen, don't panic. This can be happen when the
              url is invalid or deleted, this mean your pages is not found.
              Start explore another one, we help you find better way to navigate
              through header and footer. “I’am your designer & developer”.
            </p>

            <div className="mt-16 flex justify-center">
              <Button onClick={() => reset()} size={"lg"} variant={"text"}>
                Try again
                <i className="fi fi-rr-spinner" />
              </Button>
            </div>
          </main>
        </CenteredLayout>
      </body>
    </html>
  );
}
