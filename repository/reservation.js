let reservations = [
  {
    id: 1,
    name: '브라운',
    date: '2024-05-18',
    time: '10:00',
  },
  {
    id: 2,
    name: '브라운',
    date: '2024-05-18',
    time: '10:00',
  },
];

let ID = 3;

export async function findAll() {
  return reservations;
}

export async function findById(idToFind) {
  return reservations.find((reservation) => reservation.id === idToFind);
}

export async function save(reservation) {
  const id = ID++;
  const result = { id, ...reservation };
  reservations.push(result);
  return result;
}

export async function remove(idToRemove) {
  reservations = reservations.filter((reservation) => reservation.id !== idToRemove);
  return;
}
