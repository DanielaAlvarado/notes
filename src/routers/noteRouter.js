const express = require('express');
const binder = require('./binder');
const Note = require('../models/note');
const auth = require('../middleware/auth');
const noteController = require('../controllers/noteController');
const storeNote = require('../validators/storeNote');
const updateNote = require('../validators/updateNote');
const authorize = require('../middleware/authorize');
const notePolicy = require('../policies/notePolicy');

const router = new express.Router();

router.param('note', binder('note', Note));

router.get('/notes', auth, noteController.index);
router.post('/notes', auth, storeNote, noteController.store);
router.get('/notes/:note', auth, authorize(notePolicy, 'view'), noteController.show);
router.patch('/notes/:id', auth, authorize(notePolicy, 'update'), updateNote, noteController.update);
router.delete('/notes/:id', auth, authorize(notePolicy, 'delete'), noteController.destroy);

module.exports = router;
