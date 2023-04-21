let change=true;
document.addEventListener("click",()=>{
    if(change){

        document.body.style.background="lightgreen";
        change=false;
    }
    else{
        document.body.style.background="white";
        change=true;
    }
})
let mouse={
    x:undefined,
    y:undefined,
}
document.addEventListener("mousemove",(events)=>{
    mouse.x=events.x;
    mouse.y=events.y;
    generateHeart();


})

