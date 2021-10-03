import React, { useState, useEffect } from "react";
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
    <React.Fragment>
      <AddStatus />
      {posts.map((post) => (
        <Status post={post.data} id={post.id} key={post.id} />
      ))}
    </React.Fragment>
  );
};

export default NewFeed;
