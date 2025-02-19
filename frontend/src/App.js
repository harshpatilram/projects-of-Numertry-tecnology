import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="container mt-4 p-4 bg-white rounded shadow">
          <h1 className="text-center text-primary">Blog Management System</h1>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/add" element={<BlogForm />} />
            <Route path="/edit/:id" element={<BlogForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
