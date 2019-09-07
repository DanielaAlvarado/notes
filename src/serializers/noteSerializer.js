exports.serialize = (note, option) => {
    switch(option){
        default:
            return {
                id: note.id,
                title: note.title,
                content: note.content
            }
    }
};

exports.collection = (noteCollection, option) => {
    return noteCollection.map((note) => {
        return exports.serialize(note, option);
    });
}
