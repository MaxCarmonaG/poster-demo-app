import { FC } from 'react';
import Posts from '@/components/Posts';
import { getPosts } from '@/lib/posts';

const FeedPage: FC = async () => {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}

export default FeedPage;
