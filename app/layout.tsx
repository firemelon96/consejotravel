import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "consejo Travel and Tours ",
    template: "%s | consejo Travel and Tours",
  },
  description:
    "consejo TRAVEL AND TOURS offers excursions, primarily around Palawan to local and foreign tourists from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-yellow-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
