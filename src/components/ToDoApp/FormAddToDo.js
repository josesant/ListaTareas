import React, { useState } from "react";
import { FaPlus } from 'react-icons/fa';

const FormTodoAdd = ({addTodo,setFilter,filter }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);

        setInputValue("");   
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row" style={{ fontSize: '20px'}}>
                <div className="col-3">
                    <div className="form-group">
                        <label className="form-label form-label-lg" htmlFor="filtro">FILTRO</label>
                        <select id="filtro" className="form-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="todos">Todos</option>
                            <option value="realizadas">Realizadas</option>
                            <option value="pendientes">Pendientes</option>
                        </select>
                    </div>
                </div>
                <div className="col-9 d-flex align-items-end">
                    <div className="form-group flex-grow-1 me-3">
                        <label className="form-label form-label-lg" htmlFor="inputTodo">NUEVA TAREA</label>
                        <input
                            id="inputTodo"
                            className="form-control"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Agregar tarea"
                        />                        
                    </div>
                    <button type="submit" className="btn btn-primary" ><FaPlus /></button>
                </div>
            </div>
        </form>
    );
};

export default FormTodoAdd;
