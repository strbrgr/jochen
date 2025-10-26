import type { Metadata } from "next";
import "./globals.css";
import NavLink from "./components/nav-link";
import { Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Jochen Stierberger",
  description: "Software Engineer",
};

const headerLinks: { href: string; title: string }[] = [
  { href: "/", title: "Home" },
  { href: "/posts", title: "Posts" },
  { href: "/now", title: "Now" },
];

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="antialiased min-h-screen flex justify-center overflow-y-scroll px-4">
        <div className="max-w-2xl flex flex-col min-h-screen w-full">
          <header className="mt-4">
            <nav className="mx-auto">
              <ul className="flex justify-end space-x-6">
                {headerLinks.map((l) => (
                  <li key={l.href}>
                    <NavLink href={l.href}>{l.title}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          <main className="flex-1 mt-24">{children}</main>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
