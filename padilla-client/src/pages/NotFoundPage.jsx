import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import heroImage from '../assets/img/nubdexchange_logo.png';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-zinc-900 px-6">

      {/* GLASS CARD */}
      <div className="w-full max-w-lg rounded-3xl border-2 border-yellow-400 bg-white/10 p-10 text-center backdrop-blur-xl shadow-2xl">

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-yellow-400 relative">
          <span className="relative inline-block before:absolute before:left-1 before:top-0 before:text-blue-400 before:content-['404'] before:opacity-70">
            404
          </span>
        </h1>

        {/* TITLE */}
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Page Not Found
        </h2>

        {/* MESSAGE */}
        <p className="mt-3 text-blue-100">
          This page seems to have left BulldogEx campus 🐶  
          Let’s bring you back safely.
        </p>

        {/* IMAGE */}
        <div className="mt-6 flex justify-center">
          <img
            src={heroImage}
            alt="Mascot"
            className="h-40 w-40 object-contain"
          />
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex justify-center gap-3">
          <Button to="/" variant="primary">
            Back Home
          </Button>
          <Button to="/products">
            View Products
          </Button>
        </div>

        {/* QUICK LINKS */}
        <div className="mt-6 flex justify-center gap-5 text-xs text-blue-200">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/products" className="hover:text-yellow-400">Products</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
        </div>

      </div>

    </div>
  );
};

export default NotFoundPage;