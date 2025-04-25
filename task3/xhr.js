const xhr = new XMLHttpRequest()


xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');
xhr.onload=()=>{
    if(xhr.status===200){
        console.log(xhr.responseText);
        const data= JSON.parse(xhr.responseText)
        console.log("response:",data);
    }
    else{
        console.log('Not found')
    }
}
xhr.onerror=()=>{
    console.log("error loading xhr")
}

xhr.send()