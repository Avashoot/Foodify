import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

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

  const {loggedInUser} = useContext(UserContext);

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
    <div className="relative w-60 m-10 bg-slate-50  rounded-xl hover:scale-95 group-hover:translate-z-10 transition-all duration-300 hover:cursor-pointer">
      <div className="">
        <img className="food-picture h-44 w-full rounded-2xl" src={CDN_URL + cloudinaryImageId} />
        <div className="absolute top-36 bg-gradient-to-t from-gray-900 to-transparent w-full text-white font-bold text-xl h-8 rounded-b-xl pb-2 px-1">
          {resData.info.aggregatedDiscountInfoV3.header +
            " " +
            resData.info.aggregatedDiscountInfoV3.subHeader}
        </div>
      </div>
      
      <div className="flex flex-col">
        <h3 className=" text-xl font-bold font-serif">{name}</h3>
        <div className="flex">
          <img className="star w-6" src={require("/images/star.png")} />
          <div id="numberRating">
            {avgRating} 🕝 {sla.slaString}
          </div>
        </div>
        <div id="cuisine" className="">{cuisines.slice(0,3).join(",  ")}</div>
        {/* This is just for undrestanding of  */}
        <div>{loggedInUser}</div>
      </div>
    </div>
  );
};

//Higher order component
// input -> restaurentCard  output->is Open = false grayscale
export const OpenRestaurant = (RestaurantCard) =>{
  return (props)=>{
    return (
      <>
        <div className="grayscale">
          <RestaurantCard {...props}/>
        </div>
      </>
    )
  }
}

export default RestaurantCard;
