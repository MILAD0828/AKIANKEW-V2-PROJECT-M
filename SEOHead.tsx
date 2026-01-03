import { useEffect } from 'react';
import { MetaTags, generateMetaTags } from '@/lib/seo';

interface SEOHeadProps {
  meta: MetaTags;
  structuredData?: Record<string, unknown>;
}

export default function SEOHead({ meta, structuredData }: SEOHeadProps) {
  const tags = generateMetaTags(meta);

  useEffect(() => {
    // Update document title
    document.title = tags.title;

    // Update meta tags
    updateMetaTag('description', tags.description);
    updateMetaTag('keywords', tags.keywords || '');
    updateMetaTag('og:title', tags.title);
    updateMetaTag('og:description', tags.description);
    updateMetaTag('og:image', tags.image || '');
    updateMetaTag('og:url', tags.url || '');
    updateMetaTag('og:type', tags.type || 'website');
    updateMetaTag('twitter:title', tags.title);
    updateMetaTag('twitter:description', tags.description);
    updateMetaTag('twitter:image', tags.image || '');

    // Update canonical URL
    updateCanonicalUrl(tags.url || '');

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [tags, structuredData]);

  return null;
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      element.setAttribute('property', name);
    } else {
      element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', url);
}

function addStructuredData(data: Record<string, unknown>) {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}
