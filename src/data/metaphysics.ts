import type { CollectionEntry } from 'astro:content';

export const METAPHYSICS_CATEGORY = '玄学' as const;

export const METAPHYSICS_SECTIONS = [
  {
    slug: 'astrology',
    label: '命理',
    description: '天干地支，五行生克。于四柱生辰之中，洞见命运运行之迹。',
  },
  {
    slug: 'fengshui',
    label: '风水',
    description: '办公桌气场、居家格局，调理环境磁场以助运势与心境。',
  },
  {
    slug: 'divination',
    label: '占卜',
    description: '梅花易数、铜钱起卦，以微观占断洞悉客观事物之变。',
  },
  {
    slug: 'iching',
    label: '易经',
    description: '乾坤六十四卦，蕴含万物运行之哲理，指导人生进退。',
  },
] as const;

export type MetaphysicsSectionSlug = (typeof METAPHYSICS_SECTIONS)[number]['slug'];
type BlogEntry = CollectionEntry<'blog'>;

export function isMetaphysicsPost(entry: BlogEntry) {
  return entry.data.category === METAPHYSICS_CATEGORY;
}

export function getMetaphysicsSection(section?: string) {
  return METAPHYSICS_SECTIONS.find((item) => item.slug === section);
}

export function getMetaphysicsSectionCounts(posts: BlogEntry[]) {
  return Object.fromEntries(
    METAPHYSICS_SECTIONS.map((section) => [
      section.slug,
      posts.filter((post) => post.data.metaphysicsSection === section.slug).length,
    ]),
  ) as Record<MetaphysicsSectionSlug, number>;
}
