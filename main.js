const numbers = document.getElementsByClassName('operation')
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
        console.log(inputs.textContent)
        answer.classList.add('ans-hide')
}

function backSpace() {
    if(answer.textContent == errorMessage()){
        inputs.textContent = inputs.textContent.slice(0,-1)
        inputs.textContent = inputs.textContent.slice(0,-1)
        inputs.textContent = inputs.textContent.slice(0,-1)
        answer.textContent = ''
        
    }else{
        inputs.textContent = inputs.textContent.trim()
        if(isNaN(inputs.textContent[inputs.textContent.length-1])){
            inputs.textContent = inputs.textContent.trim()
            inputs.textContent = inputs.textContent.slice(0,-1).trim()
        }else{
            inputs.textContent = inputs.textContent.slice(0,-1)
        }
        
        answer.textContent = ''
        console.log(inputs.textContent)
    }
    
    
}

function wipeInputs(){
    inputs.textContent = ''
    answer.textContent = ''
}

function solve(){
    operationList = inputs.textContent.trim().split(' ')
    let ans;
    let index;
    let infoLength = operationList.length
    if(isNaN(Number(operationList[infoLength-1])) && operationList[infoLength-1] != '%' || isNaN(Number(operationList[0]))){
        errorMessage()
        answer.classList.remove('ans-hide')
    }else{
        const cycle = Math.trunc(divide(infoLength,2))
        for(let i = 0;i <= cycle; i++){
            if(operationList.includes('%')){
                index = operationList.indexOf('%')
                let [a,b] = operationList.splice(index -1,2)
                ans = percentage(a,b)
                operationList.splice(index - 1, 0 , ans)
                continue;
    
            }
            else if(operationList.includes('/')){
                index = operationList.indexOf('/')
                let [a,v,b] = operationList.splice(index -1,3)
                if(b == '0'){
                    answer.textContent = 'undefined'
                    answer.classList.remove('ans-hide')
                    return
                }
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
}  


function displayAnswer(){
    answer.textContent = operationList[0]
    answer.classList.remove('ans-hide')
}

function errorMessage(){
   return answer.textContent = 'type error'
   
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
function percentage(a,b){
    return a/100
}



// function evaluate(a,b,c){
//     const cycle = Math.trunc(divide(infoLength,2))
//     for(let i = 0;i < cycle; i++){
//         if(operationList.includes('/')){
//             index = operationList.indexOf('/')
//             let [a,v,b] = operationList.splice(index -1,3)
//             ans = divide(a,b)
//             operationList.splice(index - 1, 0 , ans)
//             continue;

//         }
//         else if(operationList.includes('x')){
//             index = operationList.indexOf('x')
//             let [a,v,b] = operationList.splice(index -1,3)
//             ans = multi(a,b)
//             operationList.splice(index - 1, 0 , ans)
//             continue;

//         }
//         else if(operationList.includes('-')){
//             index = operationList.indexOf('-')
//             let [a,v,b] = operationList.splice(index -1,3)
//             ans = sub(a,b)
//             operationList.splice(index - 1, 0 , ans)
//             continue;

//         }
//         else if(operationList.includes('+')){
//             index = operationList.indexOf('+')
//             let [a,v,b] = operationList.splice(index -1,3)
//             ans = add(a,b)
//             operationList.splice(index - 1, 0 , ans)
//             continue;

//         }
      
//     }
//     displayAnswer();
// }




















// let ans;
// let b =[1,3,4,7,6,11,15,8,19,14,7]
// let [a,c] =b.splice(2,2)
// ans=a+c
// b.splice(2,0,ans)
// console.log(b)