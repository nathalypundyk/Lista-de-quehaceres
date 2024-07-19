import React from 'react';
import '../App/App.css';

const Tareas = (props) => {
    const { texto, completada } = props.tarea;

    const toggleTareaCompletada = () => {
        props.toggleTareaCompletada(props.tarea);
    }

    const eliminarTareaDeLaLista = () => {
        props.eliminarTareaDeLaLista(texto);
    }

    return (
        <div className='tarea'>
            <h3
                onClick={toggleTareaCompletada}
                style={{ textDecoration: completada ? 'line-through' : 'none' }}
            >
                {texto}
            </h3>            
            <button className='btnEliminar' onClick={eliminarTareaDeLaLista}>Eliminar</button>
        </div>
    );
}

export default Tareas;
