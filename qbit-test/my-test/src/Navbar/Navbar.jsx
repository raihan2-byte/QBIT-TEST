import React from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


const listMenu = [
  { name: "Beranda", content: [], path: "/" },
  { name: "Blog", content: [], path: "/blog" },
  { name: "Tentang Kami", content: [], path: "/about-us" },
];

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className={` items-center gap-4 justify-center flex-col absolute w-full h-screen  top-0 left-0  transition-opacity duration-500 ease-in-out lg:relative lg:h-auto lg:flex-row lg:translate-x-0 lg:opacity-100 lg:justify-end  ${
        openNav ? "flex lg:hidden z-10 pointer-events-auto bg-white" : "hidden lg:flex "
      }`}
    >
      {listMenu.map((item, key) => {
      
          return (
            <Link
              key={key}
              to={item.path}
              className="block antialiased text-sm font-light leading-normal text-blue-gray-900 p-1"
            >
              <p className="flex items-center duration-200 hover:text-[#6B6B0E] whitespace-nowrap">
                {item.name}
              </p>
            </Link>
          );
  
      })}
    </ul>
  );

  return (
    <nav className=" font-syne font-medium block w-full text-black sticky top-0 z-10 px-0 py-2 bg-opacity-100 rounded-none h-max">
      <div className="flex items-center justify-between text-blue-gray-900 px-14 relative w-full flex-row-reverse md:flex-row">
        <Link
          to="/"
          className="block antialiased font-sans text-base leading-relaxed text-inherit cursor-pointer py-1.5 font-medium z-20"
        >
          <div className="flex gap-5 items-center">
           
            <p>QBIT</p>
           
          </div>
        </Link>
        <button
          className=" relative align-middle select-none text-center uppercase transition-all max-w-[40px] max-h-[40px] text-xs lg:hidden z-20"
          onClick={() => setOpenNav(!openNav)}
          type="button"
        >
          {openNav ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        {navList}
       
      </div>
    </nav>
  );
};

export default Navbar;