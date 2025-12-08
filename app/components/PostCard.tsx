import type { Post } from '~/schemas/post.schema';
import type { Tagged } from '~/schemas/tagged.schema';
import { getImageUrl } from '~/services/api';
import { Form } from 'react-router';

export function PostCard({ post }: { post: Post | Tagged }) {
  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6 shadow-sm">
      <div className="flex items-center justify-between p-4">
        <p className="font-semibold text-sm">webeet_user</p>
        <Form method="post" action={`/posts/${post.id}/delete`}>
          <button
            type="submit"
            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
            onClick={(e) => {
              if (!confirm('Are you sure you want to delete this post?')) {
                e.preventDefault();
              }
            }}
          >
            🗑️ Delete
          </button>
        </Form>
      </div>

      <img
        src={getImageUrl(post.img_url)}
        alt={post.caption || 'Instagram post'}
        className="w-full h-auto aspect-square object-cover"
      />

      <div className="p-4">
        <p className="text-sm">
          <span className="font-semibold mr-2">webeet_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}
