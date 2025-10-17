import { PageTransition } from "@shared/components";
import type * as React from "react";

type RootTemplateProps = {
  children: React.ReactNode;
};

export default function RootTemplate({
  children,
}: RootTemplateProps): React.ReactElement {
  return <PageTransition>{children}</PageTransition>;
}
