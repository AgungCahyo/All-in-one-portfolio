'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useActivePanel } from '@/lib/activePanelContext';

const THEMES = {
  leadership: { color: '#faf6ee', accent: '#1f6e52', bg: '#faf6ee' },
  developer: { color: '#f5f7fa', accent: '#3454a4', bg: '#f5f7fa' },
  videographer: { color: '#f7f3ee', accent: '#c1613f', bg: '#f7f3ee' },
  about: { color: '#f5f3f0', accent: '#241f1a', bg: '#f5f3f0' },
} as const;

export function ThemeColor() {
  const pathname = usePathname();
  const { activePanel } = useActivePanel();

  useEffect(() => {
    let theme: { readonly color: string; readonly accent: string; readonly bg: string } = THEMES.videographer;

    if (pathname === '/') {
      theme = THEMES[activePanel] ?? THEMES.videographer;
    } else if (pathname?.startsWith('/about')) {
      theme = THEMES.about;
    } else if (pathname?.startsWith('/developer')) {
      theme = THEMES.developer;
    } else if (pathname?.startsWith('/leadership')) {
      theme = THEMES.leadership;
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
    // Every page is light now, so a normal (dark-text) status bar reads
    // best everywhere — no more dark page needing the translucent style.
    metaApple.setAttribute('content', 'default');

  }, [pathname, activePanel]);

  return null;
}