// Initializes the `competencies` service on path `/competencies`
const createService = require('feathers-mongoose');
const createModel = require('../../models/competencies.model');
const hooks = require('./competencies.hooks');
const filters = require('./competencies.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'competencies',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/competencies', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('competencies');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
