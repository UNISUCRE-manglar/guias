const mongoose = require('mongoose');

const universidadSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    facultad: {
      type: String,
      required: true,
    },
    programa: {
      type: String,
      required: true,
    },
    curso: {
      type: String,
      required: true,
    },
    // guias: { type: [mongoose.Schema.Types.ObjectId], ref: "Guia"},
    profesor: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    estudiantes: { type: [mongoose.Schema.Types.ObjectId], ref: "User"}
  },
  { collection: 'universidads' } // Nombre de la colección en la base de datos
);

const Universidad = mongoose.model('Universidad', universidadSchema);
module.exports = Universidad;



