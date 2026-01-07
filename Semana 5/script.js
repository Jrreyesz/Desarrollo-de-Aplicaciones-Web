let buttonInsert = document.getElementById("insertar");
let inputUrl = document.getElementById("url");
const contenedor = document.getElementById("contenedor-imagenes")


function insertarImagen() {

    const urlEscrita = inputUrl.value;

    if (urlEscrita == ""){
        alert("Pega un URL primero");
        return;
    }
    const newImage = document.createElement("img");

    newImage.src = urlEscrita;
    newImage.alt = "imagen de la galeria";

    newImage.style.width = "200px";
    newImage.style.height = "200px";

    newImage.classList.add("foto-galeria");

    newImage.addEventListener("click", function() {
        
    const imagenPrevia = document.querySelector(".seleccionada");
    if (imagenPrevia) {
        imagenPrevia.classList.remove("seleccionada");
    }

    newImage.classList.add("seleccionada");
    });


    contenedor.appendChild(newImage);

    inputUrl.value = "";
};

buttonInsert.addEventListener("click", insertarImagen);

document.getElementById("eliminar").addEventListener("click", () => {
    const seleccionada = document.querySelector(".seleccionada");
    if (seleccionada) {
        seleccionada.remove();
    } else {
        alert("Primero selecciona una imagen haciendo clic en ella");
    }
});


document.addEventListener("keydown", function(event) {

    const seleccionada = document.querySelector(".seleccionada");

    if (event.key === "Delete" || event.key === "Backspace") {
        
        if (seleccionada) {
            seleccionada.remove();
            console.log("Imagen eliminada con teclado");
        }
    }
});

