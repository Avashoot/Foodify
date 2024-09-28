import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuArray, setMenuArray] = useState([]);
  // const [filteredMenuArray, setFilteredMenuArray] = useState([]);

  useEffect(() => {
    fetchMenu();
    console.log(menuArray);
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4690213&lng=73.8640944&restaurantId=326931&catalog_qa=undefined&submitAction=ENTER"
    );

    const jasonVal = await data.json();

    console.log(jasonVal);
    setResInfo(jasonVal.data);

    let menu_array =
      jasonVal?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    menu_array = menu_array.filter((cat) => cat?.card?.card?.categories);
    setMenuArray(menu_array);
  };

  const { name, costForTwoMessage, avgRating, cuisines, areaName } =
    resInfo?.cards[2]?.card?.card?.info || "unknown";

  
  const menuData = menuArray.map((cat, index) => {
    const title = cat?.card?.card?.title;
    const catMenu = cat?.card?.card?.categories;
    //   console.log(catMenu);
    const catTitle = catMenu.map((catData, catIndex) => {
      const cat_title = catData?.title;
      const catTitleArray = catData?.itemCards;
      console.log(catTitleArray);
      const insideMenu = catTitleArray.map((c) => {
        const insideMenuName = c?.card?.info?.name;
        const menuPrice = c?.card?.info?.price / 100;
        return (
          <div key={c?.card?.info?.id}>
            <h4>
              {insideMenuName} ====== {menuPrice.toString()}
            </h4>
          </div>
        );
      });
      // console.log(catTitleArray);
      return (
        <div key={catIndex}>
          {cat_title}
          <div>{insideMenu}</div>
        </div>
      );
    });
    //   console.log(catTitle);
    return (
      <div key={index}>
        <h2>{title}</h2>
        <div>
          <h3>{catTitle}</h3>
        </div>
      </div>
    );
  });

  // console.log(filteredMenuArray);

  // console.log(filterMenu);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      <h3>{avgRating}</h3>
      <h3>{areaName}</h3>
      <h3>{cuisines.join(", ")}</h3>

      <h2>Menu</h2>

      <div>{menuData}</div>
    </div>
  );
};

export default RestaurentMenu;
