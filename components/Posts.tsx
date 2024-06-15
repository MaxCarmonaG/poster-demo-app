'use client';

import { FC, useOptimistic } from 'react';
import { PostType } from '@/types';
import Post from './Post';
import { togglePostLikeStatus } from '@/actions/posts';

const Posts: FC<{ posts: PostType[] }> = ({ posts }) => {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic<
    PostType[],
    number
  >(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(
      ({ id }) => id === updatedPostId,
    );

    if (updatedPostIndex === -1) {
      return prevPosts;
    }

    const updatedPost = { ...prevPosts[updatedPostIndex] };
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;
    const newPosts = [...prevPosts];
    newPosts[updatedPostIndex] = updatedPost;
    return newPosts;
  });

  const updatedPost = async (postId: number) => {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  };

  return !optimisticPosts.length ? (
    <p>There are no posts yet. Maybe start sharing some?</p>
  ) : (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post {...post} action={updatedPost} />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
