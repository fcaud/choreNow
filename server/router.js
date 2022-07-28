const router = require('express').Router();
const choresController = require('./controllers/chores.controller');
const roomsController = require('./controllers/rooms.controller');

router.post('/chores', choresController.createChore);
router.post('/rooms', roomsController.createRoom);

module.exports = router;
