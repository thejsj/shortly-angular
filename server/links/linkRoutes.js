var linksController = require('./linkController.js');

module.exports = function (app) {
  app.route('/')
    .get(linksController.allLinks)
    .post(linksController.newLink);
};
