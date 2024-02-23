import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar flex  flex-row w-full bg-[#90e0ef] h-20 p-4 text-white text-lg font-extrabold">
      <div className="leftSide flex w-full justify-start items-center ml-[4rem] ">
        <Link to={"/"}> Home </Link>
      </div>
      <div className="rightSide items-center w-full flex justify-between mr-[4rem]">
        <Link to={"/store"}> Store </Link>
        <Link to={"/about"}> About </Link>
        <Link to={"/contact"}> Contact </Link>
      </div>
    </div>
  );
}
