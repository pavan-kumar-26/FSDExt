const sym1= Symbol('id')
const sym2 =Symbol('id')
console.log(sym1===sym2)

const obj={
    name:'abc',
    age:12,
    [sym1]:345
}
console.log(obj)
for(keys in obj){
    console.log(keys)
}