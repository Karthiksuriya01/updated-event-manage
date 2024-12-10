import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Event 1, Event 2"
        className="w-full px-4 py-2 pl-10 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}