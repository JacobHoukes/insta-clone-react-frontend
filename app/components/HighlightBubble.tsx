import { Link } from 'react-router';
import type { Highlight } from '~/schemas/highlight.schema';

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="flex flex-col items-center justify-center"
    >
      <img src={highlight.cover_image_url} />
    </Link>
  );
}
