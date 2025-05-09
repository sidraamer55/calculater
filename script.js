//selector 

const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(a=>{
    a.addEventListener("click",calculate);
});
for (let i=0;i<keys.length;i++){
    keys[i].addEventListener("click".calculate)
}

//create a list of 5 names "Joelle","Nada"
// console.log "Hello my name is ..."

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;
    }

    if(buttonText === "DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if(buttonText === "="){
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }

    else{
        output.textContent += buttonText;
        return;
    }


}
