import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AosInit } from "@/components/AosInit";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "RFCOM SAS - Internet por Fibra Óptica en Restrepo",
  description: "Disfruta de alta velocidad, IPTV y soporte de primer nivel en Restrepo con RFCOM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} min-h-screen relative overflow-x-hidden`}>
        <AosInit />
        {/* Background glow effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />
        </div>

        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
