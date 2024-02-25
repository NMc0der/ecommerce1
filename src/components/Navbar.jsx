import { Link } from "react-router-dom";
import logo from "../assets/kisspng-logo-e-commerce-electronic-business-ecommerce-5aca8122d1aa46.0475120015232207708588.png";

export function Navbar() {
  return (
    <div className="navbar flex  flex-row w-full bg-[#90e0ef] h-20 p-4 text-[#f8f9fa]  text-lg font-extrabold">
      <div className="leftSide flex w-full justify-start items-center ml-[4rem] ">
        <Link to={"/"}>
          {" "}
          <img className="logo h-20 min-w-[8rem]" src={logo} />{" "}
        </Link>
      </div>
      <div className="rightSide items-center w-full flex justify-between mr-[4rem] ">
        <Link
          className=" p-[5px] hover:text-white after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
          to={"/store"}
        >
          {" "}
          Store{" "}
        </Link>
        <Link
          className=" p-[5px] hover:text-white after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
          to={"/about"}
        >
          {" "}
          About{" "}
        </Link>
        <Link
          className=" p-[5px] hover:text-white after:bg-[#fb8500] after:h-[3px] after:w-[0px] after:absolute relative after:bottom-[-10px] after:left-0 after:transition-[.3s] hover:after:w-full"
          to={"/contact"}
        >
          {" "}
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}
