import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/themes.css";

export const metadata: Metadata = {
  title: "Muhammad Iqbal | Full-Stack Engineer",
  description:
    "Full-stack engineer with 5+ years of experience building scalable backend systems, real-time applications, and modern web platforms across fintech, ERP, CRM, and AI-driven products.",
  keywords: [
    "Muhammad Iqbal",
    "Full Stack Engineer",
    "Laravel",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Web Developer",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Iqbal" }],
  alternates: { canonical: "https://mhmmd-iqbal.dev" },
  openGraph: {
    title: "Muhammad Iqbal — Full-Stack Engineer",
    description:
      "Full-stack engineer with 5+ years building scalable backend systems and modern web platforms.",
    url: "https://mhmmd-iqbal.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Iqbal — Full-Stack Engineer",
    description:
      "Full-stack engineer with 5+ years building scalable backend systems and modern web platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
