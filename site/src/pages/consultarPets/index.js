import { consultarPet } from '../../api/pets.js'
import { useEffect, useState } from 'react'
    

export default function ConsultarPets(){
    const [consultar, setConsultar] = useState([]);

    async function carregarToods(){
        const resp = await consultarPet();
        setConsultar(resp);
    }

    useEffect(() => {
        carregarToods();
    }, [])

    return(
        <main>
            <h1>
                CONSULTAR TODOS PETS
            </h1>

            {consultar.map(pet => 
                <section>
                    <div>
                        <h3> PETS CADASTRADOS </h3>
                    </div>
                    <div>
                       <p> Id do PET: {pet.id} </p>
                       <p> Nome do PET: {pet.nome} </p> 
                    </div>
                </section>
                
                )}
        </main>
    )
}