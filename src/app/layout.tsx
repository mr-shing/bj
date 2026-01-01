import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import ThreeCanvas from '@/components/home/ThreeCanvas';


export const metadata: Metadata = {
  title: 'نمونه کار بهزاد جمشیدی - متخصص توسعه کسب و کار',
  description: 'نمونه کار تعاملی برای نمایش پروژه‌ها و مهارت‌های بهزاد جمشیدی به عنوان متخصص توسعه کسب و کار.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
<body className={cn('font-body antialiased flex flex-col min-h-screen bg-background overflow-x-hidden')}>     
       <ThreeCanvas />
       <div className="relative z-10 flex flex-col min-h-screen w-full overflow-x-hidden">
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
