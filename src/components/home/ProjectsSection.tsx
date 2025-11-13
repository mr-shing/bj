import Image from 'next/image';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50 py-20 md:py-32">
      <div className="flex flex-col items-center text-center gap-4 mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
            پروژه‌های برجسته
        </h2>
        <p className="max-w-2xl text-muted-foreground">
            نگاهی به برخی از موفقیت‌هایی که در مسیر رشد کسب‌وکارها به دست آورده‌am.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {projects.map((project) => (
          <Card key={project.slug} className="group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl flex flex-col">
            <div className="relative h-56 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
