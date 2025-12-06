import type { Post } from '~/schemas/post.schema';
import type { Tagged } from '~/schemas/tagged.schema';
import { getImageUrl } from '~/services/api';

export function PostCard({ post }: { post: Post | Tagged }) {
  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6">
      <div className="p-4">
        <p className="font-bold">webeet_user</p>
      </div>
      <img
        src={getImageUrl(post.img_url)}
        alt={post.caption || 'Instagram post'}
        className="w-full h-auto aspect-square object-cover"
      />
      <div className="p-4">
        <p>
          <span className="font-bold mr-2">webeet_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}
