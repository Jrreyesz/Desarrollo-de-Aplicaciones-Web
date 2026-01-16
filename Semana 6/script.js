const formulario = document.getElementById('mi-formulario');
const botonEnvio = document.getElementById('boton-enviar');
const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('contraseña');
const inputConfPass = document.getElementById('conf-contraseña');
const inputEdad = document.getElementById('edad'); // Añadido

// Mensajes de error
const errorEmail = document.getElementById('error-email');
const errorPass = document.getElementById('mensaje-error');
const errorEdad = document.getElementById('error-edad'); // Añadido

const validarTodo = () => {
    
    // 1. Validar Email con su Regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailEsValido = emailRegex.test(inputEmail.value);

    // 2. Validar Contraseña Segura (Regex)
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const passEsSegura = passRegex.test(inputPass.value);

    // 3. Validar si coinciden
    const coinciden = inputPass.value === inputConfPass.value && inputPass.value !== "";

    // 4. Validar Edad (Igual o mayor a 18) - Añadido
    const edadValor = parseInt(inputEdad.value);
    const edadEsValida = edadValor >= 18;

    // --- GESTIÓN DE MENSAJES VISUALES ---
    
    // Mensaje de Email - Añadido
    if (inputEmail.value.length > 0 && !emailEsValido) {
        errorEmail.textContent = "Formato de correo no válido (ej: usuario@dominio.com)";
    } else {
        errorEmail.textContent = "";
    }

    // Validar formato de la contraseña
    if (inputPass.value.length > 0 && !passEsSegura) {
        errorPass.textContent = "La contraseña debe tener 8+ caracteres, un número y un símbolo (!@#$%).";
        errorPass.style.color = "orange";
    } else if (inputPass.value.length > 0 && inputConfPass.value.length > 0 && !coinciden) {
        errorPass.textContent = "❌ Las contraseñas no coinciden";
        errorPass.style.color = "red";
    } else if (coinciden && passEsSegura) {
        errorPass.textContent = "✅ Contraseña segura y coincidente";
        errorPass.style.color = "green";
    } else {
        errorPass.textContent = "";
    }

    // Mensaje de Edad - Añadido
    if (inputEdad.value.length > 0 && !edadEsValida) {
        errorEdad.textContent = "Debes tener al menos 18 años.";
    } else {
        errorEdad.textContent = "";
    }

    // --- HABILITACIÓN DEL BOTÓN ---
    // Verificamos: Email Válido + Password Seguro + Coincidencia + Edad Válida + Reglas HTML
    if (emailEsValido && passEsSegura && coinciden && edadEsValida && formulario.checkValidity()) {
        botonEnvio.disabled = false;
        botonEnvio.style.opacity = "1";
    } else {
        botonEnvio.disabled = true;
        botonEnvio.style.opacity = "0.5";
    }
};

formulario.addEventListener('input', validarTodo);