import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data =
      await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${params.resId}&catalog_qa=undefined&submitAction=ENTER
`);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json, "resmenu data soon...");
  };

  const { name, costForTwo, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  console.log(itemCards, "Hello");

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h2>{name}</h2>
        <h4>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h4>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}
              {item.card.info.price / 100 ||
                item.card.info.price.defaultPrice / 100}
            </li>
          ))}
          {/* <li>{itemCards[0].card.info.name}sdfvnvnvb</li> */}
        </ul>
      </div>
    </>
  );
}

export default RestaurantMenu;
