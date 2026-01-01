'use client';
import Image from 'next/image';
import { clients } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function ClientsSection() {
  return (
    <section id="clients" className="bg-secondary/50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter">
            مشتریان و همکاران تجاری
          </h2>
          <p className="max-w-2xl text-muted-foreground text-sm md:text-base">
            بخشی از سازمان‌هایی که افتخار همکاری و کمک به رشد آن‌ها را داشته‌ام.
          </p>
        </div>

        {/* تغییر اصلی در این خط: تبدیل grid-cols-5 به حالت ریسپانسیو */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center gap-4 md:gap-10">
          {clients.map((client) => (
            <div
              key={client.name}
              // تغییر عرض به w-full در موبایل برای جلوگیری از تداخل
              className="group relative h-24 w-full max-w-[160px] transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  width={120} // کمی کوچک‌تر برای موبایل
                  height={48}
                  className="object-contain grayscale opacity-60 group-hover:opacity-100 p-2"
                />
              </div>
              <Card className="absolute inset-0 flex items-center justify-center p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 bg-card/90 backdrop-blur-sm border-none shadow-none">
                <CardContent className="p-0 text-center">
                  <p className="text-[10px] md:text-xs font-medium text-card-foreground px-1 leading-tight">
                    {client.collaborationDetails}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}