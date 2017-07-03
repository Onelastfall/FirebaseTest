const organizations = require('./organizations/organizations.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(organizations);
};
