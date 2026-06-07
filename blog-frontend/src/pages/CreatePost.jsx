import { useState } from "react";
import API from "../services/api";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await API.post("/posts", post);

    alert("Post created");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6">
          Create New Post
        </h1>

        <form onSubmit={submit}>
          <input
            className="w-full border p-3 rounded mb-4"
            placeholder="Post Title"
            onChange={(e) =>
              setPost({
                ...post,
                title: e.target.value,
              })
            }
          />

          <textarea
            rows="10"
            className="w-full border p-3 rounded mb-4"
            placeholder="Write your content..."
            onChange={(e) =>
              setPost({
                ...post,
                content: e.target.value,
              })
            }
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;