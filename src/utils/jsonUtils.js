const fs = require("fs");
const path = require("path");

function leerJSON(nombreArchivo) {
    const ruta = path.join(__dirname, "../data", nombreArchivo);
    if (!fs.existsSync(ruta)) return [];
    const contenido = fs.readFileSync(ruta, "utf8");
    return JSON.parse(contenido);
}

function escribirJSON(nombreArchivo, datos) {
    const ruta = path.join(__dirname, "../data", nombreArchivo);
    fs.writeFileSync(ruta, JSON.stringify(datos, null, 2), "utf8");
}

module.exports = { leerJSON, escribirJSON };
