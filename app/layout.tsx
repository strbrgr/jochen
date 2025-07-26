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
    <html lang="en" className="overflow-y-auto">
      <body className="antialiased w-screen flex justify-center">
        <div className="w-full max-w-2xl flex flex-col min-h-screen">
          <header className="text-gray-500">
            <nav className="container mx-auto px-4 py-4">
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
