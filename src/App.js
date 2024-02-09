import React from 'react';
import TextToSpeech from './Components/TextToSpeech';
import './App.css'; 

const BlogPost = () => {
  const text =`Hello Tich`;
  return (
    <div>
      <h1>My Blog Post</h1>
      <TextToSpeech text={text} />
      <p>{text}</p>
    </div>
  );
};

export default BlogPost;