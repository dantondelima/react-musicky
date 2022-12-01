import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Create()
{
    const [artista,setArtista] = useState({});
    const [status,setStatus] = useState('');
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            const response = await axios.post('http://localhost/api/artista',artista);
            setStatus("Artista Cadastrado");
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    return(
        <div>
            <form onSubmit={ gravar }>
                <br></br>
                Nome: <input value={artista.nome} onChange={ (e)=>{setArtista({...artista,'nome':e.target.value})} } />
                <br></br>
                <br></br>
                Idade: <input value={artista.idade} onChange={ (e)=>{setArtista({...artista,'idade':e.target.value})} } />
                <br></br>
                <br></br>
                Data de início da carreira: <input type="date" value={artista.data_inicio_carreira} onChange={ (e)=>{setArtista({...artista,'data_inicio_carreira':e.target.value})} } />
                <br></br>
                <br></br>
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/artista'>Voltar</Link>
        </div>
    )
}
export {Create}