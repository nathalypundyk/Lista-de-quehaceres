import React, { useState } from 'react';
import '../App/App.css';

const Buscador = (props) => {
    const [tarea, setTarea] = useState('');

    const agregarTarea = (e) => {
        e.preventDefault();
        if (tarea.trim() === '') return;
        const tareaNueva = {
            texto: tarea,
            completada: false
        };
        props.actualizarLista(tareaNueva);
        setTarea('');
    }

    return (
        <div>
            <form onSubmit={agregarTarea}>
                <input className='inputAgregar'
                    type='text'
                    id='buscador'
                    name='buscador'
                    placeholder='Escribe una tarea nueva'
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                />
                <button className='btnAgregar' type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default Buscador;
