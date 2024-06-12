import { FC } from "react";
import { PostType } from "@/types";
import Post from "./Post";

const Posts: FC<{ posts: PostType[] }> = ({ posts }) => {
  if (!posts.length) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
