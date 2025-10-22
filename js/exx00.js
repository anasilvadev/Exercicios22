function somar(){
    var v1,v2,r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r= parseFloat(v1) + parseFloat(v2)
        document.getElementById("resultado_soma").innerHTML=`O resultado da soma é ${r}`
    }
}
function subtrair(){
    var v1,v2,r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r= parseFloat(v1) - parseFloat(v2)
        document.getElementById("resultado_subtrair").innerHTML=`O resultado da subtração é ${r}`
    }
}

function multiplicar(){
    var v1,v2,r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos")
    }else{
        r= parseFloat(v1) * parseFloat(v2)
        document.getElementById("resultado_multiplicar").innerHTML=`O resultado da multiplicação é ${r}`
    }
}
function dividir(){
    var v1,v2,r
    v1=document.getElementById("primeiro_valor").value
    v2=document.getElementById("segundo_valor").value
    if(v1=="" || v2==""){
        alert("Os campos devem ser preenchidos.")
    }else{ 
        if(v2=="0"){
            alert("O segundo valor deve ser diferente de 0")
        }else{
        r= parseFloat(v1) / parseFloat(v2)
        document.getElementById("resultado_dividir").innerHTML=`O resultado da divisão é ${r}`
        }
    }
}