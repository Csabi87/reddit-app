import "./App.css";
import db from "./firebase.config.js";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          const document = {
            ...doc.data(),
            id: doc.id,
          };
          data.push(document);
        });
        setPosts(data);
      });
  }, []);

  return (
    <main>
      <header className="header">
        <h1 className="siteName">r/SPACE</h1>
      </header>
      {posts.map((post) => (
        <div className="container" key={post.id}>
          <div className="vote">
            <p>fel</p>
            <p>{post.vote}</p>
            <p>le</p>
          </div>
          <div className="content">
            <h1>{post.title}</h1>
            {post.content && <p>{post.content}</p>}
            <div className="img-container">
              <img src={post.url} alt="" />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default App;
