
console.log("hola mundo");
//quiero que cuando clikceo el boton de menu suceda algo 
//por eso java escrip tiene que identificar el boton ,, con id en html
//boton.addEventListener() significa que escuche los eventos que tengan el boton ,, en este caso
//el click
//()=>{ significa entonces sucede esto}
//quiero que cuando se le de click  al boton se le agregue la clase mostrar al menu      
//nav.classList.add
//add: agregar clases
//remove:elminar clases
//toggle:agregar yo quitar una clase
boton.addEventListener("click",()=>{
    //todod de aca para abajo todo lo que va a suceder cuando se le de click al boton
    console.log("hicistes click");
    perro.classList.toggle("mostrar");
});


boton1.addEventListener("click",()=>{
    //todod de aca para abajo todo lo que va a suceder cuando se le de click al boton
    console.log("hicistes click");
    gato.classList.toggle("mostrar");
});