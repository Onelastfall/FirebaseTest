// persons-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const persons = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: String },
    email: { type: String },
   // role: { type: String}, 
   // competencies: { type: array},
    organizationID: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('persons', persons);
};
