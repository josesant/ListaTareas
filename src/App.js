import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import Formulario from './components/Formulario';

const App = () => {
    return (
        <div>
            <section className='container my-5 text'>
                <Titulo/>
                <Subtitulo/>
                <Formulario/>
            </section>
        </div>
    );
};

export default App;