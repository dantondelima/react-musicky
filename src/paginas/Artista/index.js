import Lista from "../../componentes/Lista"
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
function Artista() {
 
    const axios = require('axios');
    const [artista,setArtista] = useState([])

    useEffect( ()=>{

        async function consultar(){
            const resposta = await axios.get("http://localhost/api/artista");
            //console.log(resposta);
            setArtista(resposta.data.data)
        }

        consultar();

    } , []  )

    return(
        <div>
        <Link to='/artista/create'>Criar Novo</Link>
        <table>
            <caption>Artistas</caption>
            <tr>
                <th>Nome</th>
                <th>idade</th>
                <th>Início</th>
            </tr>
            {artista.map( (p)=><tr key={p.id}>
                                <td>{p.nome}</td>
                                <td>{p.idade}</td>
                                <td>{p.data_inicio_carreira}</td>
                                <td><Link to={'/artista/edit/' + p.id}>Editar</Link></td>
                                <td><Link to={'/artista/delete/' + p.id}>Excluir</Link></td>
                              </tr> )}
        </table>
        </div>
    )
}
export default Artista