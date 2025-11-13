import Link from 'next/link';
import { Instagram, Send, Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Custom SVG component for WhatsApp as it's not in lucide-react
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>WhatsApp</title>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.77.46 3.45 1.28 4.94L2 22l5.25-1.38c1.44.75 3.06 1.18 4.79 1.18h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2M12.04 20.15c-1.52 0-2.97-.4-4.26-1.15l-.3-.18-3.17.83.85-3.1-.2-.31c-.82-1.33-1.26-2.85-1.26-4.44 0-4.46 3.63-8.09 8.1-8.09 2.18 0 4.22.85 5.73 2.36s2.36 3.55 2.36 5.73c0 4.47-3.64 8.1-8.1 8.1m4.44-5.9c-.24-.12-1.45-.71-1.68-.8s-.39-.12-.56.12c-.17.24-.63.8-.78.96-.15.17-.3.19-.54.06-.24-.12-1.02-.38-1.94-1.2s-1.4-1.55-1.61-1.82c-.21-.27-.02-.42.11-.54.11-.11.24-.28.37-.42.12-.14.17-.24.25-.4.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.3.23.24-1.01.99-1.01 2.41 0 1.42 1.03 2.8 1.17 3 .14.2 2.02 3.08 4.9 4.3.69.29 1.23.47 1.66.6 1.11.36.71.3.83-.07.13-.38.56-1.55.76-1.84.2-.28.32-.23.48-.15.17.08.38.12.9.36.24.1.39.15.45.27.06.12.06.68-.02.8z" />
    </svg>
  );

export function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/behzad.jam' },
    { name: 'Telegram', icon: Send, href: 'https://t.me/+989031258005' },
    { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/989031258005' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/behzad-jam/' },
  ];

  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} بهزاد جمشیدی. تمامی حقوق محفوظ است.
            </p>
             <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-6 gap-y-2 mt-4 text-sm text-muted-foreground">
                <a href="mailto:behzad.nemo@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    behzad.nemo@gmail.com
                </a>
                <a href="tel:09031258005" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    09031258005
                </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
