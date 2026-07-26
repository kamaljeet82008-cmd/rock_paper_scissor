let userscore =  0 ;
let compscore = 0 ;
const choices = document.querySelectorAll(".choice")
const msgp = document.querySelector("#msg")
const uscor= document.querySelector("#user-score")
const cocor= document.querySelector("#comp-score")
const genComputer = () => 
{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}
const drawgame=()=>
{
    console.log("game was draw.");
    msgp.innerText="GAME WAS DRAW ! PLAY AGAIN"
   msgp.style.backgroundColor = "#081b31";
}
const showwinner = (userwin,userChoice,compChoice) =>
{
    if(userwin)
    {
        userscore++
        console.log("YOU WIN",userChoice,compChoice);
        msgp.innerText=`YOU WIN ! YOUR ${userChoice} beats ${compChoice}`
        msgp.style.backgroundColor = "green";
        uscor.innerText = userscore;
    }
    else
    {
        compscore++
        console.log("YOU LOSE")
        msgp.innerText=`YOU LOSE ! ${compChoice} beats your ${userChoice}`
        msgp.style.backgroundColor = "red";
        cocor.innerText =compscore;
    }
}
const playgame = (userChoice) =>
{
    console.log("USER CHOICE = ",userChoice)
    const compChoice = genComputer();
    console.log("COMP CHOICE = ",compChoice)
     if(userChoice===compChoice)
     {
        //draw choice
        drawgame();
     }
     else
     {
        let userwin= true;
        if(userChoice === "rock")
        {
            userwin = compChoice === "paper"? false : true ;

        }
        else if (userChoice === "paper")
        {
            userwin = compChoice == "scissors"? false : true ;
        }
        else
        {
            userwin = compChoice === "rock"? false : true ;
        }
        showwinner(userwin,userChoice,compChoice);
     }
}
choices.forEach((choice) =>
{
    console.log(choice);
    choice.addEventListener("click",() =>
    {
     const userChoice= choice.getAttribute("id")
     console.log("choice was clicked",userChoice)
     playgame(userChoice)
    })
})
