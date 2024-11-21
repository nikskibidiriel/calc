var equation=""
var screenvar=""
var equationlst=[]
var screenvarlst=[]
var ans = '0'

function clearequation(){
    equationlst = []
    equation = ""
}
function clearscreen(){
    screenvarlst = []
    screenvar = ""
}
function clear(){
    clearscreen()
    clearequation()
}

function add(num){
    if (((num == "+")||(num == "-")||(num == "÷")||(num =='×'))&&(equationlst.length == 0)){
        addans()
    }
    screenvarlst.push(document.getElementById(num).id)
    equationlst.push(document.getElementById(num).value)
    equation = equationlst.join('')
    screenvar = screenvarlst.join('')
    document.getElementById("result").innerHTML = screenvar
}
function addans(){
    if (screenvarlst.join('') == 0){
        screenvarlst.pop()
    }
    screenvarlst.push(document.getElementById('Ans').id)
    equationlst.push(ans)
    equation = equationlst.join('')
    screenvar = screenvarlst.join('')
    document.getElementById("result").innerHTML = screenvar
}
function calc(){
    ans = eval(equation)
    document.getElementById("resultriel").innerHTML = ans
    clear()
}
function c(){
    equationlst.pop()
    screenvarlst.pop()
    screenvar = screenvarlst.join('')
    document.getElementById("result").innerHTML=screenvar
    document.getElementById("resultriel").innerHTML=''
}
function ce(){
    clear()
    document.getElementById("result").innerHTML=''
    document.getElementById("resultriel").innerHTML=''
}
