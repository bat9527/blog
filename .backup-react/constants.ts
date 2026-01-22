import { Post, Topic } from './types';

// In a real Astro project, these would be separate .md files in src/content/blog/
// Example: src/content/blog/transformers.md

const POST_1_MD = `
The Transformer architecture has revolutionized the field of Natural Language Processing (NLP). Before Transformers, we relied heavily on Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks.

These older architectures processed data sequentially, which meant they were slow to train and struggled with long-range dependencies in text.

## The Attention Mechanism

The core innovation of the Transformer is the **"Self-Attention"** mechanism. It allows the model to weigh the importance of different words in a sentence relative to each other, regardless of their distance.

> "Attention is all you need." - Vaswani et al.

### Key Benefits

1.  **Parallelization**: Unlike RNNs, Transformers can process entire sequences at once.
2.  **Long-term Dependency**: Self-attention captures relationships between distant words.
3.  **Scalability**: They scale incredibly well with more data and compute.

Imagine reading a sentence. When you see the word "bank", how do you know if it means a river bank or a financial bank? You look at the context. Self-attention essentially does this mathematically.
`;

const POST_2_MD = `
The hype cycle is a well-documented phenomenon in the technology sector. We saw it with the Dot-com bubble, we saw it with Crypto, and now we are seeing it with Generative AI.

While the utility of **LLMs** is undeniable, the valuation of companies building them has detached from reality. The infrastructure costs are massive, and the path to profitability for many wrapper startups is unclear.

## The Reality Check

*   Compute costs are not dropping fast enough.
*   Copyright lawsuits are looming.
*   Data scarcity is becoming a real bottleneck.

However, just like the internet boom, once the bubble bursts, the *real* utility will remain and transform society.
`;

const POST_3_MD = `
We are all overstimulated. Between Slack notifications, emails, and social media, our brains rarely get a moment of true silence.

This simple 5-minute routine is based on the **physiological sigh** and box breathing techniques used by Navy SEALs to regulate their nervous systems.

## The Routine

1.  **Inhale** deeply through your nose for 4 seconds.
2.  **Hold** your breath for 4 seconds.
3.  **Exhale** slowly through your mouth for 4 seconds.
4.  **Hold** empty for 4 seconds.

Repeat this cycle 4 times. You will feel your heart rate lower almost immediately.
`;

const POST_4_MD = `
React 19 introduces the **React Compiler**, which automatically memoizes your components. Say goodbye to \`useMemo\` and \`useCallback\`.

\`\`\`jsx
// Before
const cachedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// After (React 19)
const cachedValue = computeExpensiveValue(a, b);
\`\`\`

This is a massive shift in how we write React. It lowers the barrier to entry and removes a whole class of performance footguns.
`;

const POST_5_MD = `
It started with a dream and a laptop. It ended with burnout and a hard lesson in marketing.

### Day 1: The Idea
I thought I had the next billion-dollar idea. A to-do list app... but for cats.

### Day 15: The Build
I spent 2 weeks perfecting the CSS animations. I hadn't spoken to a single user yet.

### Day 30: The Launch
I launched on Product Hunt.
**Result:** 3 upvotes (one was my mom).

### The Lesson
Build distribution *before* you build the product.
`;

// This mimics the 'body' part of your TEMPLATE.md
const NEW_TEMPLATE_POST_MD = `
这里是文章的正文开始。你只需要像平时写 Markdown 一样写作即可。

## 一级标题 (Heading 2)

这是段落文本。你可以在这里**加粗**文字，或者使用*斜体*。

### 二级标题 (Heading 3)

如果你想引用一段话，使用 \`>\` 符号，样式会像 Medium 一样：

> “这是引用的样式，通常用于强调某句金句或者引用他人的话。”

#### 列表样式

*   列表项一
*   列表项二
*   列表项三

#### 代码块

如果你是写技术博客，代码块非常重要：

\`\`\`javascript
// 这是一个代码块示例
function helloWorld() {
  console.log("Hello, Medium Clone!");
}
\`\`\`

#### 图片

你也可以在正文中插入图片：

![图片描述](https://picsum.photos/id/20/800/400)
`;

export const TOPICS: Topic[] = [
  { id: '1', name: 'Coding' },
  { id: '2', name: 'AI' },
  { id: '3', name: 'Life' },
  { id: '4', name: 'Mental Health' },
  { id: '5', name: 'Startups' },
];

export const MOCK_POSTS: Post[] = [
  // This new post represents how you map the Frontmatter from TEMPLATE.md to the Object
  {
    id: 'template-demo',
    title: "你的文章标题写在这里", // From Frontmatter: title
    subtitle: "这是副标题，通常用于简短描述文章的核心观点，会在首页列表中显示。", // From Frontmatter: subtitle
    publishedAt: "Oct 24, 2025", // From Frontmatter: publishedAt
    readTime: "5 min read", // From Frontmatter: readTime
    tags: ["Coding", "Tutorial"], // From Frontmatter: tags
    thumbnailUrl: "https://picsum.photos/id/10/800/600", // From Frontmatter: thumbnailUrl
    content: NEW_TEMPLATE_POST_MD, // From Body
    claps: 100,
    comments: 5,
    featured: true
  },
  {
    id: 'transformers-easy',
    title: "Transformers made EASY",
    subtitle: "Understanding the engine behind ChatGPT in plain English.",
    publishedAt: "Oct 12, 2025",
    readTime: "6 min read",
    tags: ["AI", "Deep Learning"],
    thumbnailUrl: "https://picsum.photos/id/1/400/300",
    content: POST_1_MD,
    claps: 1240,
    comments: 42,
  },
  {
    id: 'ai-bubble',
    title: "The AI Bubble Is About To Burst",
    subtitle: "Why the current valuations makes no sense.",
    publishedAt: "Sep 15, 2025",
    readTime: "5 min read",
    tags: ["AI", "Tech"],
    thumbnailUrl: "https://picsum.photos/id/2/400/300",
    content: POST_2_MD,
    claps: 21000,
    comments: 890,
    featured: true,
  },
  {
    id: 'mental-reset',
    title: "The 5-Minute Mental Reset",
    subtitle: "An evidence-based routine you can try right now.",
    publishedAt: "Dec 10, 2025",
    readTime: "4 min read",
    tags: ["Mental Health", "Wellness"],
    thumbnailUrl: "https://picsum.photos/id/3/400/300",
    content: POST_3_MD,
    claps: 2300,
    comments: 66,
  },
  {
    id: 'react-19',
    title: "React 19 Will Change Everything",
    subtitle: "The compiler is coming. Boilerplate is dying.",
    publishedAt: "Oct 22, 2025",
    readTime: "3 min read",
    tags: ["Coding", "React"],
    thumbnailUrl: "https://picsum.photos/id/4/400/300",
    content: POST_4_MD,
    claps: 540,
    comments: 12,
  },
  {
    id: 'saas-failure',
    title: "I Quit My Job to Build a SaaS",
    subtitle: "A post-mortem of my 30-day failure.",
    publishedAt: "Yesterday",
    readTime: "12 min read",
    tags: ["Startups", "Indie Hacker"],
    thumbnailUrl: "https://picsum.photos/id/5/400/300",
    content: POST_5_MD,
    claps: 8500,
    comments: 340,
  }
];

export const POPULAR_POSTS: Post[] = [
  MOCK_POSTS[0], // The new template post
  MOCK_POSTS[2],
  MOCK_POSTS[4],
];