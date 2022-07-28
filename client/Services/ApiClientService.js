const choreUrl =
  'https://0b3f-2a00-23c5-42e-a001-1590-1888-da02-cbf2.ngrok.io/chores';
const roomUrl =
  'https://0b3f-2a00-23c5-42e-a001-1590-1888-da02-cbf2.ngrok.io/rooms';

//Chore calls
async function getAllChores() {
  try {
    let chores = await fetch(choreUrl);
    chores = await chores.json();
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
    let rooms = await fetch(roomUrl);
    rooms = await rooms.json();
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
