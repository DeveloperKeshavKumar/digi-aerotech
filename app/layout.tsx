import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/layout/footer";
import MegaMenuExample from "@/components/layout/mega-navbar";
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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          <MegaMenuExample />
          <main className="flex-1 mt-10 p-1 lg:p-0 overflow-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
