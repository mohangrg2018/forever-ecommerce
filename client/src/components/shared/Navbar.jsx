import { assets } from "@/assets/assets";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="container__width py-2">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={assets.logo} className="w-32" alt="" />
        </Link>

        {/* navigation menu */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-10 lg:gap-32">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* icons menu */}
        <div className="flex items-center gap-4">
          <img src={assets.search_icon} className="w-5" alt="" />
          <div>
            <img src={assets.profile_icon} className="w-5" alt="" />
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5" alt="" />
            <p className="absolute -bottom-1 -right-1 bg-black text-white w-4 h-4 flex items-center justify-center rounded-full">
              0
            </p>
          </Link>
          <div className="sm:hidden">
            <Sheet open={showMenu} onOpenChange={setShowMenu}>
              <SheetTrigger>
                <img
                  onClick={() => setShowMenu(!showMenu)}
                  src={assets.menu_icon}
                  className="w-5 cursor-pointer"
                  alt=""
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <ul className="flex flex-col gap-4">
                      <li onClick={() => setShowMenu(false)}>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li onClick={() => setShowMenu(false)}>
                        <NavLink to="/collection">Collection</NavLink>
                      </li>
                      <li onClick={() => setShowMenu(false)}>
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li onClick={() => setShowMenu(false)}>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
