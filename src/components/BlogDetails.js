import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <NavLink to={`/blog/${post.id}`} className="text-lg font-semibold">
        <span>{post.title}</span>
      </NavLink>
      <p>
        By <span className="italic text-sm font-semibold">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-semibold underline">{post.category}</span>
        </NavLink>
      </p> 
      <p>Posted on <span className="italic">{post.date}</span> </p>
      <p className="px-2 ">{post.content}</p>
      <div className="py-2 underline text-blue-700 ">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;