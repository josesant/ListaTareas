import {useState,useEffect} from 'react';

const UseToDo = () => {

    let tareasLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(tareasLocalStorage);
    const [editingTodo, setEditingTodo] = useState(null);
    const [editedTodo, setEditedTodo] = useState(''); 
    const [filter, setFilter] = useState('todas');
    const [changeStateTodo, setChangeStateTodo] = useState(null);
    const [countPending, setCountPending] = useState(0); // Contador de tareas pendientes
    const [countDone, setCountDone] = useState(0);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        const pendingCount = todos.filter(todo => todo.state === 'pending').length;
        const doneCount = todos.filter(todo => todo.state === 'realizada').length;       
        setCountPending(pendingCount);
        setCountDone(doneCount);
    }, [todos]);
  
    const addTodo = (newTodo) => {
      if (newTodo.trim() !== '') {
        const todo = {
          id: new Date().getTime(),
          todo: newTodo,
          state: 'pending',
          datetime: new Date().toLocaleString()
        };
        setTodos([...todos, todo]);
      }
    };
  
    const deleteTodo = (id) => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    };
  
    const editTodo = (id) => {
      setEditingTodo(id);
      const todoToEdit = todos.find(todo => todo.id === id);
      setEditedTodo(todoToEdit.todo);
    };
  
    const updateTodo = (e) => {
      e.preventDefault();
      if (editedTodo.trim() !== '') {
        const updatedTodos = todos.map(todo => {
          if (todo.id === editingTodo) {
            return {
              ...todo,
              todo: editedTodo
            };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditingTodo(null);
        setEditedTodo('');
      }
    };
  
    const cancelEdit = () => {
      setEditingTodo(null);
      setEditedTodo('');
    };

    const changeState = (id) => {
        setChangeStateTodo(id);
        const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              state: todo.state === 'pending' ? 'realizada' : 'pending'
            };
          }
          return todo;
        });
        setTodos(updatedTodos);
      };

    return ({
        todos, setTodos,
        editingTodo, setEditingTodo,
        editedTodo, setEditedTodo,
        filter, setFilter,
        countPending,
        countDone,
        addTodo,
        deleteTodo,
        editTodo,
        updateTodo,
        cancelEdit,
        changeState
    });
};

export default UseToDo;
