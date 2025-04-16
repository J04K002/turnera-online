const express = require("express");
const router = express.Router();
const {
  crearTurno,
  obtenerTurnosPorFecha,
  obtenerTodosLosTurnos
} = require("../controllers/turnosController");

router.post("/", crearTurno);
router.get("/fecha/:fecha", obtenerTurnosPorFecha); // <-- Ruta más específica
router.get("/", obtenerTodosLosTurnos); // <-- Se queda igual

module.exports = router;
