import './App.scss';
import db from './firebase.config.js';
import React,{useState,useEffect} from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    db.collection('posts').get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          const document = {
              ...doc.data(),
              id: doc.id
          };
          data.push(document);
        })
        setPosts(data);
      });

  }, []);


  return (
    <main>
      {posts.map(post => (
        <div className="container" key={post.id}>
          <div className="vote">
            <p>{post.score}</p>
          </div>
          <div className="content">
            <h1>{post.title}</h1>
            {post.content &&
            <p>{post.content}</p>
          }
            <img src={post.url} alt=""/>
          </div>
        </div>
      ))}
    </main>
  );
}

export default App;
