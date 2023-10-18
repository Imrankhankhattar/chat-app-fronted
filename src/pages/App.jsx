import { Link } from "react-router-dom";
import '../App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <span className="text-2xl font-semibold">My Chat App</span>
          <div className="flex justify-end items-center">
            <Link to="/login" className="mr-4  hover:text-blue-700">Login</Link>
          </div>
        </div>

      </header>
      <main className="container mx-auto py-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to My Chat App</h2>
          <p className="text-gray-700">
            Start chatting with your friends and have a great time!
          </p>
        </div>
      </main>
      <footer className="bg-gray-300 text-gray-700 py-2">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} My Chat App
        </div>
      </footer>
    </div>
  );
}

export default App;
