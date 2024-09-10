import React, { useState } from 'react';
import { Search } from 'lucide-react';

const BrowsePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');

  // Updated mock data with Tim Cartmell as the instructor for all videos
  const videos = [
    { id: 1, title: 'Xing Yi Nei Gong', instructor: 'Tim Cartmell', duration: '2h 15m', level: 'Intermediate', style: 'Xing Yi Quan' },
    { id: 2, title: 'Standing Grappling Escapes and Counters', instructor: 'Tim Cartmell', duration: '1h 45m', level: 'All Levels', style: 'Mixed Martial Arts' },
    { id: 3, title: 'Principles, Analysis, and Application of Effortless Combat Throws', instructor: 'Tim Cartmell', duration: '3h', level: 'Advanced', style: 'Shuai Jiao' },
    { id: 4, title: 'Practical Chin Na', instructor: 'Tim Cartmell', duration: '1h 30m', level: 'Intermediate', style: 'Chinese Martial Arts' },
    { id: 5, title: 'Traditional Sun Style Taijiquan Volume #1', instructor: 'Tim Cartmell', duration: '2h', level: 'Beginner', style: 'Tai Chi' },
    { id: 6, title: 'Traditional Sun Style Taijiquan Volume #2', instructor: 'Tim Cartmell', duration: '2h 15m', level: 'Intermediate', style: 'Tai Chi' },
    { id: 7, title: 'Traditional Sun Style Taijiquan Volume #3', instructor: 'Tim Cartmell', duration: '2h 30m', level: 'Advanced', style: 'Tai Chi' },
    { id: 8, title: 'Traditional Sun Style Taijiquan Volume #4', instructor: 'Tim Cartmell', duration: '2h 45m', level: 'Expert', style: 'Tai Chi' },
  ];

  const styles = ['All', ...new Set(videos.map(video => video.style))];

  const filteredVideos = videos.filter(video =>
    (selectedStyle === 'All' || video.style === selectedStyle) &&
    (video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     video.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Videos</h1>
        
        <div className="mb-6 flex flex-col sm:flex-row items-center">
          <div className="relative flex-grow mb-4 sm:mb-0 sm:mr-4">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full p-2 pl-10 pr-4 rounded-lg border border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <select
            className="w-full sm:w-auto p-2 rounded-lg border border-gray-300"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            {styles.map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-300 h-48"></div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <a href={`/video/${video.id}`} className="text-blue-600 hover:underline">
                    {video.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-2">Instructor: {video.instructor}</p>
                <p className="text-gray-600 mb-2">Style: {video.style}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{video.duration}</span>
                  <span>{video.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No videos found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;