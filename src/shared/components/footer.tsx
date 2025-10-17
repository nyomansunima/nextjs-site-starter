import { mergeClass } from "@shared/utils";
import Link from "next/link";
import type * as React from "react";

const footerMenus = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
  { label: "FAQs", href: "/faqs" },
];

type MenuItemProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

export function MenuItem({
  href,
  children,
  className,
}: MenuItemProps): React.ReactElement {
  return (
    <li
      className={`${mergeClass(
        "hover:-translate-y-1 flex items-center justify-center rounded-xl bg-transparent p-1 text-sm transition-all duration-300 hover:text-foreground/60",
        className
      )}`}
    >
      <Link className="h-full w-full" href={href}>
        {children}
      </Link>
    </li>
  );
}

export function FooterMenuList(): React.ReactElement {
  return (
    <div className="flex">
      <ul className="flex items-center gap-2">
        {footerMenus.map((item, index) => (
          <MenuItem href={item.href} key={index}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  );
}

export function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col" id="footer">
      <div className="mt-8 flex tablet:flex-row flex-col tablet:items-center tablet:justify-between py-7">
        <span className="cursor-pointer text-sm">
          Copyright &copy; 2024 - Alright Reserved
        </span>
        <FooterMenuList />
      </div>
    </footer>
  );
}
