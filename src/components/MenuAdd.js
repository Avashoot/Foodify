import { useState } from "react"

export const MenuAdd = ()=>{
    const [number, setNumber] = useState(0);

    if(number ===0){
        return (
            <>
                <div className="flex items-center justify-between rounded w-24 px-7 py-1 text-lg font-bold mx-auto" onClick={
                    ()=>{
                        a = number
                        a++;
                        setNumber(a);
                    }
                }>ADD</div>
            </>
        )
    }
    return (
        <>
            <div className="flex items-center justify-between rounded w-24 px-2 py-1 text-lg font-bold mx-auto">
                <div onClick={
                    ()=>{
                        a = number
                        if(a>0){
                            a--;
                            setNumber(a);
                        }
                    }
                } className="hover:bg-slate-200 px-2">-</div>
                <div className="">{number}</div>
                <div onClick={
                    ()=>{
                        a = number
                        a++;
                        setNumber(a);
                    }
                } className="hover:bg-slate-200 px-2">+</div>
            </div>
        </>
        
    );
}