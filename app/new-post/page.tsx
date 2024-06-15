import { FC } from 'react';
import PostForm from '@/components/PostForm';
import { createPost } from '@/actions/posts';

const NewPostPage: FC = () => {
  return <PostForm action={createPost} />;
};

export default NewPostPage;
