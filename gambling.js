var codelst=[]
var riel=[]
function generate(){
    for (let i = 0; i < 6; i++)
        riel.push(Math.floor(Math.random() * 10))
    console.log(riel)
}
function add(num){
    if (codelst.length <= 5){
        codelst.push(num)
    }
    document.getElementById('code').innerHTML=codelst.join('')
}
function submit(){
    generate()
    console.log(riel)
    console.log(codelst)
    if (riel.join('') == codelst.join('')){
        alert('you win')
    }
    else{
        alert('you lose')
    }
}
function del(){
    codelst.pop()
    document.getElementById('code').innerHTML=codelst.join('')
}