import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home h-[90vh] bg-img1 flex items-center p-6 bg-cover bg-no-repeat">
      <div className="headerContainer text-white ">
        <h1 className="title text-8xl mb-8 font-playfair ">E-Shop</h1>
        <p className="title-text text-3xl ">Buy what you need!</p>
        <Link to={"/store"}>
          <button className="shop-btn  h-14 w-44 mt-10 bg-[#90e0ef] hover:text-[#fb8500] rounded-md text-white font-bold">
            SHOP NOW
          </button>
        </Link>
      </div>
    </div>
  );
}
