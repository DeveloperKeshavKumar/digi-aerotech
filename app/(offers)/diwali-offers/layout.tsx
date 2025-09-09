import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "../../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import dynamic from "next/dynamic";

const PixelTracker = dynamic(() => import('@/components/pixel-tracker'));

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.9,
  maximumScale: 0.9,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Digi Aerotech",
  description: "At Digi Aerotech, we build predictable, scalable, and profitable marketing systems for service businesses, eCommerce brands, and local entrepreneurs. If you're tired of low leads, poor ROI, and unreliable agencies — you've just found your team.",
  icons: {
    icon: [
      { url: "/favicon.png" },
    ],
  },
  alternates: {
    canonical: "https://www.digiaerotech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col antialiased  bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 `}
      >
        <PixelTracker />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 mt-10 p-1 lg:p-0 overflow-hidden">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
