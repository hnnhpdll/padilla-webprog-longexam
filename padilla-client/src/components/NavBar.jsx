import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-yellow-400 bg-blue-900 text-yellow-400'
      : 'border-transparent text-blue-200 hover:border-yellow-400 hover:bg-blue-800 hover:text-yellow-300',
  ].join(' ');

const buttonClass =
  'rounded-full border-2 border-yellow-400 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition text-yellow-400 hover:bg-yellow-400 hover:text-blue-900';

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-yellow-400 bg-blue-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-9 w-9 rounded-full border-2 border-yellow-400 bg-white object-contain"
          />
          <p className="text-xl font-bold text-yellow-400">
            BulldogEx Shop
          </p>
        </NavLink>

        {/* Links */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/auth/signin" className={buttonClass}>
            Sign In
          </NavLink>

          <NavLink to="/auth/signup" className={buttonClass}>
            Sign Up
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default NavBar;