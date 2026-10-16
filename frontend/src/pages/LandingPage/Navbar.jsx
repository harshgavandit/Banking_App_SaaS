import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 shadow-md fixed w-full z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <Link to="/" className="hover:text-gray-300">
            <span className="text-2xl font-bold">LendFlow</span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="/?demo=1" className="hover:text-gray-300">Explore demo</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
