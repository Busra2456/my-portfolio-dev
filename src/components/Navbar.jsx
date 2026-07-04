import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      title: "Hero",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
     {
      title: "Footer",
      path: "/footer",
     }
    
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-10 navbar fixed z-10 bg-opacity-60 bg-black/65 text-white shadow-sm py-4">
      <div className="navbar max-w-7xl mx-auto px-6 text-black">
       
        <div className="navbar-start">
         
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
              className="menu menu-sm dropdown-content flex items-center gap-8 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link className="hover:text-cyan-400 duration-300 font-medium"
                   href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

           <h1 className="text-2xl font-bold text-cyan-400">
          Busra
        </h1>
        </div>

        
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-white hover:text-cyan-400 transition  duration-300 font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="navbar-end">
          <button className="hidden md:block bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-medium duration-300">
          Resume
        </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;