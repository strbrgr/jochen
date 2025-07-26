"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ${
        isActive
          ? "text-[var(--link-color-hover)]"
          : "text-[var(--link-color-default)] hover:text-[var(--link-color-hover)]"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
