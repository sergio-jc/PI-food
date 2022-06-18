import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { orderByAlf } from "../../../redux/action";
import '../Order/Order.css'
const Order = () =>{
    const recipes = useSelector((state)=>state.recipes)
    const [input,setInput] = useState(true)
    const dispatch = useDispatch()
    const eventClick = (e) =>{
        if(typeof(recipes)==='string') return ;
        dispatch(orderByAlf(input))
        setInput(!input)
    }
    return (
        <div>
            <button onClick={eventClick} className={'order_alf'}>{input? 'A-Z': "Z-A"}</button>
        </div>
    )
} 

export default Order