import Lista from "../../componentes/Lista"
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
function Album() {
 
    const axios = require('axios');
    const [album,setAlbum] = useState([])

    useEffect( ()=>{

        async function consultar(){
            const resposta = await axios.get("http://localhost/api/album");
            //console.log(resposta);
            setAlbum(resposta.data.data)
        }

        consultar();

    } , []  )

    return(
        <div>
        <Link to='/album/create'>Criar Novo</Link>
        <table>
            <caption>Albums</caption>
            <tr>
                <th>Nome</th>
                <th>valor</th>
                <th>Data de lançamento</th>
            </tr>
            {album.map( (p)=><tr key={p.id}>
                                <td>{p.nome}</td>
                                <td>{p.valor}</td>
                                <td>{p.data_lancamento}</td>
                                <td><Link to={'/album/edit/' + p.id}>Editar</Link></td>
                                <td><Link to={'/album/delete/' + p.id}>Excluir</Link></td>
                              </tr> )}
        </table>
        </div>
    )
}
export default Album