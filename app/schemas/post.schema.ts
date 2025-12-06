import { z } from 'zod';

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

// Schema for creating a new post (for frontend validation)
export const createPostInputSchema = z
  .object({
    caption: z.string().min(1, 'Caption is required.').max(255).optional(),
    image: z
      .instanceof(File)
      .optional() // For file input
      .refine(
        (file) => {
          if (!file) return true;
          const valid_types = ['image/jpeg', 'image/png', 'image/gif'];
          return valid_types.includes(file.type);
        },
        { message: 'Invalid file type.' }
      ),
  })
  .refine((data) => data.caption || data.image, {
    message: 'Either an image or a caption is required.',
    path: ['image'], // Attach error to image field if both are missing
  });

export type CreatePostInput = z.infer<typeof createPostInputSchema>;
