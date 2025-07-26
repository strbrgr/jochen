import type { Metadata } from "next";
import "./globals.css";
import NavLink from "./components/nav-link";

export const metadata: Metadata = {
  title: "Jochen Stierberger",
  description: "Software Engineer",
};

const headerLinks: { href: string; title: string }[] = [
  { href: "/", title: "home" },
  { href: "/now", title: "now" },
  // { href: "/posts", title: "posts" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
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
      </body>
    </html>
  );
}
