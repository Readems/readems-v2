const mongoose = require('mongoose');

const WaitlistSchma = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Waitlists', WaitlistSchma);