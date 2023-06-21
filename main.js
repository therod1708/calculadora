insert = (value) => {
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + value;
}

clean = () => {                                               
    document.getElementById('resultado').innerHTML = "";
}

back = () => {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

calcular = () => {
    var resultado = document.getElementById('resultado').innerHTML;
        if(resultado) {
            document.getElementById('resultado').innerHTML = eval(resultado); 
        }

        else {
            document.getElementById('resultado').innerHTML = EvalError(resultado);
        }
}
