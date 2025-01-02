 let userscore=0;
let compscore=0;
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const option =["rock","paper","sesir"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];

}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw.play agin";
    msg.style.backgroundColor="black"
}

const showwinner=(userwin,compchoice,userchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;

        console.log("you win");
        msg.innerText=`you win.your choice ${ userchoice } beats compchoice ${ compchoice }`;
        msg.style.backgroundColor="green";

    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you loss");
        msg.innerText=`you loss.comp choice ${ compchoice } beats yourchoice ${ userchoice }`;
        msg.style.backgroundColor="red";
    }
};








const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
// Genaret computer choice
const compchoice=gencompchoice();
console.log("comp choice=",compchoice);


if(userchoice==compchoice){
    drawGame();

}
else {
let userwin=true;
if(userchoice==="rock"){
    userwin=compchoice==="paper"?false:true;
}
else if(userchoice==="paper"){
    userwin=compchoice==="sesir"?false:true;
}else{
    userwin=compchoice==="rock"?false:true;
}
showwinner(userwin,compchoice,userchoice);

}



};


choice.forEach((choice) => {

choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
})
    
});
