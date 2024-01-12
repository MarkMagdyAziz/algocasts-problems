function solution(A){
    let hash = {}
    if(!A || A.length == 0) return null;
    for (const value of A) {
       if(!hash[value]){
        hash[value] = 1
       } else if (hash[value] === 1){
        hash[value] = 2
       }
    }
    for (const key in hash) {
        if(hash[key] == 1) {
            return key
        }
    }
}

const a = solution([9,3,9,3,9,7,9])

console.log(a)