import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { CiLinkedin } from "react-icons/ci";
// import { FaFacebookSquare } from "react-icons/fa";

export function Footer() {
  return (
    <div className="footer w-full h-[200px] bg-[#121619] flex justify-center items-center flex-col pt-[10px]">
      <div className="socialMedia text-white m-[20px] text-[70px] cursor-pointer flex">
        {" "}
        <FaInstagram />
        <FaFacebookSquare />
        <FaSquareXTwitter />
        <FaLinkedin />
      </div>
      <p className="text-white">&copy; 2024 eshopstore.com</p>
    </div>
  );
}
