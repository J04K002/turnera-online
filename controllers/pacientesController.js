const Paciente = require("../models/paciente");
const { leerJSON, escribirJSON } = require("../utils/jsonUtils");

const FILENAME = "pacientes.json";

const actualizarPaciente = (req, res) => {
    const pacientes = leerJSON(FILENAME);
    const id = parseInt(req.params.id);
    const index = pacientes.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Paciente no encontrado" });
    }

    const actualizado = { ...pacientes[index], ...req.body };
    pacientes[index] = actualizado;

    escribirJSON(FILENAME, pacientes);
    res.status(200).json(actualizado);
};

const crearPaciente = (req, res) => {
    const pacientes = leerJSON(FILENAME);

    const { dni, nombre, edad, email, telefono, obraSocial } = req.body;
    const id = pacientes.length ? Math.max(...pacientes.map(p => p.id)) + 1 : 1;
    const nuevoPaciente = new Paciente(id, dni, nombre, edad, email, telefono, obraSocial);
    pacientes.push(nuevoPaciente);

    escribirJSON(FILENAME, pacientes);
    res.status(201).json(nuevoPaciente);
};

const obtenerPacientePorDni = (req, res) => {
    const pacientes = leerJSON(FILENAME);

    const { dni } = req.params;
    const paciente = pacientes.find(p => p.dni == dni);

    if (paciente) {
        res.status(200).json(paciente);
    } else {
        res.status(404).json({ error: "Paciente no encontrado" });
    }
};

module.exports = {
    crearPaciente,
    obtenerPacientePorDni,
    actualizarPaciente
};
