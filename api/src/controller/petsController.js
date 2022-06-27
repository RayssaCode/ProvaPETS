import { Router } from "express";
import { inserirPet, listarTodosPets} from "../repository/petsRepository.js";

const server = Router();

server.post('/pets', async (req, resp) => {
    try{
        const petParaInserir = req.body;
        if(!petParaInserir.nome){
            throw new Error('Nome do pet é obrigatório!')
        }

        const petInserido = await inserirPet(petParaInserir);
        resp.send(petInserido);
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


server.get('/pets', async (req, resp) => {
    try{
        const resposta = await listarTodosPets();
        resp.send(resposta);
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        });
    }
});



export default server;