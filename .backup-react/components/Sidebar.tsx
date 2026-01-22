import React from 'react';
import { LogoIcon, HomeIcon, SearchIcon } from './Icons';

interface SidebarProps {
  activeTab: string;
  onNavigate: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onNavigate }) => {
  return (
    <aside className="hidden md:flex flex-col items-center w-20 border-r border-gray-100 h-screen sticky top-0 py-8 bg-white z-20">
      <div 
        className="mb-12 cursor-pointer"
        onClick={onNavigate}
      >
        <LogoIcon className="w-8 h-8 text-black" />
      </div>

      <nav className="flex flex-col gap-8 flex-1 w-full items-center">
        <button 
            onClick={onNavigate}
            className="group relative"
            title="Home"
        >
          <HomeIcon className={`w-6 h-6 ${activeTab === 'home' ? 'text-black' : 'text-gray-400 group-hover:text-black'} transition-colors`} />
        </button>
        
        <button className="group relative" title="Search">
          <SearchIcon className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
        </button>
      </nav>

      <div className="mt-auto flex flex-col gap-6 items-center text-gray-400">
        {/* Fake Social Links */}
        <a href="#" className="hover:text-black font-serif font-bold text-lg" title="Twitter">X</a>
        <a href="#" className="hover:text-black font-serif font-bold text-lg" title="GitHub">G</a>
      </div>
    </aside>
  );
};

export default Sidebar;