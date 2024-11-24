import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Rayson Mendes .Dev",
  description: "Bem vindo ao portifólio do desenvolvedor Rayson Mendes",
};

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${jetBrainsMono.className} antialiased flex w-full h-screen justify-center items-start bg-[#1f1f1f] text-[#f8f8f8]`}
      >
        <main className="flex flex-col w-full min-h-dvh flex-grow xl:max-w-7xl">
          {children}
        </main>
      </body>
    </html>
  );
}
