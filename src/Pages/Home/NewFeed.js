import React, { useState, useEffect } from "react";
import styles from "./NewFeed.module.css";
import Status from "./Status";
import AddStatus from "./AddStatus";
import { db } from "../../Firebase/Firebase";

const NewFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setPosts(posts);
      });
  }, []);
  return (
    <div className={styles}>
      <AddStatus />
      {posts.map((post) => (
        <Status post={post.data} id={post.id} key={post.id} />
      ))}
    </div>
  );
};

export default NewFeed;
