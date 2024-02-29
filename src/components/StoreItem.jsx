export function StoreItem({ image, name, price }) {
  return (
    <div className="storeItem border">
      <div
        className=" h-[250px] w-[250px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
