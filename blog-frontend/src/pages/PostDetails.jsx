import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const postRes = await API.get(`/posts/${id}`);
      const commentRes = await API.get(`/comments/${id}`);

      setPost(postRes.data);
      setComments(commentRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();

    try {
      await API.post(`/comments/${id}`, {
        text,
      });

      setText("");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) return <h2>Loading...</h2>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <div className="mb-6">
          <p className="font-semibold">
            {post.author?.name}
          </p>
        </div>

        <p className="text-gray-700">
          {post.content}
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">
          Comments ({comments.length})
        </h2>

        <form
          onSubmit={handleComment}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <textarea
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
            placeholder="Write a comment..."
            className="w-full border rounded-lg p-3"
            rows="4"
            required
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-white shadow-md rounded-xl p-5"
            >
              <h3 className="font-semibold">
                {comment.user?.name}
              </h3>

              <p className="text-gray-700">
                {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostDetails;