import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content',
  schema: z.any().optional(),
});

export const collections = {
  docs: docsCollection,
};
