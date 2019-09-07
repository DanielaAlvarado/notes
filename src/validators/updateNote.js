const {validated} = require('./validator');

const rules = {
    content: 'required|string',
    text: 'string'
};

const updateNote = async (req, res, next) => {
    try{
        await validated(req.body, rules);
        next();
    }catch(error){
        res.status(400).send({
            message: error[0].message
        });
    }
}

module.exports = updateNote;
