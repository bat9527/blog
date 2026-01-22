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
        claps: z.number().default(0),
        comments: z.number().default(0),
        featured: z.boolean().optional(),
    }),
});

export const collections = { blog };
