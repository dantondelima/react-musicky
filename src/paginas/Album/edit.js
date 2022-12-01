import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'

function Edit()
{
    const { id } = useParams();
    const [album,setAlbum] = useState({});
    const [artista,setArtista] = useState([]);
    const [status,setStatus] = useState('');
    useEffect(()=>{
        async function consultarArtista() {
            const response = await fetch(`http://localhost/api/artista`);
            const getres = await response.json();
            setArtista(await getres.data);
        }
        consultarArtista();
    },[]);
    useEffect(()=>{
        async function consultar() {
            const response = await axios.get(`http://localhost/api/album/${id}`);
            setAlbum(response.data.data);
        }
        consultar();
    },[]);
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            const response = await axios.put(`http://localhost/api/album/${id}`,album);
            setStatus("Album Atualizado");
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }

    const handleartista=(event)=>{
        const getartistaid= event.target.value;
        setAlbum({...album,'artista_id':getartistaid});
        event.preventDefault();
      }
    return(
        <div>
            <form onSubmit={ gravar }>
                <br></br>
                Nome: <input value={album.nome} onChange={ (e)=>{setAlbum({...album,'nome':e.target.value})} } />
                <br></br>
                <br></br>
                Valor: <input value={album.valor} onChange={ (e)=>{setAlbum({...album,'valor':e.target.value})} } />
                <br></br>
                <br></br>
                Data de lançamento: <input type="date" value={album.data_lancamento} onChange={ (e)=>{setAlbum({...album,'data_lancamento':e.target.value})} } />
                <br></br>
                <br></br>
                Artista: <select name="artista"  onChange={(e)=>handleartista(e)}>
                        <option>selecione um artista</option>
                        {
                            artista.map((data)=>(
                            <option key={data.id} value={data.id } selected={data.id == album.artista_id? "selected":""}> { data.nome}</option>
                            ))
                        }
                    </select> 
                <br></br>
                <br></br>
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status}</h3>
        </div>
    )
}
export {Edit}