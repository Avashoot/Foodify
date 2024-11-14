import RestaurantCard, { OpenRestaurant } from "./RestaurantCard";
import { useEffect, useState , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // local state variable function
  const [listOfRestautant, setListOfRestaurent] = useState(
    //passing the resList as default data
    // resList
    []
  );
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  // console.log("Body renders");

  const [searchText, setSearchText] = useState("");

  const [currentTime, setCurrentTime] = useState(new Date());

  const OpenedRestaurent = OpenRestaurant(RestaurantCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

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
      jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurent(
      jsonValue?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // console.log(listOfRestautant);
  };

  //User online status
  const status = useOnlineStatus();

  if (status === false) {
    return (
      <>
        <h1>You are Offline</h1>
      </>
    );
  }

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
      <div className="flex my-4 justify-between">
        <div className="text-xl font-serif bg-slate-300 p-4 rounded-md hover:text-white hover:bg-slate-600 mr-4 mx-4">
          <button
            onClick={() => {
              //upadate the state variable
              const filteredList1 = filteredRestaurent.filter((res) => {
                return res.info.avgRating > 4.1;
              });
              // console.log(filteredList);
              setFilteredRestaurent(filteredList1);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div>
        <button
            className="text-xl font-serif bg-slate-300 p-4 rounded-full hover:text-white hover:bg-slate-600 mr-4"
          >
            UserName : 
          </button>
          <input
            type="text"
            className="border border-black align-middle text-xl  mr-4 p-2 rounded-full w-64 font-serif"
            value={loggedInUser}
            onChange={(e) => {
              return setUserName(e.target.value);
            }}
          />
        </div>

        <div className="">
          <input
            type="text"
            className="border border-black align-middle text-xl  mr-4 p-2 rounded-full w-64 font-serif"
            value={searchText}
            onChange={(e) => {
              return setSearchText(e.target.value);
            }}
          />
          <button
            className="text-xl font-serif bg-slate-300 p-4 rounded-full hover:text-white hover:bg-slate-600 mr-4"
            onClick={() => {
              //Filter the restaurent card and update the UI
              //Search Text
              // console.log(searchText);
              // const previousListOfRestaurent = listOfRestautant;
              const filteredList2 = listOfRestautant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurent(filteredList2);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {
          //not using key (unacceptable) <<<<<<<< index as key <<<<<<< unique id
          filteredRestaurent.map((restaurant) => {
            // console.log(restaurant);
            const nextCloseTime = new Date(
              restaurant?.info?.availability?.nextCloseTime
            );

            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {
                  /* if the restaurent is Open make it vissible or make it gratscale */

                  currentTime < nextCloseTime ? (
                    <RestaurantCard resData={restaurant} />
                  ) : (
                    <OpenedRestaurent resData={restaurant} />
                  )
                }
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;
