function arr(nums,opr){
    let res=[]
    for(let i of nums){
        res.push(opr(i))
    }
    return res
}
function sq(x){
    return x*x;
}
function dub(x){
    return x*2
}

const nums=[1,2,3,4]

console.log('double is:',arr(nums,dub))
console.log('sq is:',arr(nums,sq))