import { highlightSchema, type Highlight } from '~/schemas/highlight.schema';
import { HighlightStory } from '~/components/HighlightStory';
import { api } from '~/services/api';
import { useLoaderData, type LoaderFunctionArgs } from 'react-router';

export async function loader({ params }: LoaderFunctionArgs) {
  const highlightId = params.id;

  if (!highlightId) {
    throw new Response('Highlight ID is required', { status: 400 });
  }

  try {
    const response = await api.get(`/highlights/${highlightId}`);
    return highlightSchema.parse(response.data);
  } catch (error) {
    console.error(error);
    throw new Response('Highlight not found', { status: 404 });
  }
}

export default function HighlightDetail() {
  const highlight = useLoaderData() as Highlight;

  return (
    <div>
      <h1>{highlight.title}</h1>
      {/* Render your <HighlightStory /> component here */}
    </div>
  );
}
