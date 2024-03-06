const leiteenvasadoobj = [];

const dadosDoMiguel = []



// POST
function postDadosDoMiguel(req, res) {
    const dados = req.body;
    console.log(dados);
    try{
        dadosDoMiguel.push(dados);
        return res.status(200).json({dadosDoMiguel});
    }catch{
        return res.status(400).json({erro:"Erro ao adicionar leite"});
    }
}

function leiteenvasado  (req, res) {
    const leiteenvasado = req.body;
    console.log(leiteenvasado);
    try{
        leiteenvasadoobj.push(leiteenvasado);
        return res.status(200).json({leiteenvasadoobj});
    }catch{
        return res.status(400).json({erro:"Erro ao adicionar leite"});
    }

}



// GETS
function getLeiteenvasado (res)  
{
    return res.status(200).json({leiteenvasadoobj});
}
function getDadosDoMiguel (res)  {
    return res.status(200).json({dadosDoMiguel});
}

module.exports = {
    leiteenvasado,
    getLeiteenvasado, 
    postDadosDoMiguel,
    getDadosDoMiguel
};