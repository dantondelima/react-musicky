import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'

function Delete()
{
    const { id } = useParams();
    const [artista,setArtista] = useState({});
    const [status,setStatus] = useState('');
    const [botaoStatus,setBotaoStatus] = useState(true);
    useEffect(()=>{
        async function consultar() {
            const response = await axios.get(`http://localhost/api/artista/${id}`);
            setArtista(response.data.data);
            setBotaoStatus(false);
        }
        consultar();
    },[]);
    async function confirmar(e){
        try{
            const response = await axios.delete(`http://localhost/api/artista/${id}`);
            setStatus("Artista Excluído");
            setArtista({});
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    return(
        <div>
            <h3>{artista.nome}</h3>
            { status!='Artista Excluído' ? <button onClick={confirmar} disabled={botaoStatus}>Confirmar Exclusão</button> : '' }
            <br></br>
            <br></br>
            <Link to='/artista'>Voltar</Link>
            <h3>{status}</h3>
        </div>
    )
}
export {Delete}