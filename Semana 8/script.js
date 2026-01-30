document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');


  const validarCampo = (input, errorId, validacionFn) => {
    input.addEventListener('input', () => {
      const errorSpan = document.getElementById(errorId);
      if (validacionFn(input)) {
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
        input.style.borderColor = 'green';
      } else {
        errorSpan.textContent = `Campo ${input.name} inválido o vacío.`;
        errorSpan.style.display = 'block';
        input.style.borderColor = 'red';
      }
    });
  };

  validarCampo(nombre, 'errorNombre', i => i.value.trim() !== '');
  validarCampo(email, 'errorEmail', i => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value));
  validarCampo(mensaje, 'errorMensaje', i => i.value.trim() !== '');

  form.addEventListener('submit', (e) => {
    if (!nombre.validity.valid || !email.validity.valid || !mensaje.validity.valid) {
      e.preventDefault(); 
      alert('Por favor, complete todos los campos correctamente.');
    }
  });
});
