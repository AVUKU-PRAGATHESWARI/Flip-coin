const innertext = document.querySelector(".para");
const msgContainer = document.querySelector(".msg-container");
const btn1 = document.querySelector("#btn-msg");
const choose = document.querySelectorAll(".choose");
const coinImages = document.querySelectorAll(".coin img");

const getChoice = () => {
    const options = ["HEAD", "TAIL"];
    const randidx = Math.floor(Math.random() * 2);
    return options[randidx];
}

const reset = () => {
    msgContainer.classList.add("hide");
}

const playGame = (userChoice) => {
    const compChoice = getChoice();
    if (userChoice === compChoice) {
        innertext.innerText = `${userChoice}! you won!`;
    } else {
        innertext.innerText = `not ${userChoice}! you lost.`;
    }
    msgContainer.classList.remove("hide");
    setTimeout(reset, 3000);
};


choose.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Reset background color of all buttons
        choose.forEach(btn => btn.style.backgroundColor = "");
        btn.style.backgroundColor = "green"; // Change background color here
        sessionStorage.setItem('userChoice', btn.id); // Save user's choice in session storage
        // Show respective coin image based on user's choice
        if (btn.id === "HEAD") {
            document.getElementById("headImage").classList.remove("hide");
            document.getElementById("tailImage").classList.add("hide");
        } else {
            document.getElementById("headImage").classList.add("hide");
            document.getElementById("tailImage").classList.remove("hide");
        }
    });
});


btn1.addEventListener("click", () => {
    const userChoice = sessionStorage.getItem('userChoice');
    if (userChoice) {
        playGame(userChoice);
    } else {
        alert("Please choose HEAD or TAIL before flipping.");
    }
});
