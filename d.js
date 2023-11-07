
function vage(){
    var age=document.getElementById("age").value;
    var resultElement=document.getElementById("result");
    if(age>=18){
        resultElement.innerText="u are eligible"
    }else{
        resultElement.innerText="u are not eligible"
    }
}
