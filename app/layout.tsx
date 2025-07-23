import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "@/components/layout/footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.9, maximum-scale=0.9, user-scalable=no" />
      </head>
      <body
        className={`${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 mt-10 p-1 lg:p-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
