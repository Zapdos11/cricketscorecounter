let scoreone = document.getElementById("score1")
let scorecount = 0

function add1() {
    scorecount += 1
    scoreone.textContent = scorecount
}
scoreone.textContent = scorecount

function add2() {
    scorecount += 4
    scoreone.textContent = scorecount  
}
scoreone.textContent = scorecount
function add4() {
    scorecount += 6
    scoreone.textContent = scorecount
   
}
scoreone.textContent = scorecount
function del1() {
    scorecount -= 1
    scoreone.textContent = scorecount 
}
scoreone.textContent = scorecount

let scoretwo = document.getElementById("score2")
let scorecount1 = 0

function add11() {
    console.log("ass")
    scorecount1 += 1
    scoretwo.textContent = scorecount1
}
scoretwo.textContent = scorecount1

function add22() {
    scorecount1 += 4
    scoretwo.textContent = scorecount1  
}
scoretwo.textContent = scorecount1
function add24() {
    scorecount1 += 6
    scoretwo.textContent = scorecount1
   
}
scoretwo.textContent = scorecount1
function del21() {
    scorecount1 -= 1
    scoretwo.textContent = scorecount1 
}
scoretwo.textContent = scorecount1

function reset() {
    scoreone.textContent = 0
    scoretwo.textContent = 0
}
