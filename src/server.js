// server.js
const app = require('./app');
const connectDB = require('./config/db');

const port = process.env.PORT || 4040;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to DB:', err);
});
