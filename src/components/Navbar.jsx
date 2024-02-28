import { Link } from "react-router-dom";
import logo from "../assets/kisspng-logo-e-commerce-electronic-business-ecommerce-5aca8122d1aa46.0475120015232207708588.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar flex  flex-row w-full bg-[#90e0ef] h-20 p-4 text-[#f8f9fa]  text-lg font-extrabold">
      <div className="leftSide flex w-full justify-start items-center  sm:ml-[4rem] ">
        <Link onClick={closeMobileMenu} to={"/"}>
          {" "}
          <img className="logo h-20 min-w-[8rem]" src={logo} />{" "}
        </Link>
      </div>
      <div
        className={
          isOpen
            ? "border-2 border-black absolute left-0 top-[80px] w-full p-0 h-[35%] flex flex-col items-center justify-around  bg-[#90e0ef] "
            : "rightSide items-center w-full flex justify-between mr-[4rem] sm:flex hidden"
        }
      >
        <Link
          onClick={closeMobileMenu}
          className=" p-[5px] hover:text-white after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
          to={"/store"}
        >
          {" "}
          Store{" "}
        </Link>
        <Link
          onClick={closeMobileMenu}
          className=" p-[5px] hover:text-white after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
          to={"/about"}
        >
          {" "}
          About{" "}
        </Link>
        <Link
          onClick={closeMobileMenu}
          className=" p-[5px] hover:text-white after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
          to={"/contact"}
        >
          {" "}
          Contact{" "}
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        // className=" sm:hidden  text-4xl"
        className={isOpen ? "text-4xl" : "sm:hidden  text-4xl"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
}

// className="rightSide items-center w-full flex justify-between mr-[4rem] sm:flex hidden "

// ternary for button sm hidden
