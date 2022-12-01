import Lista from "../../componentes/Lista"
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
function Musica() {
 
    const axios = require('axios');
    const [musica,setMusica] = useState([])

    useEffect( ()=>{

        async function consultar(){
            const resposta = await axios.get("http://localhost/api/musica");
            setMusica(resposta.data.data)
        }

        consultar();

    } , []  )

    return(
        <div>
        <Link to='/musica/create'>Criar Nova</Link>
        <table>
            <caption>Musicas</caption>
            <tr>
                <th>Nome</th>
            </tr>
            {musica.map( (p)=><tr key={p.id}>
                                <td>{p.nome}</td>
                                <td><Link to={'/musica/edit/' + p.id}>Editar</Link></td>
                                <td><Link to={'/musica/delete/' + p.id}>Excluir</Link></td>
                              </tr> )}
        </table>
        </div>
    )
}
export default Musica