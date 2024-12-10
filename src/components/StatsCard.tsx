import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  className?: string;
}

export function StatsCard({ title, value, className = '' }: StatsCardProps) {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <p className="text-sm text-gray-600 text-center">{title}</p>
      <p className="text-2xl font-semibold mt-1 text-center md:text-3xl">{value}</p>
    </div>
  );
}