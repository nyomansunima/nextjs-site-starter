import { sharedMetadata } from "@shared/libs";
import type { Metadata } from "next";
import type * as React from "react";

export const metadata: Metadata = {
  title: "YOUR_TITLE_META_TAG",
  description: "YOUR_DESCRIPTION_META_TAG",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "YOUR_TITLE_META_TAG",
    description: "YOUR_DESCRIPTION_META_TAG",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "YOUR_TITLE_META_TAG",
    description: "YOUR_DESCRIPTION_META_TAG",
  },
};

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center py-20">
        <h3 className="text-center text-lg">NextJs Website Starter.</h3>
        <p className="mt-1 text-center text-foreground/60">
          Tweak & launch faster
        </p>
      </div>
    </div>
  );
}
