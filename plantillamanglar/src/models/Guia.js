const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuiaSchema = new Schema({
  descripcion: String,
  preguntas: [String],
  curso: { type: mongoose.Schema.Types.ObjectId, ref: "universidads"}
});

const Guia = mongoose.model('Guia', GuiaSchema);

module.exports = Guia;