const userGet = (req, res) => {

    const {q, nombre, edad} = req.query;

    res.json({
        msj:'get', 
        q, 
        nombre, 
        edad
    })
}

const userPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        nombre,
        edad
    })
}

const userPut = (req, res) => {
    const id = req.params.id;

    res.json({
        msj:'put', 
        id
    })
}

const userDelete = (req, res) => {
    res.json({msj:'delete'})  
}

module.exports = {
    userGet, 
    userPost, 
    userPut, 
    userDelete
}