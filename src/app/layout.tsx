import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduAdmin",
  description: "Portal designed to perform for college for pharmacy collegs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
