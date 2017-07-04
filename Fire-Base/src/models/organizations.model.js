// Organizations-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const organizations = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    persons: [{ 
        type: mongooseClient.Schema.Types.ObjectId,
        ref: 'Persons'
    }],
    competencies: [{
        type: mongooseClient.Schema.Types.ObjectId,
        ref: 'Competencies'
    }],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('organizations', organizations);
};
