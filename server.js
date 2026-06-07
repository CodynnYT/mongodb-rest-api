import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', taskRoutes);

app.get('/', async (req, res) => {
   res.json({ message: 'API server running!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`TASK API RUNNING ON http://localhost:${PORT}`);
})