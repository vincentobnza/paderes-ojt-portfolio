import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppShell } from "@/components/AppShell";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", bricolageGrotesque.className)}
    >
      <body className="h-full overflow-hidden bg-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
