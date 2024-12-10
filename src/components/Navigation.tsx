import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Search, BarChart2, User } from 'lucide-react';
import { Dock, DockIcon } from './ui/dock';

export function Navigation() {
  return (
    <>
      {/* Mobile Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <Dock className="!mt-0 !border-none shadow-lg bg-white/90 backdrop-blur-lg">
          <DockIcon className="text-blue-600">
            <Link to="/"><Home className="h-6 w-6" /></Link>
          </DockIcon>
          <DockIcon className="text-gray-600 hover:text-blue-600">
            <Link to="/calendar"><Calendar className="h-6 w-6" /></Link>
          </DockIcon>
          <DockIcon className="text-gray-600 hover:text-blue-600">
            <Link to="/search"><Search className="h-6 w-6" /></Link>
          </DockIcon>
          <DockIcon className="text-gray-600 hover:text-blue-600">
            <Link to="/stats"><BarChart2 className="h-6 w-6" /></Link>
          </DockIcon>
          <DockIcon className="text-gray-600 hover:text-blue-600">
            <Link to="/profile"><User className="h-6 w-6" /></Link>
          </DockIcon>
        </Dock>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed left-0 top-0 bottom-0 w-20 bg-white border-r border-gray-200">
        <div className="flex flex-col items-center justify-between py-8 h-full">
          <div className="space-y-8">
            <div className="px-2">
              <span className="text-xl font-bold text-blue-600">E</span>
            </div>
            <Dock className="flex-col !mt-0 !border-none !h-auto" direction="middle">
              <DockIcon className="text-blue-600 bg-blue-50">
                <Link to="/"><Home className="h-6 w-6" /></Link>
              </DockIcon>
              <DockIcon className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                <Link to="/calendar"><Calendar className="h-6 w-6" /></Link>
              </DockIcon>
              <DockIcon className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                <Link to="/search"><Search className="h-6 w-6" /></Link>
              </DockIcon>
              <DockIcon className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                <Link to="/stats"><BarChart2 className="h-6 w-6" /></Link>
              </DockIcon>
            </Dock>
          </div>
          <DockIcon className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
            <Link to="/profile"><User className="h-6 w-6" /></Link>
          </DockIcon>
        </div>
      </nav>
    </>
  );
}