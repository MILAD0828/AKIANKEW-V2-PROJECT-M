// فایل مرکزی برای اطلاعات تماس و لینک‌های شبکه‌های اجتماعی
// این فایل را با اطلاعات واقعی خود پر کنید

export interface ContactInfo {
  name: string
  url: string
  icon: string // نام فایل آیکون (بدون پسوند)
  iconFormat: 'svg' | 'png' // فرمت آیکون
  enabled: boolean // فعال/غیرفعال
}

export interface CompanyInfo {
  email: string
  phone: string
  address: string
  website?: string
}

// اطلاعات شرکت
export const companyInfo: CompanyInfo = {
  email: 'info@akinake-tech.com', // ایمیل خود را وارد کنید
  phone: '+97148819766', // شماره تلفن جدید
  address: 'DUBAI: tech street, Free zone, Dubai, United arab emarates', // آدرس جدید
  website: 'https://akinake-tech.com' // وب‌سایت خود را وارد کنید (اختیاری)
}

// لینک‌های شبکه‌های اجتماعی
export const socialLinks: ContactInfo[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/akinake.tech?utm_source=qr&igsh=MXA3ZjIxNnd0YWczZw==', // لینک اینستاگرام خود را وارد کنید
    icon: 'instagram',
    iconFormat: 'png',
    enabled: true
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@akinaketech', // لینک یوتیوب خود را وارد کنید
    icon: 'youtube',
    iconFormat: 'png',
    enabled: true
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/akinake-tech', // لینک لینکدین خود را وارد کنید
    icon: 'linkedin',
    iconFormat: 'png',
    enabled: true
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@akinaketech',
    icon: 'tik tok',
    iconFormat: 'png',
    enabled: true
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1CfgLE5JXk/',
    icon: 'facebook',
    iconFormat: 'svg',
    enabled: true
  },
  {
    name: 'X',
    url: 'https://x.com/Akinaketech?t=gLQuGvbmaUHPjoNmsEY2Mw&s=09',
    icon: 'x',
    iconFormat: 'png',
    enabled: true
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+989177379861', // شماره واتساپ خود را وارد کنید (با کد کشور)
    icon: 'whatsapp',
    iconFormat: 'png',
    enabled: true
  },
  {
    name: 'Telegram',
    url: 'https://t.me/+9kZvDldX5fUzZWNk', // لینک تلگرام خود را وارد کنید
    icon: 'telegram',
    iconFormat: 'png',
    enabled: true
  },
  {
    name: 'Email',
    url: `mailto:${companyInfo.email}`, // ایمیل از companyInfo استفاده می‌کند
    icon: 'email',
    iconFormat: 'svg',
    enabled: true
  },
  {
    name: 'Website',
    url: companyInfo.website || '#', // وب‌سایت از companyInfo استفاده می‌کند
    icon: 'website',
    iconFormat: 'png',
    enabled: true
  }
]

// فقط لینک‌های فعال را برگردان
export const getActiveSocialLinks = () => {
  return socialLinks.filter(link => link.enabled)
}

// پیدا کردن لینک بر اساس نام
export const getSocialLink = (name: string): ContactInfo | undefined => {
  return socialLinks.find(link => link.name.toLowerCase() === name.toLowerCase())
}
