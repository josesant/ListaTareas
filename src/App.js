import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ToDoApp from './components/ToDoApp/ToDoApp';

const App = () => {
    return (
        <div className="container-fluid p-0">
            <div className=" d-flex vh-100 justify-content-center " >
                <div className="col-12 col-md-8 col-lg-5 d-flex align-items-start p-1 mt-3" >
                    <ToDoApp />
                </div>
            </div>
        </div>
    );
};

export default App;