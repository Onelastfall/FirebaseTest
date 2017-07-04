const organizations = require('./organizations/organizations.service.js');
const persons = require('./persons/persons.service.js');
const competencies = require('./competencies/competencies.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(organizations);
  app.configure(persons);
  app.configure(competencies);
};
