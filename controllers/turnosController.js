const Turno = require("../models/turno");
const { leerJSON, escribirJSON } = require("../utils/jsonUtils");

const crearTurno = (req, res) => {
    const turnos = leerJSON("turnos.json");

    const { pacienteId, fecha, hora } = req.body;
    const id = turnos.length + 1;
    const nuevoTurno = new Turno(id, pacienteId, fecha, hora);
    turnos.push(nuevoTurno);

    escribirJSON("turnos.json", turnos);
    res.status(201).json(nuevoTurno);
};

const obtenerTurnosPorFecha = (req, res) => {
    console.log("[Backend] Obteniendo turnos para la fecha:", req.params.fecha); // Log para verificar la fecha

    const turnos = leerJSON("turnos.json");
    
    console.log("[Backend] Turnos leídos:", turnos); // Ver qué turnos se están leyendo

    const { fecha } = req.params;
    const turnosPorFecha = turnos.filter(t => t.fecha === fecha);

    console.log("[Backend] Turnos encontrados para la fecha:", turnosPorFecha); // Ver los turnos encontrados para esa fecha

    res.status(200).json(turnosPorFecha);
};

const obtenerTodosLosTurnos = (req, res) => {
    const turnos = leerJSON("turnos.json");
    res.status(200).json(turnos);
};

module.exports = {
    crearTurno,
    obtenerTurnosPorFecha,
    obtenerTodosLosTurnos
};
