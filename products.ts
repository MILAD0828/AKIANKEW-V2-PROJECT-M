import {
  TERMINATOR_X_HERO,
  TERMINATOR_X_PRODUCT,
  CRASH_SITE_HERO,
  CRASH_SITE_PRODUCT,
  SCORPION_HERO,
  SCORPION_PRODUCT
} from '../assets'

// Catalog data used by product pages — easy to update and extend.
export const CATALOG = [
  {
    id: 'monitors',
    title: 'Monitors',
    subcategories: [
      {
        id: 'gaming',
        title: 'Gaming Monitors',
        products: [
          { id: 'terminator-x', title: 'Terminator X', subtitle: '34-inch Curved Ultra-wide Gaming Monitor', href: '/terminator-x', hero: TERMINATOR_X_HERO, image: TERMINATOR_X_PRODUCT },
          { id: 'crash-site', title: 'Crash Site', subtitle: '29-inch Ultra-wide Gaming Monitor', href: '/crash-site', hero: CRASH_SITE_HERO, image: CRASH_SITE_PRODUCT },
          { id: 'scorpion', title: 'Scorpion', subtitle: '27-inch High-Performance Gaming Monitor', href: '/scorpion', hero: SCORPION_HERO, image: SCORPION_PRODUCT }
        ]
      },
      {
        id: 'office',
        title: 'Office / Productivity Monitors',
        products: []
      }
    ]
  },
  {
    id: 'ssds',
    title: 'SSDs (اکیناکه)',
    subcategories: [
      { id: 'nvme', title: 'NVMe SSDs', products: [] },
      { id: 'sata', title: 'SATA SSDs', products: [] }
    ]
  },
  { id: 'peripherals', title: 'Keyboards & Mice', subcategories: [{ id: 'kbm', title: 'Keyboards & Mice', products: [] }] },
  { id: 'accessories', title: 'Accessories & Gaming', subcategories: [{ id: 'acc', title: 'Accessories', products: [] }] }
]
