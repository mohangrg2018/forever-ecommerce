import { assets } from "@/assets/assets";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import StoreContext from "@/context/StoreContext";

const Navbar = () => {
  const { getCartTotal } = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="container__width">
      <div className="flex items-center justify-between py-4">
        <Link to="/">
          <img src={assets.logo} className="w-24 sm:w-32" alt="logo" />
        </Link>

        {/* desktop navigation */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-10 lg:gap-20 text-sm">
            <li className="uppercase">
              <NavLink to="/" className="cursor-pointer">
                Home
              </NavLink>
            </li>
            <li className="uppercase">
              <NavLink to="/collection" className="cursor-pointer">
                collection
              </NavLink>
            </li>
            <li className="uppercase">
              <NavLink to="/about" className="cursor-pointer">
                about
              </NavLink>
            </li>
            <li className="uppercase">
              <NavLink to="/contact" className="cursor-pointer">
                contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* icon navigation */}
        <div className="flex items-center gap-4">
          <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
          {/* profile navigation */}
          <div>
            <img src={assets.profile_icon} className="w-5" alt="" />
          </div>
          {/* cart items */}
          <div className="relative">
            <img src={assets.cart_icon} className="w-5" alt="" />
            <span className="absolute -bottom-1 -right-2 inline-flex text-[12px] items-center justify-center rounded-full h-4 w-4 text-white bg-primary">
              {getCartTotal()}
            </span>
          </div>
          {/* mobile navigation */}
          <div className="sm:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <img src={assets.menu_icon} className="w-5" alt="" />
              </SheetTrigger>
              <SheetContent>
                <ul className="h-full flex flex-col items-start mt-[20%]">
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full border-b border-gray-200 pl-6 py-2 uppercase"
                  >
                    <Link to="/">home</Link>
                  </li>
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full border-b border-gray-200 pl-6 py-2 uppercase"
                  >
                    <Link to="/collection">collection</Link>
                  </li>
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full border-b border-gray-200 pl-6 py-2 uppercase"
                  >
                    <Link to="/about">about</Link>
                  </li>
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full border-b border-gray-200 pl-6 py-2 uppercase"
                  >
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
