let count=document.querySelector("#count");
let increaseBtn=document.querySelector("#increaseBtn");
let decreaseBtn=document.querySelector("#decreaseBtn");
let resetBtn=document.querySelector("#resetBtn");
let num = 0;
increaseBtn.addEventListener("click",()=>{
     num++;
    count.innerText=num;
    console.log("number add");
});
decreaseBtn.addEventListener("click",()=>{
    num--;
    count.innerText=num;
    console.log("decrease");
});
resetBtn.addEventListener("click",()=>{
    num=0;
    count.innerText=num;
    console.log("reset");
});
