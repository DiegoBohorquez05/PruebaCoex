const guardar = document.getElementById("guardarCliente");
const clientes = [];
console.log(clientes);

class Persona {
  nombre;
  apellido;
  nit;
  direccion;
  ciudad;
  telefono;
  cupoDisponible;
  estado;

  constructor(
    nombre,
    apellido,
    nit,
    direccion,
    ciudad,
    telefono,
    cupoDisponible,
    estado
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nit = nit;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.telefono = telefono;
    this.cupoDisponible = cupoDisponible;
    this.estado = estado;
  }
}

guardar.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("inputnombre").value;
  let apellido = document.getElementById("inputapellido").value;
  let nit = document.getElementById("inputnit").value;
  let direccion = document.getElementById("inputdireccion").value;
  let telefono = document.getElementById("inputtelefono").value;
  let cupoDisponible = document.getElementById("inputdispo").value;
  let ciudad = document.getElementById("Ciudad").value;
  let estado = document.getElementById("estado").value;
  let cupoTotal = document.getElementById("inputcupoTot").value;
  let inputdiasgar = document.getElementById("inputdiasgar").value;

  const nuevaPersona = new Persona(
    nombre,
    apellido,
    nit,
    direccion,
    ciudad,
    telefono,
    cupoDisponible,
    estado
  );
  clientes.push(nuevaPersona);
  console.log(nuevaPersona)
  console.log(clientes);
  localStorage.setItem("Personas", JSON.stringify(clientes));

  nombre = document.getElementById("inputnombre").value = "";
  apellido = document.getElementById("inputapellido").value = "";
  nit = document.getElementById("inputnit").value = "";
  direccion = document.getElementById("inputdireccion").value = "";
  telefono = document.getElementById("inputtelefono").value = "";
  cupoDisponible = document.getElementById("inputdispo").value = "";
  ciudad = document.getElementById("Ciudad").value = "";
  estado = document.getElementById("estado").value = "";
  cupoTotal = document.getElementById("inputcupoTot").value = "";
  inputdiasgar = document.getElementById("inputdiasgar").value = "";
});
