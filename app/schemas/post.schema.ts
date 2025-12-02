import { z } from "zod";

const postSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

const postsSchema = z.array(postSchema);

type Post = z.infer<typeof postSchema>;

export { postSchema, postsSchema };
export type { Post };

