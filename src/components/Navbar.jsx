import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "#Home",
    },
    {
      title: "About",
      path: "#About",
    },
    {
      title: "Skills",
      path: "#Skills",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#Contact",
    },
     {
      title: "Footer",
      path: "#Footer",
     }
    
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 py-4 text-white shadow-sm navbar bg-opacity-60 bg-black/65">
      <div className="px-6 mx-auto text-black navbar max-w-7xl">
       
        <div className="navbar-start">
         
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="flex items-center gap-8 p-2 mt-3 shadow menu menu-sm dropdown-content w-52 rounded-box bg-base-100"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link className="font-medium duration-300 hover:text-cyan-400"
                   href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

           <h1 className="text-2xl font-bold text-cyan-400">
          Busra
        </h1>
        </div>

        
        <div className="hidden navbar-center lg:flex ">
          <ul className="flex items-center gap-5 menu menu-horizontal">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="font-medium text-white transition duration-300 hover:text-cyan-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="navbar-end">
          <button className="hidden px-5 py-2 font-medium duration-300 rounded-lg md:block bg-cyan-500 hover:bg-cyan-600">
          Resume
        </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;