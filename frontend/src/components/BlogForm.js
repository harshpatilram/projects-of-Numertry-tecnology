import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogForm = () => {
  const [blog, setBlog] = useState({ title: "", content: "", author: "" });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(response => setBlog(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = id ? `http://localhost:5000/api/blogs/${id}` : "http://localhost:5000/api/blogs";
    const method = id ? axios.put : axios.post;
    
    method(apiUrl, blog)
      .then(() => navigate("/"))
      .catch(error => console.error(error));
  };

  return (
    <div className="card p-4">
      <h2>{id ? "Edit Blog" : "Add New Blog"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" value={blog.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea name="content" className="form-control" value={blog.content} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" name="author" className="form-control" value={blog.author} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">{id ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default BlogForm;
