import type { Highlight } from '~/schemas/highlight.schema';

type HighlightStoryProps = {
  highlight: Highlight;
};

export function HighlightStory({ highlight }: HighlightStoryProps) {
  return (
    <div>
      <img src={highlight.cover_image_url} alt={highlight.title} />
      <h2>{highlight.title}</h2>
    </div>
  );
}
