class Paciente {
    constructor(id, dni, nombre, edad, email, telefono, obraSocial) {
        this.id = id;
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.obraSocial = obraSocial;
    }
}
module.exports = Paciente;