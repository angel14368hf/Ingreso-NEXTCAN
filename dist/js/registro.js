// Importar las funciones necesarias de los SDK que se van a utilizar
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Configuración de tu aplicación en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgUyjSD1_F-3jT3vOnylIvTNgS4AXMfv4",
  authDomain: "newnextcan.firebaseapp.com",
  projectId: "newnextcan",
  storageBucket: "newnextcan.appspot.com",
  messagingSenderId: "441921147965",
  appId: "1:441921147965:web:ddbd5da987dae6d8b1c654",
  measurementId: "G-LPHH9XQENS"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Escuchar el evento de carga del documento
window.addEventListener('DOMContentLoaded', (event) => {
    const submit = document.getElementById('submit');
    
    // Escuchar el evento click en el botón de envío
    submit.addEventListener("click", function(event) {
        event.preventDefault();

        // Obtener el valor del email y la contraseña ingresados por el usuario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Crear el usuario con el email y la contraseña en Firebase Auth
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Si se crea correctamente, mostrar un mensaje
                alert("Creando cuenta...");
                // Aquí podrías redirigir al usuario a otra página, por ejemplo
            })
            .catch((error) => {
                // Si hay un error, mostrar el mensaje de error
                alert(error.message);
            });
    });
});
