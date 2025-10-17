import { mergeClass } from "@shared/utils";
import Image from "next/image";
import type * as React from "react";

type ArticleContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function ArticleContent({
  children,
  className,
}: ArticleContentProps): React.ReactElement {
  return (
    <article className={`${mergeClass("prose", className)}`}>
      {children}
    </article>
  );
}

type ContentImageProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
};

export function ContentImage({
  src,
  alt,
  className,
}: ContentImageProps): React.ReactElement {
  return (
    <div
      className={`${mergeClass(
        "my-4 flex cursor-pointer rounded-2xl border border-border bg-surface p-1",
        className
      )}`}
    >
      <picture className="not-prose relative h-[200px] tablet:h-[400px] w-full overflow-hidden rounded-xl">
        <Image
          alt={alt}
          className="not-prose object-cover transition-all duration-300 hover:scale-105"
          fill
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={src}
        />
      </picture>
    </div>
  );
}
