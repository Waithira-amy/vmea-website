import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VMEA",
  description: "Voice of Meru Excellence Awards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}