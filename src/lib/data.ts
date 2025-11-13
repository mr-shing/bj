import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return image || { imageUrl: '', imageHint: '' };
};

export const projects = [
  {
    slug: 'digital-market-strategy',
    title: 'تدوین استراتژی جامع دیجیتال',
    description: 'تحلیل عمیق بازار آنلاین و تدوین استراتژی دیجیتال یکپارچه برای یک شرکت SaaS که منجر به افزایش ۳۰٪ در ترافیک ارگانیک و رشد ۲۰٪ در نرخ تبدیل شد.',
    technologies: ['تحلیل بازار آنلاین', 'استراتژی محتوا', 'SEO و SEM', 'بازاریابی دیجیتال'],
    ...findImage('project-market-expansion'),
  },
  {
    slug: 'software-platform-development',
    title: 'توسعه و طراحی پلتفرم نرم‌افزاری',
    description: 'راهبری پروژه طراحی و توسعه یک پلتفرم نرم‌افزاری سفارشی برای مدیریت ارتباط با مشتریان (CRM) که تجربه کاربری را بهبود بخشید و فرآیندهای داخلی را بهینه‌سازی کرد.',
    technologies: ['طراحی نرم‌افزار', 'مدیریت پروژه', 'طراحی UX/UI', 'توسعه فضای دیجیتال'],
    ...findImage('project-software-development'),
  },
  {
    slug: 'digital-ecosystem-expansion',
    title: 'گسترش اکوسیستم دیجیتال',
    description: 'ایجاد و مدیریت برنامه همکاری با استارتاپ‌های فناوری برای گسترش اکوسیستم دیجیتال یک شرکت بزرگ، که به ایجاد کانال‌های درآمدی جدید و افزایش نوآوری منجر شد.',
    technologies: ['همکاری‌های استراتژیک', 'توسعه اکوسیستم', 'API Integration', 'توسعه و طراحی نرم افزار'],
    ...findImage('project-sales-optimization'),
  },
];

export const aboutData = {
  name: 'بهزاد جمشیدی',
  title: 'متخصص توسعه کسب و کار دیجیتال',
  bio: `سلام! من بهزاد جمشیدی هستم، یک متخصص توسعه کسب و کار با تمرکز بر دنیای دیجیتال. با سابقه‌ای درخشان در شناسایی فرصت‌ها، ایجاد همکاری‌های استراتژیک و پیشبرد رشد درآمد در فضای آنلاین، اشتیاق من در ایجاد ارتباطات معنادار و تبدیل آن‌ها به نتایج تجاری ملموس نهفته است.

رویکرد من مبتنی بر داده‌ها و تحلیل عمیق بازار دیجیتال است. من معتقدم که درک دقیق نیازهای مشتری و چشم‌انداز رقابتی آنلاین، کلید تدوین استراتژی‌هایی است که نه تنها کارآمد، بلکه پایدار نیز هستند. من در مذاکره، مدیریت روابط و رهبری تیم‌ها برای دستیابی به اهداف مشترک در پروژه‌های دیجیتال مهارت دارم.

من  همیشه به دنبال راه‌هایی برای نوآوری و ایجاد ارزش افزوده دیجیتال هستم. خارج از محیط کار، از مطالعه در مورد روندهای جدید کسب‌وکار و فناوری‌های نوظهور لذت می‌برم.`,
  skills: ['توسعه استراتژی دیجیتال', 'تحلیل بازار آنلاین', 'بازاریابی دیجیتال', 'توسعه فضای دیجیتال', 'توسعه و طراحی نرم افزار', 'توسعه فروش'],
  ...findImage('about-profile'),
};


export const navLinks = [
  { href: '#home', label: 'خانه' },
  { href: '#about', label: 'درباره من' },
  { href: '#clients', label: 'پروژه‌ها' },
  { href: '#contact', label: 'تماس' },
];

export const clients = [
    { name: 'Pars Online', logoUrl: '/images/logo-parsonline.png', imageHint: 'parsonline logo', collaborationDetails: 'کارشناس فنی شرکت پارس آنلاین از 1393 الی 1395 ' },
    { name: 'Asr Ertebat', logoUrl: '/images/asr.png', imageHint: 'asr ertebat logo', collaborationDetails: 'مدیر فروش بخش آی تی فروشگاه عصر ارتباط از 1935 تا 1398 ' },
    { name: 'Mobit', logoUrl: '/images/mobit.png', imageHint: 'Mobit logo', collaborationDetails: 'مدیر مارکتینگ فروشگاه اینترنتی مبیت 1399 الی 1401 ' },
    { name: 'ZoodEx', logoUrl: '/images/zoodex.png', imageHint: 'zoodex logo', collaborationDetails: 'مشاور و اجرای کمپین مشترک زودکس و مبیت 1400 ' },
    { name: 'paybuy', logoUrl: '/images/paybuy.png', imageHint: 'paybuy logo', collaborationDetails: 'مدیر عاملی شرکت پی بای از سال1401 تا 1403 ' },
    { name: 'Kermanol', logoUrl: '/images/kermanol.png', imageHint: 'kermanol logo', collaborationDetails: 'مشاوره و توسعه کسب و کار' },
    { name: 'Atropi', logoUrl: '/images/atr.png', imageHint: 'atropi logo', collaborationDetails: 'مشاوره و اجرای کمپین تبلیغاتی' },
    { name: 'fownix Part', logoUrl: '/images/fownix.png', imageHint: 'fownix part logo', collaborationDetails: 'طراحی هویت بصری، طراحی سایت' },
    { name: 'Ziba Faraz', logoUrl: '/images/zibafaraz.png', imageHint: 'ziba faraz logo', collaborationDetails: 'سرپرست واحد فناوری دیجیتال' },
    { name: 'ghestit', logoUrl: '/images/ghestit.png', imageHint: 'ghestit logo', collaborationDetails: 'صاحب امتیاز' },

]
