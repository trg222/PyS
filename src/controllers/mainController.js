const path = require ('path');

module.exports ={
    
    //Esta será la accion que ocurrirá al ir a /index en el sitio web
    index : (req, res) =>{
        return res.render(path.resolve(__dirname, '../views/index.ejs'))
    },

    //Esta será la accion que ocurrirá al ir a /about en el sitio web
    about : (req, res) =>{
        //código
    }
}