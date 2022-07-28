const router = require('express').Router();
const choresController = require('./controllers/chores.controller');
const roomsController = require('./controllers/rooms.controller');

//chore routes
router.post('/chores', choresController.createChore);
router.get('/chores', choresController.getChores);

//room routes
router.post('/rooms', roomsController.createRoom);
router.get('/rooms', roomsController.getRooms);

module.exports = router;
