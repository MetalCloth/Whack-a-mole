let game = document.querySelectorAll(".col");
let row = document.querySelectorAll(".row");
let time = 30;
document.getElementById("Time").innerHTML = `Time:${time}s`;
let score = 0; 
let cancel = false; 
let first = true;
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    //if first is true then start the game
    if (first == true) {
        first = false;
        main();
    }
    //if btn is stop then stop the game    
    if (btn.innerHTML == "Stop") {
        cancel = true;
        score = 0;
        time = 0;
        btn.innerHTML = "Start";
    }
    else {
        
        cancel = false;
        score = 0;
        document.getElementById("score").innerHTML = `Score:${score}`
        time = 30;
        clearTimeout(random);
        btn.innerHTML = "Stop";
    }
});
function random() {
    
    //it is function to select random div and make the mole pop
    let random = Math.floor(Math.random() * game.length);
    game[random].classList.add("s");
    game[random].classList.add("a");
    const func = () => {
        if (game[random].classList.contains("s")) {
            //if div is clicked and mole is popped then score is incremented
            score++;
            document.getElementById("score").innerHTML = `Score:${score}`;
            game[random].removeEventListener("click", func);
        }
    };
    //20 min kaam tf am i doing
    game[random].addEventListener("click", func);
    setTimeout(() => {
        game[random].classList.remove("s");
        game[random].classList.remove("a");
        game[random].removeEventListener("click", func);
    }, 900);
}
function main() {
    //it is function to keep track of time
    setInterval(() => {
        if (time >= 0 && cancel == false) {
            random();
            document.getElementById("Time").innerHTML = `Time:${time}s`;
            time--;
        }
        else {
            clearTimeout(random);
        }
    }, 1000);
}
