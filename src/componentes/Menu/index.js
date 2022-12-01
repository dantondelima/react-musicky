import { Link } from "react-router-dom";
import {useEffect} from 'react';
import './style.css';

function Menu() {

    return(
        <div className="menu">
            <Link to="/artista">Artista</Link>
            <Link to="/album">Álbum</Link>
            <Link to="/musica">Música</Link>
        </div>
    )
}
export default Menu