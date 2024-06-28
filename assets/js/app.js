const ActualizarEstadoConexion = () => {
    let containerConexion = document.querySelector(".container_conexion");
    let estadoConexion = document.querySelector("#estadoConexion");
    
    if (navigator.onLine) {
        estadoConexion.textContent = "Online";
        containerConexion.classList.add("online");
        containerConexion.classList.remove("offline");
    } else {
        estadoConexion.textContent = "Offline";
        containerConexion.classList.add("offline");
        containerConexion.classList.remove("online");
    }

}

window.addEventListener("load", ActualizarEstadoConexion);

window.addEventListener("online", ActualizarEstadoConexion);
window.addEventListener("offline", ActualizarEstadoConexion);