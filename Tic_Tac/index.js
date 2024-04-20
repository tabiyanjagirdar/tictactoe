let boxes = document.querySelectorAll(".box");
let reset =  document.querySelector("#reset");
let newGame = document.querySelector("#new");
let winnerBox = document.querySelector(".winner-box");
let msg = document.querySelector("#msg");

let turno = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turno = true;
    enablelVal();
    winnerBox.classList.add('hide');
}



boxes.forEach((box) =>{
box.addEventListener("click",()=>{
   if(turno == true){
    box.innerHTML = 'O'
    turno = false;
      }else{
    box.innerHTML = 'X'
    turno = true;
   }
   box.disabled = true;
   checkWinner();
});
});

const disablVal = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
  

const enablelVal = () =>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
}
}

const showWinner = (winner) =>{
msg.innerHTML = `Congratulations , Winner is ${winner}`
winnerBox.classList.remove('hide');
disablVal();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
      let post1 = boxes[pattern[0]].innerText;
      let post2 = boxes[pattern[1]].innerText;
      let post3 = boxes[pattern[2]].innerText;

      if(post1 != "" &&  post2 != ""  , post3 != "" ){
        if(post1 == post2 && post2 == post3){
            showWinner(post1);
        }
      }
    }
};

newGame.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);