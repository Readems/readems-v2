const express = require('express');
const cors = require('cors');
const path = require('path');
const Waitlist = require('./model/waitlist');
const { connectDB } = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
})

app.post('/api/users/waitlist', async (req, res) => {
  const { email } = req.body;

  if(!email) return res.status(422).json({error: 'Please enter your email address.'});

  const user = await Waitlist.findOne({ email });

  if (user) return res.status(400).json({error: 'User with this email already exists.'})

  const newEmail = await new Waitlist({ email });

  await newEmail.save()
    .then(() => {
      res.status(200).json({success: 'success'});
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve static files 
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  // Handling react routing: return every requests to react app 
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is set and running on port: ${PORT}`));