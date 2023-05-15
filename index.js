function openMain() {
    var x = document.getElementById("hidden");
    x.style.display = "hidden";

}


console.log("loading");
function paint(color) {
    console.log(color);
    var x = document.getElementById("circleId");
    // x.style.backgroundColor = color;
    x.style = `background-color:${color}`;
    console.log(x);
}

function random(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);

    let y = "rgb("+r+","+g+","+b+")";
    let x = document.getElementById("circleId");
    x.style.backgroundColor = y;
    console.log(document.getElementById("colorRGB").innerHTML=`${r}, ${g}, ${b}`);
}

const value = document.querySelector("#red_num");
const NUM = document.querySelector("#COLOR_RED");
value.textContent = NUM.value;
NUM.addEventListener("input", (event)=>{
    value.textContent = event.target.value;
})