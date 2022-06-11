
export const orderA = (array) => {
    function SortArrayAZ(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }
    var a = array.sort(SortArrayAZ);
    return a;
} 

export const orderZ= (array) => {
    function SortArrayZA(x, y){
        if (x.name < y.name) {return 1;}
        if (x.name > y.name) {return -1;}
        return 0;
    }
    var z = array.sort(SortArrayZA);
    return z
}