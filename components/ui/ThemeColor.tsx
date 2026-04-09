'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useActivePanel } from '@/lib/activePanelContext';

const THEMES = {
  beverage: { color: '#100c08', accent: '#d0c0b0', bg: '#100c08' },
  developer: { color: '#0a0d12', accent: '#b8c8e0', bg: '#0a0d12' },
  videographer: { color: '#0d0c0b', accent: '#cec8c0', bg: '#0d0c0b' },
} as const;

export function ThemeColor() {
  const pathname = usePathname();
  const { activePanel } = useActivePanel();

  useEffect(() => {
    let theme: { readonly color: string; readonly accent: string; readonly bg: string } = THEMES.videographer;

    if (pathname === '/') {
      theme = THEMES[activePanel];
    } else if (pathname?.startsWith('/developer')) {
      theme = THEMES.developer;
    } else if (pathname?.startsWith('/beverage')) {
      theme = THEMES.beverage;
    } else if (pathname?.startsWith('/videographer')) {
      theme = THEMES.videographer;
    }

    const { color, accent, bg } = theme;

    // Update CSS variables
    const root = document.documentElement;
    const body = document.body;
    
    [root, body].forEach(el => {
      el.style.setProperty('--theme-accent', accent);
      el.style.setProperty('--theme-bg', bg);
    });

    // Update meta theme-color
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', color);

    // Update apple status bar style if needed
    let metaApple = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (!metaApple) {
      metaApple = document.createElement('meta');
      metaApple.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
      document.head.appendChild(metaApple);
    }
    metaApple.setAttribute('content', 'black-translucent');

  }, [pathname, activePanel]);

  return null;
}
