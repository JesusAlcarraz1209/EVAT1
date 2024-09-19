// client/src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
    const [student, setStudent] = useState({
        nombres: '',
        apellidos: '',
        fechaNacimiento: '',
        direccion: '',
        telefono: ''
    });

    const [showData, setShowData] = useState(false);
    const [dataToShow, setDataToShow] = useState(null);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simula el comportamiento del backend
        setDataToShow(student);
        setShowData(true);

        // Borra la información después de 7 segundos
        setTimeout(() => {
            setShowData(false);
            setStudent({
                nombres: '',
                apellidos: '',
                fechaNacimiento: '',
                direccion: '',
                telefono: ''
            });
        }, 7000);
    };

    return (
        <div className="App">
            <h1>Registro de Estudiante</h1>
            {!showData ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombres:</label>
                        <input
                            type="text"
                            name="nombres"
                            value={student.nombres}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos:</label>
                        <input
                            type="text"
                            name="apellidos"
                            value={student.apellidos}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Fecha de Nacimiento:</label>
                        <input
                            type="date"
                            name="fechaNacimiento"
                            value={student.fechaNacimiento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Dirección:</label>
                        <input
                            type="text"
                            name="direccion"
                            value={student.direccion}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono:</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={student.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
            ) : (
                <div className="data-display">
                    <h2>Datos del Estudiante Registrado:</h2>
                    <p><strong>Nombres:</strong> {dataToShow.nombres}</p>
                    <p><strong>Apellidos:</strong> {dataToShow.apellidos}</p>
                    <p><strong>Fecha de Nacimiento:</strong> {dataToShow.fechaNacimiento}</p>
                    <p><strong>Dirección:</strong> {dataToShow.direccion}</p>
                    <p><strong>Teléfono:</strong> {dataToShow.telefono}</p>
                </div>
            )}
        </div>
    );
}

export default App;
