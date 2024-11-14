import { MENU_IMAGE_URL } from "../utils/constants";
import { MenuAdd } from "./MenuAdd";
export const MenuSubCategories = (props)=>{
    const {subCategory, subCategoryName} = props;
    // console.log(subCategoryName);
    // console.log(subCategory);
    
    return (
        <div className="w-full bg-gray-50 p-4 my-5 shadow-lg">
            <div className="flex justify-between  font-serif font-bold">
                <span>{subCategoryName} ({subCategory?.length})</span>
            </div>
            <div>
                {
                    subCategory.map((catagoryItem)=>{
                        return (
                            <div key={catagoryItem?.card?.info?.id} className="bg-slate-100 my-4 p-4 hover:cursor-pointer flex justify-between">
                                <div className="w-9/12">
                                    <div className="text-xl font-serif ">
                                        {catagoryItem?.card?.info?.name}
                                    </div>
                                    <div className="font-bold">
                                        ₹ {catagoryItem?.card?.info?.price/100 || catagoryItem?.card?.info?.variantsV2?.pricingModels[0]?.price/100}
                                    </div>
                                    <div className="flex flex-wrap text-xs">
                                        {catagoryItem?.card?.info?.description}
                                    </div>
                                </div>
                                <div>
                                    <img src={MENU_IMAGE_URL +catagoryItem?.card?.info?.imageId} className="w-36 h-36 rounded-2xl shadow-xl shadow-slate-500"/>
                                    <div className="absolute bg-white text-green-600 -my-4 font-bold rounded-lg shadow-slate-500 hover:cursor-pointer flex justify-between items-center mx-6"><MenuAdd/></div>
                                </div>
                                

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}