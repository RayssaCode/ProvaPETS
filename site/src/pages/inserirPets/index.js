import { useState } from 'react'
import { inserirPet } from '../../api/pets.js'

export default function InserirPet(){
    const [nome, setNome] = useState('');
    const [resposta, setResposta] = useState('');

    async function salvarClick(){
        try{
            const resp = await inserirPet(nome);
            setResposta('Pet cadastrado com sucesso :)');
        }
        catch(err){
            setResposta(err.response.data.erro);
        }
    }
    return(
        <main>
            <h1>
                Inserir Pet
            </h1>

            <div>
                <p> Insira o nome </p>
                <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>

                <button onClick={salvarClick}> Inserir</button>
            </div>
            <div>
                {resposta}
            </div>

        </main>
    )
}