// SEO Configuration and Meta Tags
export const SEO_CONFIG = {
  siteName: 'AKINAKE Gaming Monitors',
  siteUrl: 'https://akinake-tech.com',
  defaultDescription: 'Experience the ultimate gaming with AKINAKE premium gaming monitors. Neon-themed Terminator X, Crash Site, and Scorpion series with cutting-edge technology.',
  defaultKeywords: 'gaming monitors, ultra-wide monitors, curved monitors, high refresh rate, neon gaming, esports monitors',
  defaultImage: '/images/akinake_logo_red.png',
  twitterHandle: '@Akinaketech',
  author: 'AKINAKE Tech'
};

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function generateMetaTags(meta: MetaTags): MetaTags {
  return {
    title: `${meta.title} | ${SEO_CONFIG.siteName}`,
    description: meta.description || SEO_CONFIG.defaultDescription,
    keywords: meta.keywords || SEO_CONFIG.defaultKeywords,
    image: meta.image || SEO_CONFIG.defaultImage,
    url: meta.url || SEO_CONFIG.siteUrl,
    type: meta.type || 'website'
  };
}

export const pageMetaTags = {
  home: {
    title: 'AKINAKE Gaming Monitors',
    description: 'Experience the ultimate gaming with AKINAKE premium gaming monitors. Wisdom • Innovation • Stunning',
    keywords: 'gaming monitors, ultra-wide monitors, curved monitors, gaming peripherals, esports'
  },
  terminatorX: {
    title: 'Terminator X - 34" Curved Ultra-wide Gaming Monitor',
    description: 'The ultimate gaming experience with Terminator X 34" curved ultra-wide monitor. Available in 4K and 2K resolutions with 144Hz refresh rate.',
    keywords: 'Terminator X, 34 inch monitor, curved monitor, ultra-wide, 4K gaming, 2K gaming, 144Hz'
  },
  crashSite: {
    title: 'Crash Site - 29" Ultra-wide Gaming Monitor',
    description: 'Immersive gameplay with Crash Site 29" ultra-wide gaming monitor. Perfect for competitive gaming with 120Hz refresh rate and VA panel.',
    keywords: 'Crash Site, 29 inch monitor, ultra-wide, gaming monitor, 120Hz, VA panel'
  },
  scorpion: {
    title: 'Scorpion - 27" High-Performance Gaming Monitor',
    description: 'Precision gaming at 100Hz with Scorpion 27" high-performance gaming monitor. IPS panel with stunning visuals for competitive play.',
    keywords: 'Scorpion, 27 inch monitor, gaming monitor, 100Hz, IPS panel, esports'
  },
  support: {
    title: 'Support & Resources',
    description: 'Find drivers, documentation, and support for your AKINAKE gaming monitor. Download drivers, view manuals, and get technical support.',
    keywords: 'support, drivers, documentation, manuals, technical support, warranty'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with AKINAKE Gaming Monitors. Contact us via email, phone, WhatsApp, or through our contact form.',
    keywords: 'contact, support, email, phone, WhatsApp, customer service'
  }
};

// Structured Data for SEO
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price?: string;
  specs?: Record<string, string>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'AKINAKE'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'AKINAKE Tech'
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AKINAKE Gaming Monitors',
    url: SEO_CONFIG.siteUrl,
    logo: SEO_CONFIG.defaultImage,
    description: SEO_CONFIG.defaultDescription,
    sameAs: [
      'https://www.instagram.com/akinake.tech',
      'https://www.youtube.com/@akinaketech',
      'https://linkedin.com/company/akinake-tech',
      'https://x.com/Akinaketech'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'info@akinake-tech.com',
      telephone: '+971-4-881-9766'
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
