'use client';
import Image from 'next/image';
import { clients } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function ClientsSection() {
  return (
    <section id="clients" className="bg-secondary/50 py-20 md:py-32">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          مشتریان و همکاران تجاری
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          بخشی از سازمان‌هایی که افتخار همکاری و کمک به رشد آن‌ها را داشته‌ام.
        </p>
      </div>

<div className="grid grid-cols-5 items-center justify-items-center gap-x-10 gap-y-6">
          {clients.map((client) => (
          <div
            key={client.name}
            className="group relative h-24 w-48 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
                <Image
                src={client.logoUrl}
                alt={`${client.name} logo`}
                width={160}
                height={64}
                className="object-contain grayscale opacity-60 group-hover:opacity-100"
                data-ai-hint={client.imageHint}
                />
            </div>
            <Card className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-0 text-center">
                <p className="text-sm font-medium text-card-foreground">
                  {client.collaborationDetails}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
