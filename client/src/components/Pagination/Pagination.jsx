import React from 'react'

const Pagination = ({setCurrent, size ,totalCards, current}) =>{
    const display =  Math.ceil (size/totalCards)
    let total = [];
    for(let i = 1 ; i<=display; i++){
        total.push(i)
    }
    const handleOnClick= (e) =>{
        setCurrent(e.target.value)
    }
    const handlePre= (e) =>{
        if(current>1){
        setCurrent(current-1)}
    }
    const handleNext= (e) =>{
        if(current<total.length){
        setCurrent(current+1)}
    }
    return (
        <div>
            <button onClick={handlePre}>{'<'}</button>
            {
                total.map(e=><button value={e} onClick={handleOnClick}>{e}</button>)
            }
            <button onClick={handleNext}>{'>'}</button>
        </div>
    )
}

export default Pagination