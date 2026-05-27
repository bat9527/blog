import { defineCollection, z } from 'astro:content';
import { ENGLISH_SECTIONS } from '../data/english';
import { METAPHYSICS_SECTIONS } from '../data/metaphysics';

const englishSectionValues = ENGLISH_SECTIONS.map((section) => section.slug) as [
    (typeof ENGLISH_SECTIONS)[number]['slug'],
    ...(typeof ENGLISH_SECTIONS)[number]['slug'][]
];

const metaphysicsSectionValues = METAPHYSICS_SECTIONS.map((section) => section.slug) as [
    (typeof METAPHYSICS_SECTIONS)[number]['slug'],
    ...(typeof METAPHYSICS_SECTIONS)[number]['slug'][]
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
        category: z.enum(['科技', '投资', '经济', '人文', '英语', '原创', '玄学', '其他']).default('其他'),
        englishSection: z.enum(englishSectionValues).optional(),
        metaphysicsSection: z.enum(metaphysicsSectionValues).optional(),
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

        if (data.category === '玄学' && !data.metaphysicsSection) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['metaphysicsSection'],
                message: 'Metaphysics posts must define a metaphysicsSection.',
            });
        }

        if (data.category !== '玄学' && data.metaphysicsSection) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['metaphysicsSection'],
                message: 'Only Metaphysics posts can define a metaphysicsSection.',
            });
        }
    }),
});

export const collections = { blog };

