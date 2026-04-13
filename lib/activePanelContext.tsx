'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type PanelId = 'beverage' | 'developer' | 'videographer' | 'about';

interface ActivePanelContextType {
  activePanel: PanelId;
  setActivePanel: (panel: PanelId) => void;
}

const ActivePanelContext = createContext<ActivePanelContextType | undefined>(undefined);

export function ActivePanelProvider({ children }: { children: ReactNode }) {
  const [activePanel, setActivePanel] = useState<PanelId>('videographer'); // default to cinema

  return (
    <ActivePanelContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </ActivePanelContext.Provider>
  );
}

export function useActivePanel() {
  const context = useContext(ActivePanelContext);
  if (!context) {
    throw new Error('useActivePanel must be used within ActivePanelProvider');
  }
  return context;
}