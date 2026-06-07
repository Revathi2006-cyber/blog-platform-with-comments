import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function MyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const { data } = await API.get("/posts");
    setPosts(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        My Posts
      </h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">
              {post.title}
            </h2>

            <Link
              to={`/post/${post._id}`}
              className="text-blue-600"
            >
              View Post →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPosts;