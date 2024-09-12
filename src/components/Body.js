import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  // local state variable function
  const [listOfRestautant, setListOfRestaurent] = useState(
    //passing the resList as default data
    resList
    // {
    //   info: {
    //     id: "151518",
    //     name: "Bakery World",
    //     cloudinaryImageId: "mt2aggiscfl3yviatwng",
    //     cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
    //     avgRating: 4.4,
    //     sla: {
    //       slaString: "40-45 mins",
    //     },
    //   },
    // },
    // {
    //   info: {
    //     id: "151519",
    //     name: "Cake Shop",
    //     cloudinaryImageId: "mt2aggiscfl3yviatwng",
    //     cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
    //     avgRating: 3.8,
    //     sla: {
    //       slaString: "40-45 mins",
    //     },
    //   },
    // },
    // {
    //   info: {
    //     id: "151520",
    //     name: "Kitchen kala",
    //     cloudinaryImageId: "mt2aggiscfl3yviatwng",
    //     cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
    //     avgRating: 4.01,
    //     sla: {
    //       slaString: "40-45 mins",
    //     },
    //   },
    // },
  );

  //Normal JS variable
  let listOfRestautant2 = [
    {
      info: {
        id: "151518",
        name: "Bakery World",
        cloudinaryImageId: "mt2aggiscfl3yviatwng",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 4.4,
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
    {
      info: {
        id: "151519",
        name: "Cake Shop",
        cloudinaryImageId: "mt2aggiscfl3yviatwng",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 3.8,
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
    {
      info: {
        id: "151520",
        name: "Kitchen kala",
        cloudinaryImageId: "mt2aggiscfl3yviatwng",
        cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
        avgRating: 4.01,
        sla: {
          slaString: "40-45 mins",
        },
      },
    },
  ];
  return (
    //this is the body class
    // in this body class contains search engine and restarunt card
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => { 
            // alert("Button clicked");
            // Write a filter logic to filterout top rated restaurent
            // you cannot asign with the same name 
            // like given
            // listOfRestautant = listOfRestautant.filter((res)=>{
            //   return res.info.avgRating >4;
            // })
            // console.log(listOfRestautant);

            //upadate the state variable 
            const filteredList = listOfRestautant.filter((res)=>{
              return res.info.avgRating >4.2;
            });
            // console.log(filteredList);
            setListOfRestaurent(filteredList);
            
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {
          //not using key (unacceptable) <<<<<<<< index as key <<<<<<< unique id
          listOfRestautant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
