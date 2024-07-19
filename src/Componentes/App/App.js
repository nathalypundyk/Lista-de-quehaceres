import './App.css';
import React, { useState } from 'react';
import Buscador from '../Buscador/Buscador';
import Tareas from '../Tarea/Tarea';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const actualizarLista = (nuevaTarea) => {
    setListaTareas([...listaTareas, nuevaTarea]);
  }

  const eliminarTareaDeLaLista = (texto) => {
    setListaTareas(listaTareas.filter(tarea => tarea.texto !== texto));
  }

  const toggleTareaCompletada = (tarea) => {
    const listaActualizada = listaTareas.map(t =>
      t.texto === tarea.texto ? { ...t, completada: !t.completada } : t
    );
    setListaTareas(listaActualizada);
  }

  return (
    <div className="App">
      <div className='App-header'>
      <Buscador actualizarLista={actualizarLista} />
      {
        listaTareas.map((tarea, index) => (
          <Tareas
            key={index}
            tarea={tarea}
            eliminarTareaDeLaLista={eliminarTareaDeLaLista}
            toggleTareaCompletada={toggleTareaCompletada}
          />
        ))
      }
      </div>
    </div>
  );
}

export default App;
