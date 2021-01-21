const express = require('express');
const router = express.Router();

const loginApp = 'admin';
const passwordApp = 'admin';

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res) => {
  const { login, password } = req.body;

  if (login === loginApp && password === passwordApp) {
    req.session.admin = 1;
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
