import { FC } from 'react';
import LikeButton from './LikeButton';
import { formatDate } from '@/lib/format';
import { PostType } from '@/types';

const Post: FC<PostType> = ({
  imageUrl,
  title,
  userFirstName,
  createdAt,
  content,
}) => {
  return (
    <article className="post">
      <div className="post-image">
        <img src={imageUrl} alt={title} />
      </div>
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
            <LikeButton />
          </div>
        </header>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default Post;
