const express = require('express');

const setView = (app, folder) => {
  app.set('view engine', 'ejs');
  app.set('views', folder);

  app.use(express.static('src/public'));
};

module.exports = setView;
