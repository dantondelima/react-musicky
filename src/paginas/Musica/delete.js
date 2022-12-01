import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'

function Delete()
{
    const { id } = useParams();
    const [musica,setMusica] = useState({});
    const [status,setStatus] = useState('');
    const [botaoStatus,setBotaoStatus] = useState(true);
    useEffect(()=>{
        async function consultar() {
            const response = await axios.get(`http://localhost/api/musica/${id}`);
            setMusica(response.data.data);
            setBotaoStatus(false);
        }
        consultar();
    },[]);
    async function confirmar(e){
        try{
            const response = await axios.delete(`http://localhost/api/musica/${id}`);
            setStatus("Musica Excluído");
            setMusica({});
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    return(
        <div>
            <h3>{musica.nome}</h3>
            { status!='Musica Excluído' ? <button onClick={confirmar} disabled={botaoStatus}>Confirmar Exclusão</button> : '' }
            <br></br>
            <br></br>
            <Link to='/musica'>Voltar</Link>
            <h3>{status}</h3>
        </div>
    )
}
export {Delete}