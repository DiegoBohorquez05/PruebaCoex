const guardar=document.getElementById('guardarCliente')
let clientes=[]

class Persona{
    nombre;
    apellido;
    NITCC;
    direccion;
    ciudad;
    telefono;
    cupoDisponible;
    estado;

    constructor (nombre,apellido,NITCC,direccion,ciudad,telefono,cupoDisponible,estado){
        this.nombre=nombre
        this.apellido=apellido
        this.NITCC=NITCC
        this.direccion=direccion
        this.ciudad=ciudad
        this.telefono=telefono
        this.cupoDisponible=cupoDisponible
        this.estado=estado
    }
}

guardar.addEventListener('click',()=>{
   const nuevaPersona=new Persona(nombre,apellido,NITCC,direccion,ciudad,telefono,cupoDisponible,estado);
})
