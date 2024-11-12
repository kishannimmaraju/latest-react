import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "655339",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG",
  //       locality: "Gudimalkapur",
  //       areaName: "Inner Ring Road",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 3.8,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "655338",
  //       name: "Domi",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1ba9479c-6527-4f4f-a2e6-f8c070a2171c_655339.JPG",
  //       locality: "Gudimalkapur",
  //       areaName: "Inner Ring Road",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 4.5,
  //     },
  //   },
  // ];
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                // res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.name.includes(
                //   searchText
                // )

                // res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name?.includes(
                //   searchText
                // ),
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />   // Hardcoded Data
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} /> */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info?.id} /> // Loop Data
        ))}
      </div>
    </div>
  );
};

export default Body;
