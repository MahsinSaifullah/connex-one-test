import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
