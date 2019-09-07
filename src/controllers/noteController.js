const Note = require('../models/note');
const noteSerializer = require('../serializers/noteSerializer');

exports.index = async (req, res) => {
    try{
        const notes = await req.user.$relatedQuery('notes');

        res.send(noteSerializer.collection(notes));
    }catch(error){
        res.status(500).send({
            message: 'Error while retrieving notes'
        });
    }
};

exports.store = async (req, res) => {
    try{
        const note = await req.user.$relatedQuery('notes').insert({
            content: req.body.content,
            title: req.body.title
        });

        res.status(201).send(noteSerializer.serialize(note));
    }catch(error){
        res.status(400).send({
            message: 'Error while storing note'
        });
    }
};

exports.show = async (req, res) => {
    try{
        res.send(noteSerializer.serialize(req.note));
    }catch(error){
        res.status(500).send({
            message: 'Error while retrieving note'
        });
    }
};

exports.update = async (req, res) => {
    try{
        const note = await Note.query().patchAndFetchById(req.params.id, {
            content: req.body.content,
            title: req.body.title
        });

        if(!note){
            return res.status(404).send({
                message: 'Note not found'
            });
        }

        res.send(noteSerializer.serialize(note));
    }catch(error){
        res.status(400).send({
            message: 'Error while updating note'
        });
    }
};

exports.destroy = async (req, res) => {
    try{
        const deleted = await Note.query().deleteById(req.params.id);

        if(!deleted){
            return res.status(404).send({
                message: 'Note not found'
            });
        }

        res.send();
    }catch(error){
        res.status(500).send({
            message: 'Error while deleting note'
        });
    }
};
