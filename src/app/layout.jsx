import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Threads | Accueil",
  description: "Clone du réseau social en NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-threads-gray text-neutral-100" >{children}</body>
    </html>
  );
}
