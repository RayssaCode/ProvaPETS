import { con } from './connection.js'


export async function inserirPet(pet){
    const comando = 
    `
    INSERT INTO tb_pets(nm_pet)
     VALUES (?);
    `
    const [resposta] = await con.query(comando, [pet.nome]);
    pet.id = resposta.insertId;
    return pet;
}


export async function listarTodosPets(){
    const comando =
    `
    select id_pet        id,
            nm_pet      nome
        from tb_pets;
    `
    const [linhas] = await con.query(comando);
    return linhas;
}