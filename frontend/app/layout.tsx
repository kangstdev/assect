import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가계부",
  description: "개인 수입과 지출을 관리하는 가계부 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}