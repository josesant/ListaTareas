import React from "react";
import { FaPen, FaTrash } from 'react-icons/fa';
import FormUpdateToDo from "./FormUpdateToDo";

const ItemToDo = ({ todo, deleteTodo, editTodo, updateTodo, cancelEdit, editingTodo, editedTodo, setEditedTodo,changeState }) => {   
   
    const handleEdit = () => {
        editTodo(todo.id);
    };

    const handleUpdate = (e) => {
        updateTodo(e);
    };

    const handleCancel = () => {
        cancelEdit();
    };

    return (
        <li className="list-group-item m-0 " key={todo.id}>
            <div className="row">
                {editingTodo === todo.id ? (
                    <FormUpdateToDo handleUpdate={handleUpdate} handleCancel={handleCancel} editedTodo={editedTodo} 
                    setEditedTodo={setEditedTodo}/>
                ) : (
                    <>
                        <div className="col-8 col-md-10 d-flex p-0">
                            <div className="form-check d-flex align-items-center ms-4">
                                <input 
                                    className="form-check-input me-2" 
                                    type="checkbox"
                                    checked={todo?.state === 'realizada'}  
                                    onChange={()=> changeState(todo.id)}                                  
                                />
                                <label className="form-check-label flex-grow-1" >{todo.todo}</label>

                            </div>
                        </div>
                        <div className="col-4 col-md-2 p-0">
                            <div className="btn-group d-flex justify-content-center">
                                <button className="btn btn-warning me-1 btn-sm" onClick={handleEdit} disabled={editingTodo !== null}                                >
                                    <FaPen />
                                </button>
                                <button onClick={() => deleteTodo(todo.id)} className="btn btn-sm btn-danger text-dark">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </li>
    );
};

export default ItemToDo;

// import React from "react";
// import { FaPen, FaTrash } from 'react-icons/fa';

// const ItemToDo = ({ todo, deleteTodo, editTodo, editingTodo, updateTodo, editedTodo, setEditedTodo }) => {
//   const handleEdit = () => {
//     editTodo(todo.id);
//   };

//   const handleUpdate = (e) => {
//     updateTodo(e);
//   };

//   const handleCancel = () => {
//     setEditedTodo('');
//   };

//   return (
//     <li className="list-group-item m-0">
//       <div className="row">
//         <div className="col-8 col-md-10 d-flex p-0">
//           {editingTodo === todo.id ? (
//             <form onSubmit={handleUpdate} className="w-100">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={editedTodo}
//                   onChange={(e) => setEditedTodo(e.target.value)}
//                 />
//                 <button type="submit" className="btn btn-success">
//                   Guardar
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={handleCancel}
//                 >
//                   Cancelar
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div className="form-check d-flex align-items-center ms-4">
//               <input className="form-check-input me-2" type="checkbox" />
//               <label className="form-check-label flex-grow-1">{todo.todo}</label>
//             </div>
//           )}
//         </div>
//         <div className="col-4 col-md-2 d-flex justify-content-center p-0">
//           <button
//             className="btn btn-warning me-1"
//             onClick={handleEdit}
//             disabled={editingTodo !== null}
//           >
//             <FaPen />
//           </button>
//           <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
//             <FaTrash />
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default ItemToDo;
