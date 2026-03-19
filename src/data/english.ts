import type { CollectionEntry } from 'astro:content';

export const ENGLISH_CATEGORY = '英语' as const;

export const ENGLISH_SECTIONS = [
  {
    slug: 'daily-life',
    label: 'Daily Life',
    description: 'Home, errands, shopping, health, and everyday conversations.',
  },
  {
    slug: 'work-office',
    label: 'Work & Office',
    description: 'Meetings, email, workplace communication, and office routines.',
  },
  {
    slug: 'tech-career',
    label: 'Tech & Career',
    description: 'Programming, product thinking, interviews, and professional growth.',
  },
  {
    slug: 'africa-market',
    label: 'Africa Market',
    description: 'Fintech, digital banking, regulation, and market vocabulary for Africa.',
  },
  {
    slug: 'reading-notes',
    label: 'Reading Notes',
    description: 'Articles, podcasts, interviews, and newsletters worth revisiting.',
  },
  {
    slug: 'phrasebook',
    label: 'Phrasebook',
    description: 'High-frequency phrases, sentence patterns, and useful collocations.',
  },
  {
    slug: 'writing-speaking',
    label: 'Writing & Speaking',
    description: 'Output-focused practice for email, comments, introductions, and speaking.',
  },
] as const;

export type EnglishSectionSlug = (typeof ENGLISH_SECTIONS)[number]['slug'];
type BlogEntry = CollectionEntry<'blog'>;

export function isEnglishPost(entry: BlogEntry) {
  return entry.data.category === ENGLISH_CATEGORY;
}

export function getEnglishSection(section?: string) {
  return ENGLISH_SECTIONS.find((item) => item.slug === section);
}

export function getEnglishSectionCounts(posts: BlogEntry[]) {
  return Object.fromEntries(
    ENGLISH_SECTIONS.map((section) => [
      section.slug,
      posts.filter((post) => post.data.englishSection === section.slug).length,
    ]),
  ) as Record<EnglishSectionSlug, number>;
}

export function sortPostsByDate(posts: BlogEntry[]) {
  return [...posts].sort((a, b) => {
    return new Date(b.data.publishedAt).valueOf() - new Date(a.data.publishedAt).valueOf();
  });
}
