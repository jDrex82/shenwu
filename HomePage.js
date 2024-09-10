import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Play, Star, Users, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="pt-16 pb-20 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Shen Wu
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your ultimate destination for martial arts instruction videos. Learn from the best instructors and take your skills to the next level.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            {user ? (
              <Link
                to="/browse"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Browse Videos
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>

        {/* Feature section */}
        <div className="py-12 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Shen Wu features</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Play className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    High-Quality Videos
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Access a wide range of professionally produced martial arts instruction videos.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Star className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Expert Instructors
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Learn from world-renowned martial artists and experienced trainers.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Community
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Connect with other martial arts enthusiasts, share experiences, and grow together.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-indigo-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to start your martial arts journey?</span>
              <span className="block">Sign up for Shen Wu today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Get unlimited access to all our videos and start learning from the best martial arts instructors around the world.
            </p>
            <Link
              to={user ? "/browse" : "/login"}
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              {user ? "Browse Videos" : "Get Started"}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
