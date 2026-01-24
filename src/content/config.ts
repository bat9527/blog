import { defineCollection, z } from 'astro:content';

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
        claps: z.number().default(0),
        comments: z.number().default(0),
        featured: z.boolean().optional(),
    }),
});

export const collections = { blog };
