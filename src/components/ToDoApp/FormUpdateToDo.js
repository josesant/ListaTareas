import React, { useRef, useEffect } from 'react';
import { FaRegWindowClose, FaRegCheckSquare } from 'react-icons/fa';
import UseToDo from '../../hooks/UseToDo';

const FormUpdateToDo = ({ handleUpdate, handleCancel,editedTodo ,setEditedTodo}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form>
            <div className="row" style={{ fontSize: '20px' }}>
                <div className="col-10 d-flex align-items-end">
                    <div className="form-group flex-grow-1 me-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={editedTodo}
                                onChange={(e) => setEditedTodo(e.target.value)}
                                ref={inputRef}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 p-0">
                    <div className="btn-group d-flex justify-content-center">
                        <button type="submit" className="btn btn-success me-1" onClick={handleUpdate}>
                            <FaRegCheckSquare />
                        </button>
                        <button type="button" className="btn btn-dark" onClick={handleCancel}>
                            <FaRegWindowClose />
                        </button>
                    </div>
                </div>
            </div>
        </form >
    );
};

export default FormUpdateToDo;