import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Menu from './componentes/Menu';
import HomePage from './paginas/HomePage';
import Artista from './paginas/Artista';
import {Create as Artista_Create} from './paginas/Artista/create';
import {Edit as Artista_Edit} from './paginas/Artista/edit';
import {Delete as Artista_Delete} from './paginas/Artista/delete';
import Album from './paginas/Album';
import {Create as Album_Create} from './paginas/Album/create';
import {Edit as Album_Edit} from './paginas/Album/edit';
import {Delete as Album_Delete} from './paginas/Album/delete';
import Musica from './paginas/Musica';
import {Create as Musica_Create} from './paginas/Musica/create';
import {Edit as Musica_Edit} from './paginas/Musica/edit';
import {Delete as Musica_Delete} from './paginas/Musica/delete';

function App() {
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={ <HomePage />  } />
        <Route path="/artista" element={ <Artista />  } />
        <Route path="/artista/create" element={ <Artista_Create />  } />
        <Route path="/artista/edit/:id" element={ <Artista_Edit />  } />
        <Route path="/artista/delete/:id" element={ <Artista_Delete />  } />
        <Route path="/album" element={ <Album />  } />
        <Route path="/album/create" element={ <Album_Create />  } />
        <Route path="/album/edit/:id" element={ <Album_Edit />  } />
        <Route path="/album/delete/:id" element={ <Album_Delete />  } />
        <Route path="/musica" element={ <Musica />  } />
        <Route path="/musica/create" element={ <Musica_Create />  } />
        <Route path="/musica/edit/:id" element={ <Musica_Edit />  } />
        <Route path="/musica/delete/:id" element={ <Musica_Delete />  } />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
