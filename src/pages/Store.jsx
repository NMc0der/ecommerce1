import { StoreItem } from "../components/StoreItem";
import { StoreList } from "../data/StoreList";

export function Store() {
  return (
    <div>
      <h1>Our Store</h1>
      <div className="storeList">
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
