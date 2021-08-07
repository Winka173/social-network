import React, { useState, useEffect } from "react";
import styles from "./HomeFeed.module.css";
import HomeFeedStatus from "./HomeFeedStatus";
import HomeFeedNew from "./HomeFeedNew";
import { db } from "../../Firebase/Firebase";

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setPosts(posts);
    });
  }, []);
  return (
    <div className={styles}>
      <HomeFeedNew />
      {posts.map((post) => (
        <HomeFeedStatus post={post.data} key={post.id} />
      ))}
    </div>
  );
};

export default HomeFeed;
