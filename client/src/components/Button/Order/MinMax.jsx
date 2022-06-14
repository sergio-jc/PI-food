import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderByAlf } from "../../../redux/action";

const Order = () =>{
    const [input,setInput] = useState(true)
    const dispatch = useDispatch()
    const eventClick = (e) =>{
        dispatch(orderByAlf(input))
        setInput(!input)
    }
    return (
        <div>
            <button onClick={eventClick}>{input? 'A-Z': "Z-A"}</button>
        </div>
    )
} 

export default Order