const { Schema, model } = require("mongoose");

const ProfesorSchema = new Schema({
  // Campos específicos del modelo Profesor
  // ...
});

module.exports = model("Profesor", ProfesorSchema);
