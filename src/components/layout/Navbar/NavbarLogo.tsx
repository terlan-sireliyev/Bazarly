const NavbarLogo = () => (
  <div className="relative select-none cursor-pointer group">
    <a
      href="/"
      className="relative select-none cursor-pointer group block"
      aria-label="Bazarly - Home"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight relative z-10 transition-all duration-300 group-hover:text-orange-500">
        Bazarly
      </h1>
      <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </a>
    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
  </div>
);

export default NavbarLogo;
