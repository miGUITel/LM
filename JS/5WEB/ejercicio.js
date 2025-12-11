let cuadro = document.querySelector("#nombre");
let boton = document.querySelector("button");

boton.addEventListener("click", function (event){
    window.alert("Bienvenido " + cuadro.value);
    cuadro.value = "Bárbara";
});

//window.alert("Bienvenido");


