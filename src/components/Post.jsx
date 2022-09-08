import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./postSlice";

const Post = () => {
  const post = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {post.map((element, index) => (
        <div key={index}>{element.title}</div>
      ))}
    </div>
  );
};

export default Post;
