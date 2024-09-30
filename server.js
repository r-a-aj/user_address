const express = require('express');
// const sequelize = require('./models').sequelize;
const { User, Address } = require('./models');
const app = express();

app.use(express.json());

// Route to create a new user and address
app.post('/users', async (req, res) => {
  const { name, address } = req.body;

  try {
    // Create the user
    const user = await User.create({ name });

    // Create the address and associate it with the user
    const newAddress = await Address.create({ address, userId: user.id });

    res.status(201).json({
      message: 'User and address created successfully',
      user,
      address: newAddress,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user and address', error });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
// sequelize.sync({ alter: true }).then(() => {    //test the database sync or not!!
//     console.log('Database synced!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}` );
    });
//   });
