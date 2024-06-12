import { FC, Suspense } from "react";
import Posts from "@/components/Posts";
import { getPosts } from "@/lib/posts";

const LatestPosts = async () => {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

const Home: FC = () => {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&apos;s what you might&apos;ve missed.</p>
      <section id="latest-posts">
      <Suspense fallback={<p>Loading recent posts...</p>}>
        <LatestPosts />
      </Suspense>
      </section>
    </>
  );
}

export default Home;
