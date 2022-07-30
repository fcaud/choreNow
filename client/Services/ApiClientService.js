const choreUrl =
  'https://0b3f-2a00-23c5-42e-a001-1590-1888-da02-cbf2.ngrok.io/chores';
const rankUrl =
  'https://0b3f-2a00-23c5-42e-a001-1590-1888-da02-cbf2.ngrok.io/chores/ranked';
const roomUrl =
  'https://0b3f-2a00-23c5-42e-a001-1590-1888-da02-cbf2.ngrok.io/rooms';
const settingsUrl =
  'https://0b3f-2a00-23c5-42e-a001-1590-1888-da02-cbf2.ngrok.io/settings';

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
async function getRankedChores() {
  try {
    let chores = await fetch(rankUrl);
    chores = await chores.json();
    return chores;
  } catch (e) {
    console.log('getAllChores error', e);
  }
}
async function createChore(chore) {
  let choreAdded = await fetch(choreUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(chore),
  });
  choreAdded = await choreAdded.json();
  return choreAdded;
}
async function editChore() {}
async function deleteChore(id) {
  await fetch(choreUrl, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id),
  });
}

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
async function createRoom(room) {
  let roomAdded = await fetch(roomUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(room),
  });
  roomAdded = await roomAdded.json();
  return roomAdded;
}
async function editRoom(id, data) {}
async function deleteRoom(id) {
  await fetch(roomUrl, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id),
  });
}

//Settings calls
async function getSettings() {
  try {
    let settings = await fetch(settingsUrl);
    settings = await settings.json();
    return settings;
  } catch (e) {
    console.log('getSettings error', e);
  }
}
async function setSettings(settingsData) {
  try {
    let settings = await fetch(settingsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settingsData),
    });
    settings = await settings.json();
    return settings;
  } catch (e) {
    console.log('getSettings error', e);
  }
}
async function updateSettings(settingsData) {
  try {
    let settings = await fetch(settingsUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settingsData),
    });
  } catch (e) {
    console.log('getSettings error', e);
  }
}

module.exports = {
  getAllChores,
  getRankedChores,
  createChore,
  editChore,
  deleteChore,
  getAllRooms,
  createRoom,
  editRoom,
  deleteRoom,
  getSettings,
  setSettings,
  updateSettings,
};
