import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RightPanel from './components/RightPanel';
import ArticleCard from './components/ArticleCard';
import ArticleView from './components/ArticleView';
import { MOCK_POSTS, TOPICS } from './constants';
import { Post } from './types';
import { EditIcon, SearchIcon } from './components/Icons';

// Feed Component (The Main Content)
const Feed = () => {
  const navigate = useNavigate();
  // State for active category (default 'All')
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const handlePostClick = (id: string) => {
    navigate(`/post/${id}`);
    window.scrollTo(0, 0);
  };

  // Filter posts based on the active category
  // If 'All', show everything. Otherwise, check if post.tags includes the category name.
  const filteredPosts = activeCategory === 'All'
    ? MOCK_POSTS
    : MOCK_POSTS.filter(post => post.tags.includes(activeCategory));

  return (
    <div className="w-full max-w-[720px] mx-auto pt-10 min-h-screen pb-20">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between mb-6 px-5">
         <div className="font-serif font-bold text-2xl tracking-tight">Medium</div>
         <div className="flex gap-4">
            <SearchIcon className="w-6 h-6 text-gray-500"/>
            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">S</div>
         </div>
      </div>

      {/* Dynamic Tabs (Categories) */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-gray-100 px-5 md:px-0 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-8 min-w-max">
          <button 
            onClick={() => setActiveCategory('All')}
            className={`py-4 text-sm font-medium transition-colors relative ${activeCategory === 'All' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
          >
            All
            {activeCategory === 'All' && (
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-900"></div>
            )}
          </button>
          
          {TOPICS.map(topic => (
             <button 
               key={topic.id}
               onClick={() => setActiveCategory(topic.name)}
               className={`py-4 text-sm font-medium transition-colors relative ${activeCategory === topic.name ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
             >
               {topic.name}
               {activeCategory === topic.name && (
                 <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-900"></div>
               )}
             </button>
          ))}
        </div>
      </div>

      {/* Feed List */}
      <div className="mt-2 px-5 md:px-0">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <ArticleCard 
              key={post.id} 
              post={post} 
              onClick={handlePostClick}
            />
          ))
        ) : (
           <div className="py-20 text-center text-gray-500">
              No posts found for this category.
           </div>
        )}
        
        {/* Infinite Scroll trigger mock (only show if there are posts) */}
        {filteredPosts.length > 0 && (
          <div className="py-10 text-center text-gray-500 text-sm">
             You're all caught up.
          </div>
        )}
      </div>

      {/* Mobile Create Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-30">
        <button className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors">
          <EditIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// Post Detail Component Wrapper to grab params
const PostDetailWrapper = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // In a real router, we'd use useParams, but slicing the hash is safer for this specific restricted env if params fail
    const postId = location.pathname.split('/').pop();
    const post = MOCK_POSTS.find(p => p.id === postId) || MOCK_POSTS[0];

    return <ArticleView post={post} onBack={() => navigate('/')} />;
}

// Main Layout
const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex min-h-screen bg-white">
      {/* 1. Left Sidebar (Navigation) */}
      <Sidebar 
        activeTab={isHome ? 'home' : ''} 
        onNavigate={() => navigate('/')} 
      />

      {/* 2. Main Content (Feed or Article) */}
      <main className="flex-1 border-r border-gray-100 min-h-screen relative">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/post/:id" element={<PostDetailWrapper />} />
        </Routes>
      </main>

      {/* 3. Right Sidebar (Suggestions) - Only show on Desktop & Home */}
      {isHome && <RightPanel />}
    </div>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
};

export default App;