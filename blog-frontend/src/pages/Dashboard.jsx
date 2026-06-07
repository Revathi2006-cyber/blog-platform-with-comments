import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-500 mb-8">
        Manage your blog content
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/create"
          className="bg-blue-600 text-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            Create Post
          </h2>
          <p>Create a new blog article</p>
        </Link>

        <Link
          to="/myposts"
          className="bg-green-600 text-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            My Posts
          </h2>
          <p>View and manage your posts</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;