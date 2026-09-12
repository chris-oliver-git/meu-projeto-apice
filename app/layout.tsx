import type { Metadata } from "next";
import "./globals.css";
import { EzChatHint } from "@/components/ez-chat-hint";

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
      <body className="antialiased">
        {children}
        <EzChatHint />
        <script
          type="application/javascript"
          src="https://ezchatbot.ai/webchat/index.umd.js"
          className="EzWebchat"
          id="9d8959f6-bb63-4d0c-89f8-dc6432cd5d51.a160ade2-8f3b-4d05-aaad-b586bbff17a0"
        />
      </body>
    </html>
  );
}
