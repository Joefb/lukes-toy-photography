import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex h-16 items-center justify-between bg-gray-800 text-white font-serif font-semibold text-lg">
      <p className='text-sm font-serif p-5 text-gray-400'>Lukes.Toy.Photography</p>
      <div className="flex items-center">
        <button className="bg-gray-700 text-gray-400 m-4 px-4 py-1 rounded font-semibold hover:bg-gray-500 transition">
          <NavLink to="/">Home</NavLink>
        </button>
        <button className="bg-gray-700 text-gray-400 m-4 px-4 py-1 rounded font-semibold hover:bg-gray-500 transition">
          <NavLink to="/">My Work</NavLink>
        </button>
        <button className="bg-gray-700 text-gray-400 m-2 px-4 py-1 rounded font-semibold hover:bg-gray-500 transition">
          <NavLink to="/">Store</NavLink>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
