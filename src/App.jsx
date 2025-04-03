import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, MessageCircle } from 'lucide-react';
import WildlifeChat from './pages/WildlifeChat';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Your Wildlife Assistant</h1>
        <div className="grid gap-8 md:grid-cols-1">
          <Link
            to="/health-chat"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all min-h-[200px]"
          >
            <MessageCircle className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Health Chat</h2>
            <p className="text-gray-600 text-base">24/7 AI-powered Wildlife assistance</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="flex items-center text-gray-800 hover:text-blue-500 font-medium text-lg"
                >
                  <Home className="w-6 h-6 mr-2" />
                  Home
                </Link>
                <Link
                  to="/health-chat"
                  className="flex items-center text-gray-800 hover:text-blue-500 font-medium text-lg"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Health Chat
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/health-chat" element={<WildlifeChat />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
