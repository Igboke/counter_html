const decreaseBtn = document.getElementById("decreasebtn");
const increaseBtn = document.getElementById("increasebtn");
const resetBtn = document.getElementById("resetbtn");
const label = document.getElementById("myLabel");
let count = 0;

decreaseBtn.onclick = function (){
    if (count === 0){
        label.textContent = count;
    }
    else{
        count--;
        label.textContent=count;
    }
}
increaseBtn.onclick = function(){
    count++;
    label.textContent=count
}
resetBtn.onclick = function(){
    count = 0;
    label.textContent=0
}


