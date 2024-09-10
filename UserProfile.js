import React from 'react';
import { User, Clock, Heart } from 'lucide-react';

const UserProfile = () => {
  // Mock user data - replace with actual user data in a real app
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 1, 2023",
    watchedVideos: [
      { id: 1, title: "Brazilian Jiu-Jitsu Basics" },
      { id: 2, title: "Muay Thai Combos" },
    ],
    favoriteVideos: [
      { id: 3, title: "Advanced Judo Throws" },
      { id: 4, title: "Karate Kata Tutorial" },
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <User size={64} className="text-blue-500 mr-4" />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Clock size={20} className="mr-2" /> Recently Watched
          </h2>
          <ul className="list-disc list-inside">
            {user.watchedVideos.map(video => (
              <li key={video.id}>{video.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Heart size={20} className="mr-2" /> Favorites
          </h2>
          <ul className="list-disc list-inside">
            {user.favoriteVideos.map(video => (
              <li key={video.id}>{video.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;