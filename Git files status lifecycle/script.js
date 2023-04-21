const body=document.querySelector("body")
const h1=document.querySelector("h1")

let condition=true;
const hello=()=>{
    if(condition){

        condition=false;
        body.style.background="blue";
        h1.style.color="white";
    }
    else{
        body.style.background="white";
        h1.style.color="blue";
        condition=true;

    }
    

}
window.addEventListener("click",hello)


setInterval(()=>{
    hello()
},1000)