import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.any().optional(),
});

export const collections = {
  docs: docsCollection,
};
