const { Schema, model } = require("mongoose");

const EstudianteSchema = new Schema({
  // Campos específicos del modelo Estudiante
  // ...
});

module.exports = model("Estudiante", EstudianteSchema);