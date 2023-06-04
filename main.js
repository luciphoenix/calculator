const numbers = document.getElementsByName('operation')
const inputs = document.querySelector('.inputs')
const solution = document.querySelector('.ans')
const answer = document.querySelector('.answer')
const del = document.querySelector('.delete')
const clear = document.querySelector('.clr')

let operationList;

Array.from(numbers).forEach(number => {
    number.addEventListener('click',func)
});
solution.addEventListener('click', solve)
del.addEventListener('click', backSpace)
clear.addEventListener('click',wipeInputs)

function func(e){
        let item = this.textContent
        inputs.textContent += item
}

function backSpace() {
    inputs.textContent = inputs.textContent.slice(0,-1)
}

function wipeInputs(){
    inputs.textContent = ''
    answer.textContent = ''
}

function solve(){
    operationList = inputs.textContent.split(' ')
    let ans;
    let index;
    const cycle = Math.trunc(divide(operationList.length,2))
    for(let i = 0;i < cycle; i++){
        if(operationList.includes('/')){
            index = operationList.indexOf('/')
            let [a,v,b] = operationList.splice(index -1,3)
            ans = divide(a,b)
            operationList.splice(index - 1, 0 , ans)
            continue;

        }
        else if(operationList.includes('x')){
            index = operationList.indexOf('x')
            let [a,v,b] = operationList.splice(index -1,3)
            ans = multi(a,b)
            operationList.splice(index - 1, 0 , ans)
            continue;

        }
        else if(operationList.includes('-')){
            index = operationList.indexOf('-')
            let [a,v,b] = operationList.splice(index -1,3)
            ans = sub(a,b)
            operationList.splice(index - 1, 0 , ans)
            continue;

        }
        else if(operationList.includes('+')){
            index = operationList.indexOf('+')
            let [a,v,b] = operationList.splice(index -1,3)
            ans = add(a,b)
            operationList.splice(index - 1, 0 , ans)
            continue;

        }
      
    }
    displayAnswer();
}


function displayAnswer(){
    answer.textContent = operationList[0]
}




function add(a,b){
    return Number(a) + Number(b)
}
function multi(a,b){
    return a * b
}
function sub(a,b){
    return a - b
}
function divide(a,b){
    return a / b
}



























// let ans;
// let b =[1,3,4,7,6,11,15,8,19,14,7]
// let [a,c] =b.splice(2,2)
// ans=a+c
// b.splice(2,0,ans)
// console.log(b)