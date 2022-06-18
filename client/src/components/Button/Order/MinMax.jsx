import React, { useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { orderByMinMax } from "../../../redux/action";
import '../Order/Order.css'
const MinMax = () =>{
    const recipes = useSelector((state)=>state.recipes)
    const [input,setInput] = useState(true)
    const dispatch = useDispatch()
    const eventClick = (e) =>{
        if(typeof(recipes)==='string') return ;
        dispatch(orderByMinMax(input))
        setInput(!input)
    }
    return (
        <div>
            <button onClick={eventClick} className={'order_alf'}>{input? 'Max-Min': "Min-Max"}</button>
        </div>
    )
} 

export default MinMax