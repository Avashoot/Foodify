import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import {RestaurentCatagory, RestaurentCatogaryItemCard} from "./RestaurentCatagory";
import { useState } from "react";

const RestaurentMenu = () => {
  
  const { resId } = useParams();
  
  const [resInfo, menuArray, menuArray1] = useRestaurentMenu(resId);

  const [showIndexItemCards, setShowIndexItemCards] = useState(); 

  const [showIndexCategory, setShowIndexCategory] = useState();

  

  // console.log(menuArray);
  const { name, costForTwoMessage, avgRating, cuisines, areaName, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info || "unknown";


  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu w-7/12 mx-auto">
      <div className="font-serif text-center text-5xl font-bold my-5 bg-orange-100 p-10">{name}</div>
      <div className="">
        <div className="font-bold text-xl">{costForTwoMessage}</div>
        <div className="flex"><img className="star w-6" src={require("/images/star.png")} />{avgRating}</div>
        <div>{totalRatingsString}</div>

        <div>{areaName}</div>
        <div>{cuisines.join(", ")}</div>
      </div>
      

      <div>Menu</div>

      <div>
        {menuArray1.map((catagory, index)=>{
          return (
            <div key={index}>
              {/* This os the controled component */}
              <RestaurentCatogaryItemCard  data={catagory?.card?.card}
              showItems={index===showIndexItemCards? true: false }
              setShowIndex={()=>setShowIndexItemCards(index)}
              closeIndex = {()=>setShowIndexItemCards()}
              closeCatogery ={()=>setShowIndexCategory()}
              />
            </div>
          )
          
        })}
      </div> 
      <div>
        {menuArray.map((catagory, index)=>{
          return (
            <div key={index}>
              <RestaurentCatagory  data={catagory?.card?.card}
              showItems={index===showIndexCategory? true: false }
              setShowIndex={()=>setShowIndexCategory(index)}
              closeIndex = {()=>setShowIndexCategory()}
              closeItem ={()=>setShowIndexItemCards()}
              />
            </div>
          )
        })}
      </div>
      {/* <div>{menuData1}</div>

      <div>{menuData}</div> */}
    </div>
  );
};

export default RestaurentMenu;
