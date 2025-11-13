import Image from 'next/image';
import { aboutData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary/50 py-20 md:py-32">
        <div className="container grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            <div className="md:col-span-1 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-6 transform transition-transform duration-500 hover:scale-105">
                    <Image
                    src={aboutData.imageUrl}
                    alt={aboutData.name}
                    fill
                    className="rounded-full object-cover shadow-lg border-4 border-card"
                    data-ai-hint={aboutData.imageHint}
                    />
                </div>
                <h2 className="text-3xl font-bold font-headline">{aboutData.name}</h2>
                <p className="text-lg text-primary">{aboutData.title}</p>
            </div>

            <div className="md:col-span-2 space-y-8">
                <Card className="transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                    <CardHeader>
                        <CardTitle>درباره من</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <div className="prose prose-lg dark:prose-invert max-w-none text-foreground space-y-4">
  {aboutData.bio.split('\n\n').map((paragraph, index) => (
    <p key={index} className="text-justify"> {/*
      <-- کلاس text-justify اینجا اضافه شد
      */}
      {paragraph}
    </p>
  ))}
</div>
                    </CardContent>
                </Card>

                <Card className="transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                    <CardHeader>
                        <CardTitle>مهارت‌های کلیدی</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-3">
                        {aboutData.skills.map((skill) => (
                            <Badge key={skill} variant="default" className="text-sm px-4 py-2 transform transition-transform duration-300 hover:scale-110">
                            {skill}
                            </Badge>
                        ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
  );
}
