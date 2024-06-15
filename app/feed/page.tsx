import { FC } from 'react';
import Posts from '@/components/Posts';
import { getPosts } from '@/lib/posts';

export const generateMetadata = async () => {
  const numberOfPosts = (await getPosts()).length;

  return {
    title: `Browse all our ${numberOfPosts}`,
    description: 'Browse all our posts.',
  };
};

const FeedPage: FC = async () => {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
};

export default FeedPage;
