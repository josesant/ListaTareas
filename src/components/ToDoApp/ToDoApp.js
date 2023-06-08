import React from 'react';
import FormAddToDo from './FormAddToDo';
import ListToDo from './ListToDo';
import UseToDo from '../../hooks/UseToDo';

const ToDoApp = () => {
    const {
        todos,
        editingTodo,
        editedTodo,
        filter,
        countPending,
        countDone,
        setFilter,
        setEditedTodo,
        addTodo,
        deleteTodo,
        editTodo,
        updateTodo,
        cancelEdit,
        changeState,
    } = UseToDo();

    return (
        <div className="card w-100" style={{height: "600px" }}>
            <div className="card-header text-center">
                <h1>Lista de tareas</h1>
            </div>
            <div className="card-body p-0">
                <div className="container">
                    <FormAddToDo addTodo={addTodo} setFilter={setFilter} />
                    <ListToDo
                        todos={todos}
                        filter={filter}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        updateTodo={updateTodo}
                        cancelEdit={cancelEdit}
                        editingTodo={editingTodo}
                        editedTodo={editedTodo}
                        setEditedTodo={setEditedTodo}
                        changeState={changeState}
                    />
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <div>
                    Realizadas:<span className='badge bg-success ms-2'>{countDone}</span>
                </div>
                <div>
                    Pendientes:<span className='badge bg-danger ms-2'>{countPending}</span>
                </div>
            </div>
        </div>
    );
};

export default ToDoApp;
