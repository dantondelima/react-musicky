import axios from 'axios';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function Create()
{
    const [musica,setMusica] = useState({});
    const [artista,setArtista] = useState([]);
    const [album,setAlbum] = useState([]);
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
        async function consultarAlbum() {
            const response = await fetch(`http://localhost/api/album`);
            const getres = await response.json();
            setAlbum(await getres.data);
        }
        consultarAlbum();
    },[]);

    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            const response = await axios.post('http://localhost/api/musica',musica);
            setStatus("Musica Cadastrada");
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    const handleartista=(event)=>{
        const selected = document.querySelectorAll('#artistas option:checked');
        const values = Array.from(selected).map(el => el.value);
        setMusica({...musica,'artista_id':values})
        event.preventDefault();
    }

    const handlealbum=(event)=>{
        const getalbumid= event.target.value;
        setMusica({...musica,'album_id':getalbumid});
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={ gravar }>
                <br></br>
                Nome: <input value={musica.nome} onChange={ (e)=>{setMusica({...musica,'nome':e.target.value})} } />
                <br></br>
                <br></br>
                Álbum: <select name="artista"  onChange={(e)=>handlealbum(e)}>
                        <option>selecione um artista</option>
                        {
                            album.map((data)=>(
                            <option key={data.id} value={data.id }> { data.nome}</option>
                            ))
                        }
                    </select> 
                <br></br>
                <br></br>
                Artista (segure shift para selecionar múltiplos artistas): 
                <br></br>
                    <select name="artista" id="artistas" onChange={(e)=>handleartista(e)} multiple>
                        <option>selecione um artista</option>
                        {
                            artista.map((data)=>(
                            <option key={data.id} value={data.id }> { data.nome}</option>
                            ))
                        }
                    </select> 
                <br></br>
                <br></br>
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/musica'>Voltar</Link>
        </div>
    )
}
export {Create}