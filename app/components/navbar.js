// components/Navbar.js
import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <Link href="/">
        <a className="text-xl font-bold">Car Details</a>
      </Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
