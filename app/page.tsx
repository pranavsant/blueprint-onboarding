import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import "@/styles/global.css";
import type { PostComment } from "@/supabase/query";
import Post, { PostProps } from "@/components/Post";
import * as query from "@/supabase/query";
import styles from "./styles.module.css";

async function getAllPostsWithDetails(): Promise<PostProps[]> {
  try {
    const [posts, locations, comments] = await Promise.all([
      query.getAllPosts(),
      query.getAllLocations(),
      query.getAllComments(),
    ]);

    const locationMap = new Map(locations.map(loc => [loc.id, loc]));

    const commentsByPostId = comments.reduce(
      (postIdToCommentsMap, comment) => {
        if (!postIdToCommentsMap[comment.post_id])
          postIdToCommentsMap[comment.post_id] = [];
        postIdToCommentsMap[comment.post_id].push(comment);
        return postIdToCommentsMap;
      },
      {} as Record<number, PostComment[]>,
    );

    return posts.map(post => {
      const location = locationMap.get(post.location_id);
      const postComments = commentsByPostId[post.id] || [];
      const dateInput = post.created_at;

      const date = new Date(dateInput);

      const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
      });

      return {
        key: post.id,
        username: post.user_name,
        npo: post.npo_name,
        city: location?.city_name ?? "Unknown City",
        state: location?.state_abbr ?? "Unknown State",
        text: post.post_text,
        image: post.image_link,
        likeCount: post.num_likes,
        postDate: formattedDate,
        comments: postComments.map(c => ({
          username: c.user_name,
          text: c.comment_text,
          likeCount: c.num_likes,
        })),
      };
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
}

export default async function Home() {
  const posts = await getAllPostsWithDetails();

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.contentScroll}>
          {posts.map(post => (
            <Post
              key={post.key}
              username={post.username}
              npo={post.npo}
              city={post.city}
              state={post.state}
              text={post.text}
              image={post.image}
              likeCount={post.likeCount}
              postDate={post.postDate}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
