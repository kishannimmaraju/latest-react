import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; // 1st method for destructure the object
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info; // 2nd method destructure the object
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img
          className="res-log"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info?.cloudinaryImageId
          }
          alt=""
        />
        <h3>{resData.info?.name}</h3>
        <h4>{resData.info?.cuisines.join(", ")}</h4>
        <h4>{resData.info?.avgRating} Rating</h4>
        <h4>{resData.info?.costForTwo}</h4> */}

      <img className="res-log" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
