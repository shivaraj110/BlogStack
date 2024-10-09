"use client";

import axios from "axios";
import { useState } from "react";
import { backnedUrl } from "../config/url";
import { useNavigate } from "react-router-dom";

export function WriteBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [published, setPublished] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await axios.post(
      `${backnedUrl}/api/v1/blog`,
      {
        title,
        content,
        tags: tags.split(","),
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }
    );

    res.data ? setPublished(true) : setPublished(false);
    setIsSubmitting(false);
    // Reset form or show success message
    setTimeout(() => {
      nav("/blogs");
    }, 100);
  };

  return (
    <div className="container mx-auto px-4 py-8 poppins-extralight">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl poppins-semibold mb-4">Write Your Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter your blog title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="Write your blog content here"
                rows={10}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 mb-1">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Enter tags, separated by commas"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 font-medium focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting
                ? "Publishing..."
                : published
                ? "Published"
                : "Publish"}
            </button>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl poppins-semibold mb-4">Preview</h2>
          <div className="prose max-w-none">
            <h1 className="text-3xl font-semibold mb-4">
              {title || "Your Blog Title"}
            </h1>
            <div className="whitespace-pre-wrap">
              {content || "Your blog content will appear here"}
            </div>
            {tags && (
              <div className="mt-4">
                <strong>Tags: </strong>
                {tags.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
