import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local state variable function
  const [listOfRestautant, setListOfRestaurent] = useState(
    //passing the resList as default data
    // resList
    []
  );
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  // console.log("Body renders");

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    // console.log("UseEffect called");
    // fetch the data
    fetchTheData();
  }, []);

  const fetchTheData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // const jasonValue = data.then((res)=>{res.json()});

    const jsonValue = await data.json();
    //These below console.log are made for information perpose n
    // console.log(jsonValue);
    // console.log(resList);
    // console.log(jsonValue.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // optional chaining
    setListOfRestaurent(
      jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // console.log(listOfRestautant)
  };

  //conditional rendering shimmer UI
  // if(listOfRestautant.length === 0){
  //   return(
  //     <>
  //       <button className="shimmer-button">

  //       </button>
  //       <div className="shimmer-container">
  //             {Array.from({ length: 20 }).map((_, index) => (
  //               <Shimmer key={index} />
  //             ))}
  //       </div>
  //     </>

  //   )
  // }

  // The code above is same as below, in below code we are using turrnurry operator

  return listOfRestautant.length === 0 ? (
    <>
      <button className="shimmer-button"></button>
      <button className="shimmer-button"></button>
      <div className="shimmer-container">
        {Array.from({ length: 20 }).map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </>
  ) : (
    //this is the body class
    // in this body class contains search engine and restarunt card
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //upadate the state variable
            const filteredList = listOfRestautant.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            // console.log(filteredList);
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search-bar">
          <input type="text" className="bar" value={searchText} onChange={
            (e)=>{
              setSearchText(e.target.value)
            }
          }/>
          <button className="search-btn" onClick={
            ()=>{
              //Filter the restaurent card and update the UI
              //Search Text
              // console.log(searchText);
              // const previousListOfRestaurent = listOfRestautant;
              const filteredList2 = listOfRestautant.filter((res)=>
              {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              })
              setFilteredRestaurent(filteredList2);
            }
          }>Search</button>
        </div>
      </div>
      <div className="res-container">
        {
          //not using key (unacceptable) <<<<<<<< index as key <<<<<<< unique id
          filteredRestaurent.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
