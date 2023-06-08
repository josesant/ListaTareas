import React from "react";
import ItemToDo from "./ItemToDo";

const ListToDo = ({ todos, filter, deleteTodo, editTodo, updateTodo, cancelEdit, editingTodo, editedTodo, setEditedTodo, changeState }) => {
    let filteredTodos = todos;
    if (filter === 'pendientes') {
        filteredTodos = todos.filter(todo => todo.state === 'pending');
    } else if (filter === 'realizadas') {
        filteredTodos = todos.filter(todo => todo.state === 'realizada');
    }

    return (
        <ul className="list-group border mt-3" style={{ maxHeight: "320px", overflow: "auto" }}>
            {filteredTodos.map((todo, index) => (
                <ItemToDo
                    key={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    updateTodo={updateTodo}
                    cancelEdit={cancelEdit}
                    editingTodo={editingTodo}
                    editedTodo={editedTodo}
                    setEditedTodo={setEditedTodo}
                    changeState={changeState}              
                />
            ))}
        </ul>
    );
};

export default ListToDo;
