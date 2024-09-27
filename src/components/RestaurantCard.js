import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    avgRating,
    sla,
    cuisines,
  } = resData.info;

  if (!aggregatedDiscountInfoV3) {
    // If aggregatedDiscountInfoV3 is undefined or null, initialize it
    resData.info.aggregatedDiscountInfoV3 = {
      header: "",
      subHeader: "",
    };
  } else if (Object.keys(aggregatedDiscountInfoV3).length === 0) {
    // If it exists but is empty, set default values
    aggregatedDiscountInfoV3.header = "";
    aggregatedDiscountInfoV3.subHeader = "";
  }

  return (
    <div className="res-card">
      <div className="img-container">
        <img className="food-picture" src={CDN_URL + cloudinaryImageId} />
        <div className="offers">
          {resData.info.aggregatedDiscountInfoV3.header +
            " " +
            resData.info.aggregatedDiscountInfoV3.subHeader}
        </div>
      </div>
      <div id="text">
        <h3 id="resName">{name}</h3>
        <div className="rating">
          <img className="star" src={require("/images/star.png")} />
          <a id="numberRating">
            {avgRating} 🕝 {sla.slaString}
          </a>
        </div>
        <div id="cuisine">{cuisines.join(",  ")}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
