const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LoginFormPractice')
  .then(() => {
    console.log('Mongoose connected');
  })
  .catch((err) => {
    console.error('Failed to connect:', err.message);
  });

const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LogInCollection = mongoose.model('LogInCollection', logInSchema);

module.exports = LogInCollection;
