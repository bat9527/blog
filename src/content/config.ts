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

const songs = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        artist: z.string(),
        lyricist: z.string().optional(),
        composer: z.string().optional(),
        arranger: z.string().optional(),
        originalArtist: z.string().optional(),
        producer: z.string().optional(),
        album: z.string().optional(),
        publishedAt: z.string(),
        coverUrl: z.string().optional(),
        tags: z.array(z.string()).default([]),
        credits: z.array(z.object({
            role: z.string(),
            name: z.string(),
        })).optional(),
    }),
});

export const collections = { blog, songs };
