import React from "react";
import Amazon from "../assests/amazon.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from "./";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px] max-w-[1500px] m-auto">
      <div className="flex bg-amazonclone text-white h-[60px]">
        {/* left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img className="h-[35px] w-[100px] m-2" src={Amazon} />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text:xs xl:text-sm">Deliver to</div>
            <div className="text:xs xl:text-base font-bold">Denmark</div>
          </div>
        </div>
        <div className="flex grow items-center">
          <Search />
        </div>
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text:xs xl:text-sm">Hello, Sign In </div>
            <div className="text:xs xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text:xs xl:text-sm">Returns</div>
            <div className="text:xs xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
          <div className="flex pr-3 pl-3">

            <ShoppingCartIcon className="h-[48px]" />
            <div className="relative">
              <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                {cart}
              </div>
            </div>
            <div className="mt-7 xl:text-sm font-bold">Cart</div>
          </div>
        </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:sm p-2 pl-6">
        <div>Today's Deal</div>
        <div>Customer Service</div>
        <div>Registery</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
