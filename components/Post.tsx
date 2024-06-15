import { FC } from 'react';
import LikeButton from './LikeButton';
import { formatDate } from '@/lib/format';
import { PostType } from '@/types';
import PostImage from './PostImage';

interface PostProps extends PostType {
  action: (id: number) => Promise<void>;
}

const Post: FC<PostProps> = ({
  id,
  imageUrl,
  title,
  userFirstName,
  createdAt,
  content,
  isLiked,
  action,
}) => {
  return (
    <article className="post">
      <PostImage imageUrl={imageUrl} alt={title} />
      <div className="post-content">
        <header>
          <div>
            <h2>{title}</h2>
            <p>
              Shared by {userFirstName} on{' '}
              <time dateTime={createdAt}>{formatDate(createdAt)}</time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, id)}
              className={isLiked ? 'liked' : ''}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default Post;
