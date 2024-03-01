import { StoreItem } from "../components/StoreItem";
import { StoreList } from "../data/StoreList";

export function Store() {
  return (
    <div className="store w-full h-auto flex justify-center items-center flex-col ">
      <h1 className="storeTitle text-[60px] ">Our Store</h1>
      <div className="storeList  w-[70vw] h-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 place-items-center">
        {StoreList.map((item, key) => {
          return (
            <StoreItem
              name={item.name}
              key={key}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
