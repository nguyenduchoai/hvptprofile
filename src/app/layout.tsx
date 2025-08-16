import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Học Viện Sắc Đẹp & Phong Thái NEOM",
    template: "%s | NEOM Academy"
  },
  description: "Học viện NEOM được sáng lập bởi Mrs. Ngân Nguyễn, chuyên đào tạo phong thái, sắc đẹp và kỹ năng mềm cho phụ nữ Việt Nam.",
  keywords: ["phong thái", "sắc đẹp", "đào tạo phụ nữ", "NEOM", "Ngân Nguyễn", "kỹ năng mềm", "tự tin", "phong cách"],
  authors: [{ name: "NEOM Academy" }],
  creator: "NEOM Academy",
  publisher: "NEOM Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'NEOM Academy',
    title: 'Học Viện Sắc Đẹp & Phong Thái NEOM',
    description: 'Khơi dậy vẻ đẹp tự tin và quyến rũ từ bên trong mỗi người phụ nữ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Học Viện Sắc Đẹp & Phong Thái NEOM',
    description: 'Khơi dậy vẻ đẹp tự tin và quyến rũ từ bên trong mỗi người phụ nữ',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
