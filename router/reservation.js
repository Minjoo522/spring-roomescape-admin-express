import express from 'express';
import * as reservationController from '../controller/reservation.js';

const router = express.Router();

router.get('/', reservationController.getReservations);
router.post('/', reservationController.saveReservation);
router.delete('/:id', reservationController.deleteReservation);

export default router;
