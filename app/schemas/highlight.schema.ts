import { z } from 'zod';

export const highlightSchema = z.object({
  id: z.number(),
  cover_image_url: z.string().url(),
  title: z.string(),
});

export const highlightListSchema = z.array(highlightSchema);

export type Highlight = z.infer<typeof highlightSchema>;
