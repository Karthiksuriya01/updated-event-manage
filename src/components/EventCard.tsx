import React from 'react';
import { MoreVertical, Calendar, MessageSquare, CalendarPlus, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  progress: number;
  date: string;
  completedUsers?: number;
  totalUsers?: number;
}

export function EventCard({ 
  title, 
  progress, 
  date, 
  completedUsers = 0, 
  totalUsers = 0 
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <Calendar className="h-4 w-4 flex-shrink-0 mr-1" />
            <span className="truncate">{date}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors ml-2 flex-shrink-0">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-gray-500 flex-shrink-0" />
            <span className="text-sm text-gray-600">{completedUsers}/{totalUsers} completed</span>
          </div>
          <span className="text-sm font-medium text-blue-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
        <button className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
          <CalendarPlus className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="hidden sm:inline">Add to Calendar</span>
          <span className="sm:hidden">Add</span>
        </button>
        <button className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
          <MessageSquare className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="hidden sm:inline">Comment</span>
          <span className="sm:hidden">Chat</span>
        </button>
      </div>
    </div>
  );
}