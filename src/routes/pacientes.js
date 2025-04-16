const express = require("express");
const {
  crearPaciente,
  obtenerPacientePorDni,
  actualizarPaciente
} = require("../controllers/pacientesController");

const router = express.Router();

router.post("/", crearPaciente);
router.get("/dni/:dni", obtenerPacientePorDni);
router.put("/:id", actualizarPaciente);

module.exports = router;
