import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
});

export const metadata: Metadata = {
  title: "Bhanuprasad Vepakayala - Portfolio",
  description: "Frontend Developer Portfolio - HTML, CSS, JavaScript, React.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${orbitron.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
