import React from 'react';
import { POPULAR_POSTS, TOPICS } from '../constants';

const RightPanel: React.FC = () => {
  return (
    <aside className="hidden xl:block w-[360px] border-l border-gray-100 min-h-screen px-8 py-10 sticky top-0 h-screen overflow-y-auto no-scrollbar">
      
      {/* About Me Widget */}
      <div className="mb-12">
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">About Me</h3>
        <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://picsum.photos/id/64/100/100" alt="Me" className="w-full h-full object-cover"/>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-serif">
                Hi, I'm a developer writing about code, startups, and life. This blog is built with React (simulating Astro) and manages content via Markdown.
            </p>
            <button className="text-xs font-medium bg-gray-900 text-white px-4 py-2 rounded-full self-start hover:bg-gray-700 transition-colors">
                Get in touch
            </button>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="mb-12">
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Popular</h3>
        <div className="flex flex-col gap-6">
          {POPULAR_POSTS.map(post => (
            <div key={post.id} className="cursor-pointer group">
              <div className="font-bold text-sm text-gray-900 leading-snug mb-1 group-hover:underline decoration-1 underline-offset-2">
                {post.title}
              </div>
              <div className="text-xs text-gray-500">{post.publishedAt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div className="mb-12">
        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Explore</h3>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map(topic => (
            <button 
              key={topic.id}
              className="px-3 py-1.5 border border-gray-200 rounded-md text-xs text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all"
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 pt-6 border-t border-gray-100">
        © 2025 My Personal Blog. <br/>
        All rights reserved.
      </div>

    </aside>
  );
};

export default RightPanel;