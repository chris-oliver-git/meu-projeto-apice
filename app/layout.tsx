import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Ápice Saúde | Cuidado completo e integrado", template: "%s | Ápice Saúde" },
  description: "Consultas, exames, terapias, procedimentos e assistências em saúde com tecnologia, acolhimento e especialistas.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/apice/mark.png",
    shortcut: "/apice/mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
