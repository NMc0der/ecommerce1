export function StoreItem({ image, name, price }) {
  return (
    <div className="storeItem border rounded-[15px] w-[300px] h-[300px] m-[20px] shadow-[0px_3px_15px_rgba(0,0,0,0.2)] hover:shadow-[0px_3px_15px_rgba(0,0,0,0.5)] hover:transition-[.3s] hover:cursor-pointer">
      <div
        className=" h-[250px] w-full bg-center bg-cover bg-no-repeat rounded-tl-[15px] rounded-tr-[15px]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1 className="ml-[20px]">{name}</h1>
      <p className="ml-[20px]">{price}</p>
    </div>
  );
}
