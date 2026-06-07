import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold text-slate-800 mb-6">
          Share Your Ideas With The World
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Create blogs, engage with readers, and build your community.
        </p>

        <Link
          to="/register"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          Start Blogging
        </Link>
      </div>
    </div>
  );
}

export default Home;