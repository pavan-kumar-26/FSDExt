function task(num){
    return new Promise((resolve)=>{
        setTimeout(() => {
           console.log(`task${num} done`) 
           resolve()
        }, 2000);
    })
}

async function runTask(){
    const r1= await task(1) ;
    const r2= await task(2) ;
    const r3= await task(3) ;
}
runTask()