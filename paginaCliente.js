function mostrar(){
    lista = JSON.parse(localStorage.getItem("Personas"));
    console.log(lista);
    const tabla = document.getElementById("tabla");
    
    for (let i = 0; i < lista.length; i++) {
      tabla.innerHTML += ` 
        <tr>
        <td>${lista[i].nombre}</td>
        <td>${lista[i].apellido}</td>
        <td>${lista[i].nit}</td>
        <td>${lista[i].direccion}</td>
        <td>${lista[i].telefono}</td>
        <td>${lista[i].cupoDisponible}</td>
        <td>${lista[i].ciudad}</td>
        <td>${lista[i].estado}</td>
        <td><butoon>EDITAR</butoon></td>
        </tr>
        `;
    }
}

mostrar()