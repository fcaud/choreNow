const choreUrl = 'http://localhost:3000/chores';
const roomUrl = 'http://localhost:3000/rooms';

//Chore calls
async function getAllChores() {
  try {
    console.log('hi chores');
    let chores = await fetch(choreUrl);
    console.log('2 chores');

    chores = await chores.json();
    console.log(chores);
    return chores;
  } catch (e) {
    console.log('getAllChores error', e);
  }
}
async function createChore() {}
async function editChore() {}
async function deleteChore() {}

//room calls
async function getAllRooms() {
  try {
    console.log('hi rooms');
    let rooms = await fetch(roomUrl);
    console.log('2 rooms');
    rooms = await rooms.json();
    console.log(rooms);
    return rooms;
  } catch (e) {
    console.log('getAllRooms error', e);
  }
}
async function createRoom() {}
async function editRoom() {}
async function deleteRoom() {}

module.exports = {
  getAllChores,
  createChore,
  editChore,
  deleteChore,
  getAllRooms,
  createRoom,
  editRoom,
  deleteRoom,
};
