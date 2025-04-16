const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

//importar rutas
const pacientesRoutes = require("./routes/pacientes");
const turnosRoutes = require("./routes/turnos");

app.use("/api/pacientes", pacientesRoutes);
app.use("/api/turnos", turnosRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en https://localhost:${port}`);
});