// 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
function get_value(){
    let element = document.getElementById("campoentrada");
    let valor = element.value;
    element.value = "";
    return valor
}
function encriptar(){
    let texto_textarea = get_value();
    let new_word = "";
    for(i = 0; i < texto_textarea.length; i++){
        switch(texto_textarea[i]){
            case "a":
                new_word = new_word + "ai";
                break;
            case "e":
                new_word = new_word + "enter";
                break;
            case "i":
                new_word = new_word + "imes";
                break;
            case "o": 
                new_word = new_word + "ober";
                break;
            case "o": 
                new_word = new_word + "ufat";
                break;  
            default:
                new_word = new_word + texto_textarea[i];
        }
    }
    mostrar_texto(new_word)
}
function mostrar_texto(palabra){
    let caja_texto = document.getElementById("info")
    let boton = document.getElementById("btn");
    boton.style.display = "block";
    try{ 
        caja_texto.removeChild(document.querySelector("p"))
        caja_texto.removeChild(document.querySelector("img"))
    }
    catch{

    }let new_Element = document.createElement("p")
    new_Element.id = "textonuevo";
    new_Element.innerHTML = palabra;
    caja_texto.appendChild(new_Element)
    caja_texto.style.display = "flex"
}

function desencriptar(){
    let palabra = get_value();
    let i = 0;
    let new_word = " ";
    while(i < palabra.length){
        try{
            if(palabra[i]+palabra[i+1] === "ai"){
                new_word = new_word + "a";
                i = i + 2
            }
            else if(palabra[i]+palabra[i+1]+palabra[i+2]+palabra[i+3] === "imes"){
                new_word = new_word + "i";
                i = i + 4
            }
            else if(palabra[i]+palabra[i+1]+palabra[i+2]+palabra[i+3] === "ober"){
                new_word = new_word + "o";
                i = i + 4
            }
            else if(palabra[i]+palabra[i+1]+palabra[i+2]+palabra[i+3] === "ufat"){
                new_word = new_word + "u";
                i = i + 4
            }
            else if(palabra[i]+palabra[i+1]+palabra[i+2]+palabra[i+3]+palabra[i+4] === "enter"){
                new_word = new_word + "e";
                i = i + 5
            }
            else{
                new_word = new_word + palabra[i];
                i = i + 1;
            }
            
        }
        catch{

        }
       
    }
    mostrar_texto(new_word)
}
