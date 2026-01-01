'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      // استفاده از overflow-hidden در اینجا حیاتی است
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-secondary/50 py-20 overflow-hidden"
    >
      {/* Container برای Blobs - این بخش را از محتوا جدا کردیم تا اسکرول ایجاد نکند */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* محتوای اصلی */}
      <div className="container relative z-10 flex flex-col items-center gap-12 px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4">
             <img 
               src="/images/logo.png"
               alt="logo"
               className="object-contain w-full h-full drop-shadow-2xl"
             />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight max-w-3xl">
            نگرش عمیق‌تر برای رسیدن به اهدافی بزرگ‌تر
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            من بهزاد جمشیدی هستم، یک متخصص توسعه دیجیتال کسب و کار که در ایجاد استراتژی‌های رشد، همکاری‌های استراتژیک و بهینه‌سازی فروش برای موفقیت پایدار فعالیت می‌کنم.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Button asChild size="lg" className="h-12 px-8 text-lg shadow-lg hover:shadow-primary/20 transition-all">
            <Link href="#projects" className="flex items-center gap-2">
              مشاهده پروژه‌ها <Briefcase className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 text-lg border-2">
            <Link href="#contact" className="flex items-center gap-2">
              تماس با من <Phone className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;