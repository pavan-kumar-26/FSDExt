function step1(callback){
    setTimeout(()=>{
        console.log("step1 done")
        callback();
    },1000)
}
function step2(callback){
    setTimeout(()=>{
        console.log("step2 done")
        callback();
    },1000)
}
function step3(callback){
    setTimeout(()=>{
        console.log("step3 done")
        callback();
    },1000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log('all task done!')
        })
    })
})