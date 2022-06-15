import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByMinMax } from "../../../redux/action";
import '../Order/Order.css'
const MinMax = () =>{
    const [input,setInput] = useState(true)
    const dispatch = useDispatch()
    const eventClick = (e) =>{
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