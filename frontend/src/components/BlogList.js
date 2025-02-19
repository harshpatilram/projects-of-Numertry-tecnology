import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteBlog = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => setBlogs(blogs.filter(blog => blog.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Link to="/add" className="btn btn-success mb-3">Add New Blog</Link>
      <div className="row">
        {blogs.map(blog => (
          <div key={blog.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                <p><strong>Author:</strong> {blog.author}</p>
                <Link to={`/edit/${blog.id}`} className="btn btn-primary me-2">Edit</Link>
                <button onClick={() => deleteBlog(blog.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
