import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";

const Body = () => {
    return (
      //this is the body class
      // in this body class contains search engine and restarunt card
      <div className="body">
        <div className="search"> Search </div>
        <div className="res-container">
  
          {
            //not using key (unacceptable) <<<<<<<< index as key <<<<<<< unique id
            resList.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))
          }
          
        </div>
      </div>
    );
  };

  export default Body;