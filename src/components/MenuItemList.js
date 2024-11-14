import {  MENU_IMAGE_URL } from "../utils/constants";
import { MenuAdd } from "./MenuAdd";
import { MenuSubCategories } from "./MenuSubCategories";

export const MenuItemList = (props)=>{
    const {items} = props;
    // console.log(items);
    
    return (
        <>
            {/* name, price, description, image */}
            <div>
                {items.map((menuItem)=>{
                    
                    return(
                        <div key={menuItem?.card?.info?.id} className="bg-slate-100 my-4 p-4  flex justify-between ">
                            <div className="w-9/12">
                                <div className="text-xl font-serif ">
                                    {menuItem?.card?.info?.name}
                                </div>
                                <div className="font-bold">
                                    ₹ {menuItem?.card?.info?.price/100 || menuItem?.card?.info?.variantsV2?.pricingModels[0]?.price/100}
                                </div>
                                <div className="flex flex-wrap text-xs text-black">
                                    {menuItem?.card?.info?.description}
                                </div>
                            </div>
                            <div className="">
                                <img src={MENU_IMAGE_URL +menuItem.card.info.imageId} className=" w-36 h-36 rounded-2xl shadow-xl shadow-slate-500"/>
                                <div className="absolute bg-white text-green-600 -my-4 font-bold rounded-lg shadow-slate-500 hover:cursor-pointer flex justify-between items-center mx-6"><MenuAdd/></div>
                            </div>
                            
                        </div>

                    )
                })}
            </div>
        </>
    )
}


export const MenuCatagories = (props)=>{
    const {category} = props;
    // console.log(category);
    return(
        <div>
            <div>
                {category.map((subCategory, index)=>{
                    return (
                        <div key={index}>
                            <MenuSubCategories subCategoryName ={subCategory.title} subCategory={subCategory?.itemCards}/>
                        </div>

                    );
                })}

            </div>
        </div>
    )
}