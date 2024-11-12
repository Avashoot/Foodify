import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  
  const { resId } = useParams();
  
  const [resInfo, menuArray, menuArray1] = useRestaurentMenu(resId);

  // console.log(menuArray);
  const { name, costForTwoMessage, avgRating, cuisines, areaName } =
    resInfo?.cards[2]?.card?.card?.info || "unknown";

  const menuData = menuArray.map((cat, index) => {
    const title = cat?.card?.card?.title;
    const catMenu = cat?.card?.card?.categories;
    // console.log(catMenu);

    const catData = catMenu.map((catData, catIndex) => {
      const cat_title = catData?.title;
      const catTitleArray = catData?.itemCards;
      // const catTitleArray2 = menuArray1;
      // const catTitleArray = catTitleArray1.concat(catTitleArray2);

      const insideMenu = catTitleArray.map((c) => {
        const insideMenuName = c?.card?.info?.name;
        const menuPrice = c?.card?.info?.price / 100 || c?.card?.info?.variantsV2?.pricingModels[0]?.price /100;
        return (
          <div key={c?.card?.info?.id}>
            <h5>
              {insideMenuName} ====== {menuPrice.toString()}
            </h5>
          </div>
        );
      });
      // console.log(catTitleArray);
      return (
        <div key={catIndex}>
          <h3>{cat_title}</h3>
          <div>{insideMenu}</div>
        </div>
      );
    });

    return (
      <div key={index}>
        <h2>{title}</h2>
        <div>
          <h3>{catData}</h3>
          {/* <h3>{menu2}</h3> */}
        </div>
      </div>
    );
  });

  // console.log(menuArray1)
  const menuData1 = menuArray1.map((cat, index) => {
    const title = cat?.card?.card?.title;
    const catMenu = cat?.card?.card?.itemCards;

    const insideMenu = catMenu.map((c) => {
      const insideMenuName = c?.card?.info?.name;
      const menuPrice = c?.card?.info?.price / 100  || c?.card?.info?.variantsV2?.pricingModels[0]?.price /100;;
      return (
        <div key={c?.card?.info?.id}>
          <h5>
            {insideMenuName} ====== {menuPrice.toString()}
          </h5>
        </div>
      );
    });

    return (
      <div key={index}>
        <h2>{title}</h2>
        <h3>{insideMenu}</h3>
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

      <div>{menuData1}</div>

      <div>{menuData}</div>
    </div>
  );
};

export default RestaurentMenu;
