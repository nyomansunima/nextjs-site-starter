import type { Metadata } from "next";
import type * as React from "react";
import "@shared/styles/globals.css";
import { CenteredLayout, Footer, Header } from "@shared/components";
import { fonts } from "@shared/fonts";
import { config, sharedMetadata } from "@shared/libs";
import { ThemeProvider } from "@shared/providers";

export const metadata: Metadata = {
  title: "Nyoman Sunima",
  description:
    "Focused on crafting digital products, website, web app, mobile app to help business.",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Nyoman Sunima",
    description:
      "Focused on crafting digital products, website, web app, mobile app to help business.",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Nyoman Sunima",
    description:
      "Focused on crafting digital products, website, web app, mobile app to help business.",
  },
  applicationName: "Nyoman Sunima",
  keywords: [
    "Product Designer",
    "UI UX Designer",
    "Web Designer",
    "Shopify Developer",
    "Web Developer",
    "Webflow Expert",
    "Framer Expert",
    "Squarespace",
    "Wix Developer",
    "Fullstack",
    "Mobile Developer",
    "Indie Hacker",
  ],
  authors: [{ name: "Nyoman Sunima" }],
  publisher: "Nyoman Sunima",
  creator: "Nyoman Sunima",
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html
      className={`${fonts.inter.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem={true}
        >
          <CenteredLayout>
            <Header />
            <main className="min-h-screen pb-28 tablet:pb-56">{children}</main>
            <Footer />
          </CenteredLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
