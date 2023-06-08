import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <div>
            <ListGroup> 

                {
                    //mapeo el arreglo para poder acceder a los datos
                    //pos -> es la posicion del item
                    props.arregloTareas.map((item, pos) => <ItemTarea key={pos} tareaCargada={item} borrarTarea={props.borrarTarea}></ItemTarea>)
                }

            </ListGroup>
        </div>
    );
};

export default ListaTareas;