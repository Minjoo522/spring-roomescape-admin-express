import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import reservationRouter from './router/reservation.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, './views/index'));
});

app.get('/admin/reservation', (req, res) => {
  res.render(path.join(__dirname, './views/admin/reservation-legacy'));
});

app.use('/reservations', reservationRouter);

app.listen(3000);
