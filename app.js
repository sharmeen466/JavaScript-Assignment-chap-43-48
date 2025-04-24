function greet (){
alert("Hi")
}

function mobile(){
    alert("Thanks for purchasing a phone from us 😊")
}

const remove = document.getElementsByClassName("delete")
const hide = document.getElementsByClassName("display")
const index = document.getElementsByClassName("index")
console.log(index);
for(let i = 0; i < remove.length; i++){
    remove[i].addEventListener("click", function(){
        hide[i].classList.add("hidden")
    })
}


let increase = document.getElementById("inc")
let decrease = document.getElementById("dec")
let counter = document.getElementById("container")
let numbers = 1
counter.innerHTML = numbers
console.log(counter);

increase.addEventListener("click", function(){
    numbers++
    counter.innerHTML = numbers
})
decrease.addEventListener("click", function(){
    numbers--
    counter.innerHTML = numbers
})