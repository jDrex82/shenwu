import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const SeminarPage = () => {
  // Mock data for seminars. In a real application, this would come from an API or database
  const seminars = [
    {
      id: 1,
      title: "Tai Chi Techniques",
      instructor: "Tim Cartmell",
      date: "August 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "New York Kung Fu Acadamy, New York",
      description: "Dive deep into advanced Tai Chi forms and philosophies in this intensive one-day seminar."
    },
    {
      id: 2,
      title: "Brazilian Jiu-Jitsu",
      instructor: "Tim Cartmell",
      date: "September 5-7, 2024",
      time: "10:00 AM - 3:00 PM daily",
      location: "BJJ Academy, Los Angeles",
      description: "A three-day seminar focusing on advanced BJJ techniques and strategies for competition."
    },
    // Add more seminar objects as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Upcoming Seminars</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seminars.map((seminar) => (
            <div key={seminar.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{seminar.title}</h2>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                  <User className="mr-2 h-5 w-5" />
                  {seminar.instructor}
                </p>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="mr-2 h-5 w-5" />
                  {seminar.date}
                </p>
                <p className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock className="mr-2 h-5 w-5" />
                  {seminar.time}
                </p>
                <p className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="mr-2 h-5 w-5" />
                  {seminar.location}
                </p>
                <p className="text-sm text-gray-500 mb-4">{seminar.description}</p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200">
                  Register for Seminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeminarPage;