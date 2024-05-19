import * as reservationRepository from '../repository/reservation.js';

export async function getReservations(req, res) {
  const result = await reservationRepository.findAll();
  res.status(200).json(result);
}

export async function saveReservation(req, res) {
  const request = req.body;
  const result = await reservationRepository.save(request);
  res.status(200).json(result);
}

export async function deleteReservation(req, res) {
  const idToRemove = req.params.id;
  const reservation = await reservationRepository.findById(idToRemove);
  if (!reservation) {
    return res.sendStatus(404);
  }
  await reservationRepository.remove(idToRemove);
  res.sendStatus(200);
}
