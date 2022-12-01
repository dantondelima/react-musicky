import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'

function Delete()
{
    const { id } = useParams();
    const [album,setAlbum] = useState({});
    const [status,setStatus] = useState('');
    const [botaoStatus,setBotaoStatus] = useState(true);
    useEffect(()=>{
        async function consultar() {
            const response = await axios.get(`http://localhost/api/album/${id}`);
            setAlbum(response.data.data);
            setBotaoStatus(false);
        }
        consultar();
    },[]);
    async function confirmar(e){
        try{
            const response = await axios.delete(`http://localhost/api/album/${id}`);
            setStatus("Album Excluído");
            setAlbum({});
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    return(
        <div>
            <h3>{album.nome}</h3>
            { status!='Album Excluído' ? <button onClick={confirmar} disabled={botaoStatus}>Confirmar Exclusão</button> : '' }
            <br></br>
            <br></br>
            <Link to='/album'>Voltar</Link>
            <h3>{status}</h3>
        </div>
    )
}
export {Delete}