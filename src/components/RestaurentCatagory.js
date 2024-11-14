import { useState } from "react";
import { MenuCatagories, MenuItemList } from "./MenuItemList";

export const RestaurentCatagory = (props) =>{
    const {data, showItems, setShowIndex, closeIndex ,closeItem} = props;
    // console.log(data.itemCards);
    const handleClick = ()=>{
        // showItems ? setShowItems(false) : setShowItems(true);
        if(showItems === true){
            closeIndex();
        }else{
            closeItem();
            setShowIndex();

        }
        
    }

    return (
        <div>
            {/* header */}
            <div className="w-full bg-gray-50 p-4 my-5 shadow-lg">
                <div className="flex justify-between  font-serif font-bold text-xl hover:cursor-pointer" onClick={handleClick}>
                    <span className="text-xl">{data?.title} ({data?.categories?.length})</span>
                    <span>{showItems? "⬆️" :"⬇️"}</span>
                </div>
                {/* body */}
                <div>
                    {showItems && <MenuCatagories category = {data?.categories}/>}
                </div>
            </div>
            {/* body */}
            {/* for catogary cards */}
            {/* <MenuItemList item = {data?.categories}/> */}
        </div>
    )
}


 export const RestaurentCatogaryItemCard = (props) =>{
    const {data, showItems, setShowIndex, closeIndex, closeCatogery } = props;
    // console.log(data.itemCards);
    const handleClick = ()=>{
        // showItems ? setShowItems(false) : setShowItems(true);
        if(showItems === true){
            closeIndex();
        }else{
            closeCatogery();
            setShowIndex();
            
        }
        
    }

    // const [showItems, setShowItems] = useState(false);

    return (
        <div>
            {/* header */}
            <div className="w-full bg-gray-50 p-4 my-5 shadow-lg">
                <div className="flex justify-between  font-serif font-bold text-xl hover:cursor-pointer" onClick={handleClick}
                >
                    <span>{data?.title} ({data?.itemCards.length})</span>
                    <span>{showItems? "⬆️" :"⬇️"}</span>
                </div>
                {/* body */}
                <div>
                        {showItems && <MenuItemList items = {data.itemCards}/>}
                </div>
            </div>
            
            
            
        </div>
    )
}

