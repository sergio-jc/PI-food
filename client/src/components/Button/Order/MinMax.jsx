import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByMinMax } from "../../../redux/action";

const MinMax = () =>{
    const [input,setInput] = useState(true)
    const dispatch = useDispatch()
    const eventClick = (e) =>{
        dispatch(orderByMinMax(input))
        setInput(!input)
    }
    return (
        <div>
            <button onClick={eventClick}>{input? 'Max-Min': "Min-Max"}</button>
        </div>
    )
} 

export default MinMax