import type { FC } from "react";
import type { Post } from "../schemas/post.schema";

interface Props {
  post: Post;
}

const PostCard: FC<Props> = ({ post }) => {
  return (
    <div className="aspect-square overflow-hidden bg-neutral-900">
      <img
        src={post.img_url}
        alt={post.caption ?? "post image"}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export { PostCard };

