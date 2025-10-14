import * as React from "react"
import type { Metadata } from "next"
import { sharedMetadata } from "@shared/libs"

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
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col py-20 items-center">
        <h3 className="text-lg text-center">NextJs Website Starter.</h3>
        <p className="text-foreground/60 mt-1 text-center">
          Tweak & launch faster
        </p>
      </div>
    </div>
  )
}
