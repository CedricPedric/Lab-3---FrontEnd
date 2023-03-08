function Button () {
    const getElement = document.getElementById("container")

    for(var i = 1; i <= 30; i++){
        let test = 0
        let btn = document.createElement("button");
        btn.innerHTML = (i);
        getElement.appendChild(btn);
        btn.addEventListener("click", function () {
            test ++
            if(test == 1) {
                btn.style.backgroundColor = "red";
            } else if (test == 2) {
                btn.style.backgroundColor = "purple";
            }else if (test == 3) {
                btn.style.backgroundColor = "blue";
            }else if (test == 4) {
                btn.style.backgroundColor = "black";
            }else if (test == 5) {
                getElement.removeChild(btn)
            }

        });
    }
}

Button () 