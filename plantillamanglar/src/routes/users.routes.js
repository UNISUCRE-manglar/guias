const router = require("express").Router();
const nodemailer = require('nodemailer');
const { User } = require('../models/User'); // Importa el modelo de usuario


const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
  crearGuia,
  obtenerGuias,
  editarGuia,
  eliminarGuia,
  actualizarPreguntas,
  obtenerCursos,
} = require("../controllers/users.controller");

// Routes
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

router.get("/users/estudiante", (req, res) => {
  res.render("users/estudiante", { showLogoutButton: true }); // Renderiza la vista y pasa un valor para mostrar el botón de salida
});

router.get("/users/profesor", (req, res) => {
  res.render("users/profesor", { showLogoutButton: true }); // Renderiza la vista y pasa un valor para mostrar el botón de salida
});

router.get("/users/administrador", (req, res) => {
  const adminName = req.session.adminName; // Obtén el nombre del administrador desde la sesión
  res.render("users/administrador", { name: adminName, showLogoutButton: true });
});

router.post("/users/profesor/nuevaGuia", crearGuia);

router.post("/users/profesor/editarGuia", editarGuia);

router.post("/users/profesor/eliminarGuia", eliminarGuia);

router.post("/users/profesor/actualizarPreguntas", actualizarPreguntas);

router.get("/users/profesor/guias", obtenerGuias)

router.get("/users/profesor/cursos", obtenerCursos)



module.exports = router;


