const router = require('express').Router();
const choresController = require('./controllers/chores.controller');
const roomsController = require('./controllers/rooms.controller');

//chore routes
router.post('/chores', choresController.createChore);
router.get('/chores', choresController.getChores);
router.put('/chores', choresController.editChore);
router.delete('/chores', choresController.deleteChore);
router.get('/chores/ranked', choresController.getChoresInOrder);

//room routes
router.post('/rooms', roomsController.createRoom);
router.get('/rooms', roomsController.getRooms);
router.put('/rooms', roomsController.editRoom);
router.delete('/rooms', roomsController.deleteRoom);

//settings routes
router.get('/settings');
router.post('/settings');
router.put('/settings');

module.exports = router;
