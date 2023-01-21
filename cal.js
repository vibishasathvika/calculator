function display(num){
    result.value +=num
}
function allclear(){
    result.value=""

}
function calc(){
    result.value = eval(result.value)
}
function del(){
    result.value = result.value.slice(0,-1)
}