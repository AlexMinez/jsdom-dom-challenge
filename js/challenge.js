
const timeCount = document.querySelector("h1#counter")
const btnCont = document.querySelector("#btnCont")
const likesUL = document.querySelector('ul.likes')
const commentForm = document.querySelector("#comment-form");
const commentList = document.querySelector("#list");

let counterRunning = true
let currentNumber = 0
let likedNumbers = {}
//setInterval takes 2 arguments 1 is a callback function , 2nd is the time
let myInt = setInterval(function(){
    if (counterRunning){
    currentNumber = currentNumber + 1
    timeCount.textContent = currentNumber
    }
},1000)


commentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const p = document.createElement('p')
    const input = document.querySelector("#comment-input");

    p.textContent = input.value;
    commentList.append(p)
    e.target.reset
})

btnCont.addEventListener('click', function(e){
    if (e.target.id === "plus"){
        currentNumber = currentNumber + 1
        timeCount.textContent = currentNumber
    }else if (e.target.id === "minus"){
        currentNumber = currentNumber - 1
        timeCount.textContent = currentNumber
    }else if (e.target.id === 'pause'){
           togglePause()
    }else if (e.target.id === 'heart'){
        updateLikes()
    }
})
function updateLikes(){
    if (likedNumbers[currentNumber]){
        const li = document.querySelector(`[data-number="${currentNumber}"]`)
        likedNumbers[currentNumber] += 1;
        li.textContent = `The number ${currentNumber} has been liked ${likedNumbers[currentNumber]} times`
    }else {
    likedNumbers[currentNumber] = 1
    const li = document.createElement('li')
    li.dataset.number = currentNumber
    li.textContent = `The number ${currentNumber} has been liked 1 time`
    likesUL.append(li)
 }
}


function togglePause(){
    counterRunning = !counterRunning
    document.querySelectorAll('button').forEach(button =>{
        if (button.id !== "pause"){
        button.disabled = !counterRunning
    }else {
        if (counterRunning){
            button.textContent = "Pause"
        } else {
            button.textContent = "Resume"
        }
    }
  })
}
