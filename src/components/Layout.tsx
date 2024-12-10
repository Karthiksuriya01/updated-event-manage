import React, { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:flex">
        <Navigation />
        <main className="flex-1 pb-20 lg:pb-0 lg:ml-20">
          {children}
        </main>
      </div>
    </div>
  );
}