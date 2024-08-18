import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: [], weight: ["100", "200", "300", "400", "500", "600"] });

export const metadata: Metadata = {
  icons: {
    icon: ["/favicon.ico"]
  },
  title: "Nuna Birthday 🎂",
  description: "Make by Akiza ❄️"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`flex justify-center items-center min-h-screen ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
