function solution (X, Y, D) {
    /*
    X starting position
    Y target position
    D frog distance effort
    Distance = Y - X
    Distance % D
    */

    const distance =  Y - X
    if(D > distance){
        return 1
    }
    return Math.round(distance/D)
}

const minJumbs = solution(10, 85, 300)
console.log(minJumbs)