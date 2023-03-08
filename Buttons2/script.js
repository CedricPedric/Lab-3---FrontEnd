const container = document.getElementById("container")

function buttonRed(){
    button.style.backgroundColor = "red";
}

for (let x = 1; x < 31; x++){
    const button = document.createElement("button");
        button.innerText = `Button ${x}`
        container.appendChild(button);
        button.addEventListener("click", function () {
            button.style.backgroundColor = "red";});
}