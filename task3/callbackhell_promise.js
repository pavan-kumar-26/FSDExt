function task1(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("task1 done")
        }, 1000);
    })
}
function task2(){
    return  new Promise((resolve)=>{
        setTimeout(() => {
            console.log("task2 done")
        }, 1000);
    })
}

function task3(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("task3 done")
        }, 1000);
    })
}

task1().then(task2()).then(task3()).then(()=>{
    console.log("all tasks done")
})