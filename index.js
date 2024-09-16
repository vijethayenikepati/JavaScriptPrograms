//COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count=0;
increaseBtn.onclick = function(){
    count++
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    if(countLabel.textContent==0){
        return
    }else{
    count--
    countLabel.textContent = count;
    }
}

resetBtn.onclick = function(){
    countLabel.textContent=0
}