exports.before = (user) => {
    return false;
}

exports.view = async (req) => {
    return await noteBelongsToUser(req.user, req.note.id);
}

exports.create = (req) => {
    return true;
}

exports.update = async (req) => {
    return await noteBelongsToUser(req.user, req.params.id);
}

exports.delete = async (req) => {
    return await noteBelongsToUser(req.user, req.params.id);
}

const noteBelongsToUser = async (user, noteId) => {
    return await user.$relatedQuery('notes').where('id', noteId).resultSize() > 0;
};
