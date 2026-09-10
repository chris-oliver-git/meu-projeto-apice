import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Ápice Saúde | Cuidado completo e integrado", template: "%s | Ápice Saúde" },
  description: "Consultas, exames, terapias, procedimentos e assistências em saúde com tecnologia, acolhimento e especialistas.",
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
