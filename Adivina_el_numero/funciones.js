var numero_aleaterio = 0;
var i = 1;
function generar_numero(){
    i = 1;
    let numer_intentos = document.getElementById("intento_numero")
    numer_intentos.innerHTML = 0;
    numero_aleaterio = Math.floor(Math.random() * 11);
    let n_m = document.getElementsByClassName("num_menor");
    n_m[0].innerHTML = (numero_aleaterio - 2);
    let n_mayor = document.getElementsByClassName("num_mayor");
    n_mayor[0].innerHTML = (numero_aleaterio + 2);
    
}
function comprobar_numero(){
    let desactivar_botones = document.getElementsByTagName("button");
    desactivar_botones[1].disabled = true;
    desactivar_botones[0].disabled = true;
    // obtener el valor del input
    let valor_input_user = parseInt(document.getElementById("date_number").value);
    let numer_intentos = document.getElementById("intento_numero")
    if (valor_input_user === numero_aleaterio){
        // se crea el elemento 
        let ganador_new_element = document.createElement("div")
        // se le agega clase
        ganador_new_element.classList.add("contenedor_ganador")
        // añadimos un texto al div
        ganador_new_element.innerHTML = ("FELICIDADES ERES EL GANADOR!")
        // empaquetamos en el body
        document.body.appendChild(ganador_new_element)
        let boton_salir = document.createElement("button")
        boton_salir.innerHTML = "X"
        // como se obtiene por una clase reagregar se vuelve un array
        let reagregar = document.getElementsByClassName("contenedor_ganador")
        boton_salir.id = ("boton_eliminar_div");
        boton_salir.classList.add("boton_eliminar")
        reagregar[0].appendChild(boton_salir)
        i = 1;
        boton_salir.onclick = function (){
            let elemento_eliminar = document.getElementsByClassName("contenedor_ganador");
            elemento_eliminar[0].remove()
            numer_intentos.innerHTML = 0;
            generar_numero();
        }
    }  
    else{
        numer_intentos.innerHTML = i;
        let contador_alarma = document.createElement("div")
        contador_alarma.id = "alarma";
        contador_alarma.innerHTML = i;
        document.body.appendChild(contador_alarma);
        setTimeout(
            () =>{
                contador_alarma.remove();
            }, 300
        )
        i++;
    }
    if(i === 3){
        generar_numero();
        numer_intentos.innerHTML = 0;
        let ganador_new_element = document.createElement("div")
        // se le agega clase
        ganador_new_element.classList.add("contenedor_ganador")
        // añadimos un texto al div
        ganador_new_element.innerHTML = ("Perdiste!")
        // empaquetamos en el body
        document.body.appendChild(ganador_new_element)
        setTimeout(
            () =>{
                ganador_new_element.remove();
            }, 700)
        i = 1;
    } 
    document.getElementById("date_number").value = null;
    desactivar_botones[1].disabled = false;
    desactivar_botones[0].disabled = false;
}
