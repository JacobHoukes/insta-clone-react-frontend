import type { ActionFunctionArgs } from 'react-router';
import { redirect } from 'react-router';
import { api } from '~/services/api';

export async function action({ params }: ActionFunctionArgs) {
  const postId = params.id;

  if (!postId) {
    throw new Response('Post ID required', { status: 400 });
  }

  try {
    await api.delete(`/posts/${postId}`);
    return redirect('/profile/posts/grid');
  } catch (error) {
    console.error('Failed to delete post:', error);
    throw new Response('Failed to delete post', { status: 500 });
  }
}
