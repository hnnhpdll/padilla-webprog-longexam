import { Outlet } from 'react-router-dom';
import signinImage from '../assets/img/signin.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen w-full bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="hidden lg:block">
          <img
            src={signinImage}
            alt="Auth Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <main className="flex items-center justify-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="w-full max-w-lg">
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;