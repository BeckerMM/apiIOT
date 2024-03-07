const leiteenvasadoobj = [];

const dadosDoMiguel = []
const dadosParaLuka = []


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

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const percorrerdados = (dado,array) => {
    const obj = {};       
    obj.dataValidade = randomDate(start, end).toLocaleDateString();
    obj.quantidade = dados.quantidade;
    obj.produto = dado.tipo
    array.push(obj);
}
    

function getLuka(res){
    const start = new Date(2024, 1, 1); // Início do período
    const end = new Date(start.getTime() + 1000 * 60 * 60 * 24 * 365 * 5); // Término do período

    dadosDoMiguel.forEach((item) => {    
        percorrerdados(item, dadosParaLuka);
    })
    leiteenvasadoobj.forEach((item) => {   
        percorrerdados(item, dadosParaLuka);
        
    })
    
    return res.status(200).json({dadosParaLuka});
                                                                                               
}
module.exports = {
    leiteenvasado,
    getLeiteenvasado, 
    postDadosDoMiguel,
    getDadosDoMiguel,
    getLuka
};