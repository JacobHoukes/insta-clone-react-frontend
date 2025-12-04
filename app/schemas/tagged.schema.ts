import { z } from 'zod';

export const taggedSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  tagged_user_id: z.number(),
  created_at: z.string(),
});

export const taggedListSchema = z.array(taggedSchema);

export type Tagged = z.infer<typeof taggedSchema>;
