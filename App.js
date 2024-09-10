import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navigation from './Navigation';
import HomePage from './HomePage';
import BrowsePage from './BrowsePage';
import VideoPage from './VideoPage';
import UserProfile from './UserProfile';
import LoginPage from './LoginPage';
import SeminarPage from './SeminarPage';
import BookLessonPage from './BookLessonPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/video/:id" element={<VideoPage />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/seminars" element={<SeminarPage />} />
              <Route path="/book-lesson" element={<BookLessonPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;