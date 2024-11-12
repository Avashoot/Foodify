import { useEffect, useState } from "react";
import { RES_DETAILS_URL_1 } from "./constants";

const useRestaurentMenu = (resId) => {
  // fetch the data

  const [resInfo, setResInfo] = useState(null);
  const [menuArray, setMenuArray] = useState([]);
  const [menuArray1, setMenuArray1] = useState([]);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(RES_DETAILS_URL_1 + resId);

    const jsonVal = await data.json();
    setResInfo(jsonVal?.data);

    let menu_array =
      jsonVal?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let menu_array1 = menu_array;
    menu_array = menu_array.filter((cat) => cat?.card?.card?.categories);

    menu_array1 = menu_array1.filter((cat) => cat?.card?.card?.itemCards);

    setMenuArray(menu_array);
    setMenuArray1(menu_array1);
  };

  return [resInfo, menuArray, menuArray1];
};

export default useRestaurentMenu;
