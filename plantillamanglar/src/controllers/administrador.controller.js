const Universidad = require('../models/universidad');
const User = require('../models/User');


exports.agregarUniversidad = (req, res) => {
  const { universidad, facultad, programa, curso, profesor, estudiantes } = req.body;

  const u = {
    nombre: universidad,
    facultad,
    programa,
    curso,
    profesor,
    estudiantes,
  }
  const nuevaUniversidad = new Universidad(u);

  nuevaUniversidad.save((err, universidadGuardada) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/users/administrador');
    }
  });
};

exports.mostrarUniversidades = async (req, res) => {
  const profesores = await User.find({ rol: "profesor" })
  const estudiantes = await User.find({ rol: "estudiante" })
  res.render('users/administrador', { profesores, estudiantes });
};














