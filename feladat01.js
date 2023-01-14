function Feladat01(param1){
    let solution = 0;
    let tmp = param1.length;
    while(tmp>0){
        for(let i=0;i<tmp;i++){
            solution += i;
        }
        tmp--;
    }
    return solution;
}