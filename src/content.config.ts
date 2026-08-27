import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string(),
		heroImageAlt: z.string().min(1),
		heroImageCaption: z.string().min(1),
		category: z.enum(['Philosophy', 'Mindfulness']),
		tags: z.array(z.string()).default([]),
		readTime: z.number().int().positive(),
		views: z.number().int().nonnegative().default(0),
		likes: z.number().int().nonnegative().default(0),
		author: z.string().default('Attila Kulik'),
	}),
});

export const collections = { blog };
