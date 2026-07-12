// layout.tsx
// Este arquivo define o layout raiz da aplicação Next.js.
// Ele importa fontes e estilos globais e envolve toda a aplicação em <html> e <body>.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Define a fonte Geist Sans e armazena a variável CSS resultante.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Define a fonte Geist Mono e armazena a variável CSS resultante.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata usada pelo Next.js para título e descrição da página.
// Esta é uma named export, então é importada com chaves:
//   import { metadata } from "./layout";
export const metadata: Metadata = {
  title: "Primeiro Projeto React",
  description: "Exemplo de aplicação Next.js com componentes e estado em português.",
};

// RootLayout é o componente de layout principal.
// Ele usa export default porque cada arquivo de layout normalmente exporta um único componente padrão.
// A importação deste layout seria sem chaves:
//   import RootLayout from "./layout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}