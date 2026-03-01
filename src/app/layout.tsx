import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/themes.css";

export const metadata: Metadata = {
  title: "Muhammad Iqbal | Full-Stack Engineer",
  description:
    "Portfolio of Muhammad Iqbal, a full-stack engineer focused on backend architecture, scalable APIs, and modern web platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
