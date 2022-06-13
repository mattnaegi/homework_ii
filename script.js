console.info("i'm getting read");

const position = [];
//select button
let button = document.querySelector("button");
console.log("button: ", button);

//add event listener for mouseover
button.addEventListener("mouseover", run);
button.addEventListener("click", buttonClick);

//make button display at different position when event listener is triggered
function run(event) {
    console.log("i'm runnin");

    button.style.top = parseFloat(button.style.top || 50 + "px") + 20 + "px";
    button.style.left = parseFloat(button.style.left || 300 + "px") + 20 + "px";

}

function buttonClick(event) {
    console.log("i've been clicked");

    button.className = "clicked";
    button.innerHTML = "You win!";
    
}
