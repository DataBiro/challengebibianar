//---accionando las cajas---//
const enviaEncriptar = document.querySelector(".enviaencriptar");
const textEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".Tarjeta-Contenedor");
const copiar = document.querySelector(".copiar");
const desencriptar = document.querySelector(".desencriptar");

//--boton de encriptar--//
enviaEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Favor ingrese el texto este campo no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            },1500);

    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Por favor palabras sin acentos y sin caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            },1500);
    }
    
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Recuerda solo acepta palabras en minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style")
            },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        copiar.style.visibility = "inherit";
        contenido.remove();
    }
    
});

//----boton desencriptar----//

desencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Favor ingrese el texto este campo no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            },1500);

    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Por favor palabras sin acentos y sin caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
            },1500);
    }
    
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight = "800";
        aviso.textContent = "Recuerda solo acepta palabras en minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style")
            },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        copiar.style.visibility = "inherit";
        contenido.remove();
    }
    
});

//---Boton copiar--//

copiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});

