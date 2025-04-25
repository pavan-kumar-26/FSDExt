const arr=[10,20,30]
const[a,b,c]=arr
console.log(a,b,c)

let [x,,y]=arr
console.log(x,y)

var a1,a2
var a2=30
var a1=20
[a1,a2]=[a2,a1]
console.log(a1,a2)


var [j,k=10]=[20]
console.log(j,k)


var obj={
    name:'abc',
    age:12,
    addr:{
        city:hyd
    }
}

var {name,age}=obj

var {addr:city}=obj

var {name,age,country='india'}=obj
