import React from 'react';
import { Post } from '../types';
import { marked } from 'marked';
import { MessageCircleIcon, StarIcon } from './Icons';

interface ArticleViewProps {
  post: Post;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ post, onBack }) => {
  const getMarkdownText = (text: string) => {
    const rawMarkup = marked.parse(text);
    return { __html: rawMarkup as string };
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-6 animate-in fade-in duration-500">
      
      {/* Article Meta Header */}
      <div className="flex items-center gap-3 mb-8">
         <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">← Back</button>
         <div className="h-4 w-[1px] bg-gray-300"></div>
         <span className="text-sm text-gray-500">{post.publishedAt}</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
        {post.title}
      </h1>
      <h2 className="text-xl text-gray-500 font-serif mb-8 leading-relaxed">
        {post.subtitle}
      </h2>

      {/* Author/Tag Block */}
      <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-100">
        <div className="flex items-center gap-3">
           <img src="https://picsum.photos/id/64/100/100" className="w-10 h-10 rounded-full" alt="Author" />
           <div>
              <div className="text-sm font-bold text-gray-900">Written by Me</div>
              <div className="text-xs text-gray-500">{post.readTime} · {post.tags.join(', ')}</div>
           </div>
        </div>
      </div>

      {/* Main Image */}
      <figure className="mb-12">
        <img 
          src={post.thumbnailUrl} 
          alt="Article cover" 
          className="w-full h-auto max-h-[500px] object-cover rounded-sm"
        />
      </figure>

      {/* Content - Enhanced Typography */}
      <article 
        className="prose prose-lg prose-slate font-serif max-w-none text-gray-800 leading-relaxed 
        prose-headings:font-bold prose-headings:text-gray-900 
        prose-p:leading-8 prose-p:mb-6 
        prose-a:text-green-700 prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-l-4 prose-blockquote:border-green-700 prose-blockquote:pl-4 prose-blockquote:italic
        prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-pink-600
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-md
        mb-20"
        dangerouslySetInnerHTML={getMarkdownText(post.content)}
      />
      
      {/* Footer Tags */}
      <div className="flex gap-2 mb-10">
         {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">#{tag}</span>
         ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-between">
          <div className="font-sans font-medium text-sm text-gray-600">
             Thanks for reading!
          </div>
          <div className="flex gap-4 text-gray-500">
             <div className="flex items-center gap-1">
                 <span className="text-lg">👏</span> {post.claps}
             </div>
             <div className="flex items-center gap-1">
                 <MessageCircleIcon className="w-5 h-5" /> {post.comments}
             </div>
          </div>
      </div>

    </div>
  );
};

export default ArticleView;