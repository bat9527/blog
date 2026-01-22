import React from 'react';
import { Post } from '../types';
import { StarIcon } from './Icons';

interface ArticleCardProps {
  post: Post;
  onClick: (id: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, onClick }) => {
  return (
    <div 
      className="py-10 border-b border-gray-100 group cursor-pointer"
      onClick={() => onClick(post.id)}
    >
      <div className="flex items-start justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between min-h-[140px]">
          <div>
            {/* Metadata Top */}
            <div className="flex items-center gap-2 mb-3">
               <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src="https://picsum.photos/id/64/100/100" alt="Me" className="w-full h-full object-cover" />
               </div>
               <span className="text-xs font-medium text-gray-900">Me</span>
               <span className="text-gray-400 text-xs">·</span>
               <span className="text-gray-500 text-xs">{post.publishedAt}</span>
               {post.featured && <span className="text-yellow-600 text-xs flex items-center gap-1 ml-2"><StarIcon className="w-3 h-3" fill /> Starred</span>}
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gray-900 mb-2 leading-tight group-hover:underline decoration-gray-900 decoration-1 underline-offset-4">
              {post.title}
            </h2>
            <p className="hidden md:block text-gray-500 font-serif leading-snug text-sm md:text-base line-clamp-2 mb-4">
              {post.subtitle}
            </p>
          </div>

          {/* Footer Metadata */}
          <div className="flex items-center gap-3 mt-4">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-[10px] text-gray-600 font-medium">
                {post.tags[0]}
            </span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
          </div>
        </div>

        {/* Right Thumbnail */}
        <div className="w-24 h-24 md:w-40 md:h-32 flex-shrink-0">
          <img 
            src={post.thumbnailUrl} 
            alt={post.title}
            className="w-full h-full object-cover rounded-sm md:rounded-md bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;