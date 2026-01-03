// Akinake Brand Color System - Neon Cyberpunk Gaming
// Precise Color Palette - NO PINK, ONLY NEON FLUORESCENT COLORS
export const BRAND_COLORS = {
  // AKINAKE Main Brand - Red Neon Backlit
  akinake: {
    primary: '#FF0080',
    bright: '#FF0080',
    dark: '#CC0066',
    light: '#FF3399',
    glow: 'rgba(255, 0, 128, 0.5)',
    hex: '#FF0080'
  },
  
  // Terminator X - Blue Neon Fluorescent
  terminatorX: {
    primary: '#00D9FF',
    bright: '#00D9FF',
    dark: '#0099CC',
    light: '#66E6FF',
    glow: 'rgba(0, 217, 255, 0.5)',
    hex: '#00D9FF'
  },
  
  // Crash Site - Green Phosphor Fluorescent
  crashSite: {
    primary: '#00FF41',
    bright: '#00FF41',
    dark: '#00CC33',
    light: '#66FF66',
    glow: 'rgba(0, 255, 65, 0.5)',
    hex: '#00FF41'
  },
  
  // Scorpion - Orange Neon Fluorescent
  scorpion: {
    primary: '#FF6600',
    bright: '#FF6600',
    dark: '#CC5200',
    light: '#FF9933',
    glow: 'rgba(255, 102, 0, 0.5)',
    hex: '#FF6600'
  },

  // Tier X - Yellow Neon Fluorescent
  tierX: {
    primary: '#FFFF00',
    bright: '#FFFF00',
    dark: '#CCCC00',
    light: '#FFFF66',
    glow: 'rgba(255, 255, 0, 0.5)',
    hex: '#FFFF00'
  },

  // Klassur - Red Neon (Office Series)
  klassur: {
    primary: '#FF0080',
    bright: '#FF0080',
    dark: '#CC0066',
    light: '#FF3399',
    glow: 'rgba(255, 0, 128, 0.5)',
    hex: '#FF0080'
  },
  
  // Neutral Colors - Dark Background
  neutral: {
    black: '#0A0E27',
    darkGray: '#1A1F3A',
    gray: '#2D3748',
    lightGray: '#E2E8F0',
    white: '#FFFFFF'
  }
}

// Product Series Configuration with Model Numbers
export const PRODUCT_SERIES = {
  terminatorX: {
    name: 'Terminator X',
    modelNumber: 'AK-TX-34',
    color: BRAND_COLORS.terminatorX,
    description: '34-inch Curved Ultra-wide Gaming Monitor',
    models: ['4K', '2K']
  },
  crashSite: {
    name: 'Crash Site',
    modelNumber: 'AK-CS-29',
    color: BRAND_COLORS.crashSite,
    description: '29-inch Ultra-wide Gaming Monitor',
    models: ['Standard']
  },
  scorpion: {
    name: 'Scorpion',
    modelNumber: 'AK-SC-27',
    color: BRAND_COLORS.scorpion,
    description: '27-inch High-Performance Gaming Monitor',
    models: ['1K 100Hz']
  },
  tierX: {
    name: 'Tier X',
    modelNumber: 'AK-TX-GAMING',
    color: BRAND_COLORS.tierX,
    description: 'Gaming Series Monitor',
    models: ['Gaming']
  },
  klassur: {
    name: 'Klassur',
    modelNumber: 'AK-KL-OFFICE',
    color: BRAND_COLORS.klassur,
    description: 'Office & Professional Monitor',
    models: ['Small', 'Medium', 'Large']
  }
}

// Navigation Structure
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    submenu: [
      {
        category: 'Monitors',
        items: [
          { label: 'Gaming', href: '/products/monitors/gaming' },
          { label: 'Office', href: '/products/monitors/office' }
        ]
      },
      {
        category: 'Storage',
        items: [
          { label: 'Hard Drives', href: '/products/storage' },
          { label: 'Accessories', href: '/products/accessories' }
        ]
      }
    ]
  },
  { label: 'Support', href: '/support' },
  { label: 'Contact', href: '/contact' }
]
