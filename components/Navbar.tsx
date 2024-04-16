import { useCallback, useEffect, useState } from "react";

import MobileMenu from "./Mobilemenu";
import Navbaritem from "./Navbaritem";
import AccountMenu from "./AccountMenu";

import { FaChevronDown } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      }else{
        setShowBackground(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toogleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toogleProfileMenu = useCallback(() => {
    console.log(showProfileMenu);
    setShowProfileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                bg-zinc-900
                bg-opacity-90
                ${showBackground? 'bg-zinc-900 bg-opacity-90' : ''}
                `}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
        "
        >
          <Navbaritem label="Home" />
          <Navbaritem label="Series" />
          <Navbaritem label="Films" />
          <Navbaritem label="Popular" />
          <Navbaritem label="My list" />
          <Navbaritem label="Browse by languages" />
        </div>
        <div
          onClick={toogleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <FaChevronDown className={`text-white transition ${showMobileMenu ? `rotate-180` : `rotate-0`}`}  />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <CiBellOn />
          </div>

          <div
            onClick={toogleProfileMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden ">
              <img src="/images/default-avatar.png" alt="" />
            </div>
            <FaChevronDown className={`text-white transition ${showProfileMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showProfileMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
