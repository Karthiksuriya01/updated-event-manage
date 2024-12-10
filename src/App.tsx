import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { StatsCard } from './components/StatsCard';
import { EventCard } from './components/EventCard';
import { Layout } from './components/Layout';
import Profile  from './components/Profile';

function App() {
  const events = [
    {
      title: "Implement Login Feature",
      progress: 75,
      date: "March 19, 2024",
      completedUsers: 15,
      totalUsers: 20,
    },
    {
      title: "Database Integration",
      progress: 30,
      date: "March 20, 2024",
      completedUsers: 6,
      totalUsers: 20,
    },
    {
      title: "UI/UX Improvements",
      progress: 45,
      date: "March 21, 2024",
      completedUsers: 9,
      totalUsers: 20,
    }
  ];

  return (
    <Router>
      <Layout>
        <header className="bg-white px-4 py-4 shadow-sm lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <h1 className="text-xl font-semibold text-gray-900 mb-4 lg:mb-0">EduLink</h1>
              <SearchBar />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-6 lg:px-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-8">
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                  <StatsCard title="Total events" value={10} />
                  <StatsCard title="Completed" value={4} />
                  <StatsCard title="Not complete" value={6} />
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-lg font-semibold mb-4">Today</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {events.map((event, index) => (
                        <EventCard
                          key={index}
                          title={event.title}
                          progress={event.progress}
                          date={event.date}
                          completedUsers={event.completedUsers}
                          totalUsers={event.totalUsers}
                        />
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">All Events</h2>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                        View all
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {events.map((event, index) => (
                        <EventCard
                          key={`all-${index}`}
                          title={event.title}
                          progress={event.progress}
                          date={event.date}
                          completedUsers={event.completedUsers}
                          totalUsers={event.totalUsers}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;