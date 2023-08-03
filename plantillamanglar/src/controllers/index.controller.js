

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};





indexCtrl.renderMylabs= (req, res) => {
  res.render('Mylabs');
};
module.exports = indexCtrl;

