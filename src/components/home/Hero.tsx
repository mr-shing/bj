'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, Phone } from 'lucide-react';

const Hero = () => {

  return (
    <section
  id="home"
  className="bg-secondary/50 py-20 md:py-32 min-h-screen flex flex-col justify-center items-center">
  <div className="flex flex-col items-center gap-8 animate-fade-in-up -translate-x-[2%]">
    <div className="flex flex-col items-center text-center gap-6 mb-16"> 
     
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
       <img 
        src="/images/logo.png"
        alt="logo"
      />
      <h1 className=" text-4xl md:text-5xl font-bold tracking-tighter">
        نگرش عمیق‌تر برای رسیدن به اهدافی بزرگ‌تر
      </h1>
    </div>
    <p className="text-lg text-muted-foreground max-w-lg mx-auto">
من بهزاد جمشیدی هستم، یک متخصص توسعه دیجیتال کسب و کار که در ایجاد استراتژی‌های رشد، همکاری‌های استراتژیک و بهینه‌سازی استراتژی فروش برای موفقیت پایدار    </p>
    <div className="flex gap-4 flex-wrap justify-center">
      <Button asChild size="lg" className="transform transition-transform duration-300 hover:scale-105">
        <Link href="#projects">
          مشاهده پروژه‌ها <Briefcase className="mr-2 h-5 w-5" />
        </Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="transform transition-transform duration-300 hover:scale-105">
        <Link href="#contact">
          تماس با من <Phone className="mr-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>
</section>
  );
};

export default Hero;
