import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn = !!localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">
          BlogSpace
        </Link>

        <div className="flex gap-4">
          {!isLoggedIn ? (
            <>
  <Link
    to="/register"
    className="bg-blue-600 px-4 py-2 rounded-lg"
  >
    Get Started
  </Link>
</>
          ) : (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/create">Create Post</Link>
              <Link to="/myposts">My Posts</Link>

              <button onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;