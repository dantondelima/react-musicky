import BemVindo from "../../componentes/BemVindo";
import {Link} from 'react-router-dom';
import {useState} from 'react';
function HomePage() {

    {/*const [contador,setContador]=useState(0)*/}

    return(
        <div>
            <BemVindo nome="Prof" endereco="Rua X"/>
            {/* <Link to="/artista">Artista</Link>
            <p>{contador}</p>
            <button onClick={ ()=>{ setContador(contador+1) }  }>Soma1</button> */}
        </div>
    )
}
export default HomePage