
export const orderA = (array) => {
    function SortArrayAZ(x, y){
        if (x.name.toUpperCase() < y.name.toUpperCase()) {return -1;}
        if (x.name.toUpperCase() > y.name.toUpperCase()) {return 1;}
        return 0;
    }
    var a = array.sort(SortArrayAZ);
    return a;
} 

export const orderZ= (array) => {
    function SortArrayZA(x, y){
        if (x.name.toUpperCase() < y.name.toUpperCase()) {return 1;}
        if (x.name.toUpperCase() > y.name.toUpperCase()) {return -1;}
        return 0;
    }
    var z = array.sort(SortArrayZA);
    return z
}

export const orderMin = (array) => {
  let min = array.sort((a,b)=>a.healthScore - b.healthScore);
  return min
}

export const orderMax = (array) => {
  let max = array.sort((a,b)=>b.healthScore - a.healthScore);
  return max
}