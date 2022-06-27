import { useNavigate } from 'react-router-dom'

export default function Index(){
    const navigate = useNavigate();

    function  navegarInserirClick(){
        navigate('/pet/inserir')
    }

    function navegarConsultarClick(){
        navigate('pet/consultar')
    }

    return(
        <main>
            <h1> PROVA DO BRUNEX - PETS </h1>

            <div onClick={navegarInserirClick}>
                Inserir pets
            </div>
            <div onClick={navegarConsultarClick}>
                Consultar Pets
            </div>
        </main>
    )
}