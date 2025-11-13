'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'نام باید حداقل ۲ حرف داشته باشد.',
  }),
  phone: z.string().min(10, {
    message: 'لطفا یک شماره تماس معتبر وارد کنید.',
  }),
  message: z.string().min(4, {
    message: 'پیام باید حداقل 4 حرف داشته باشد.',
  }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const { name, phone, message } = values;
    // The WhatsApp number should start with the country code without the '+' sign.
    const whatsAppNumber = "989031258005"; 
    
    const text = `سلام، من ${name} هستم.\nشماره تماس: ${phone}\n\nپیام:\n${message}`;
    const encodedText = encodeURIComponent(text);
    
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
        title: 'در حال هدایت به واتس‌اپ...',
        description: 'پنجره جدیدی برای ارسال پیام شما باز می‌شود.',
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="bg-secondary/50 py-20 md:py-32">
        <div className="container max-w-2xl mx-auto">
            <Card className="transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-bold font-headline">ارتباط با من</CardTitle>
                <CardDescription>
                برای شروع یک همکاری جدید یا مشاوره آماده‌اید؟ فرم زیر را پر کنید.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>نام</FormLabel>
                        <FormControl>
                            <Input placeholder="نام شما" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>شماره تماس</FormLabel>
                        <FormControl>
                            <Input placeholder="۰۹۱۲۳۴۵۶۷۸۹" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>پیام شما</FormLabel>
                        <FormControl>
                            <Textarea placeholder="چگونه می‌توانم به رشد کسب و کار شما کمک کنم؟" className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full transform transition-transform duration-300 hover:scale-105" disabled={isSubmitting}>
                    <Send className="ml-2 h-4 w-4" />
                    {isSubmitting ? 'در حال آماده‌سازی...' : 'ارسال پیام در واتس‌اپ'}
                    </Button>
                </form>
                </Form>
            </CardContent>
            </Card>
        </div>
    </section>
  );
}
