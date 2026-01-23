const productos = []; 

const formulario = document.getElementById('formulario-producto');
const listaUI = document.getElementById('lista-productos');

function renderizarProductos() {
    listaUI.innerHTML = ''; 

    productos.forEach(prod => {
        const li = document.createElement('li');
        li.style.padding = "8px 0";
        
        li.innerHTML = `
            <strong>${prod.nombre}</strong> - $${prod.precio}
            <br>
            <small>${prod.descripcion}</small>
        `;
        listaUI.appendChild(li);
    });
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;

    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };

    productos.push(nuevoProducto);

    renderizarProductos();
    formulario.reset(); 
});