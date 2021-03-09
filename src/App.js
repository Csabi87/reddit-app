import './App.css';
import db from './firebase.config';
import React,{useState,useEffect} from 'react';

function App() {
  const [blogs, setBlogs]=useState([]);

  const fetchBlogs=async()=>{
    const response=db.collection('posts');
    const data=await response.get();
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  
  return (
    <div className="App">
      {
        blogs && blogs.map(blog=>{
          return(
            <div key='blog.title' className="blog-container">
              <h4>{blog.title}</h4>
              <p>{blog.url}</p>              
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
