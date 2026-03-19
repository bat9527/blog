import { defineCollection, z } from 'astro:content';
import { ENGLISH_SECTIONS } from '../data/english';

const englishSectionValues = ENGLISH_SECTIONS.map((section) => section.slug) as [
    (typeof ENGLISH_SECTIONS)[number]['slug'],
    ...(typeof ENGLISH_SECTIONS)[number]['slug'][]
];

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        publishedAt: z.string(),
        readTime: z.string(),
        tags: z.array(z.string()),
        thumbnailUrl: z.string(),
        category: z.enum(['科技', '投资', '经济', '人文', '英语', '原创', '其他']).default('其他'),
        englishSection: z.enum(englishSectionValues).optional(),
        claps: z.number().default(0),
        comments: z.number().default(0),
        featured: z.boolean().optional(),
    }).superRefine((data, ctx) => {
        if (data.category === '英语' && !data.englishSection) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['englishSection'],
                message: 'English posts must define an englishSection.',
            });
        }

        if (data.category !== '英语' && data.englishSection) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['englishSection'],
                message: 'Only English posts can define an englishSection.',
            });
        }
    }),
});

export const collections = { blog };
