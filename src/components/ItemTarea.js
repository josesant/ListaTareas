import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = (props) => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                {props.tareaCargada}
                <div className="d-flex justify-content-beetwen">
                    <Button
                        variant="warning"
                        onClick={() => props.borrarTarea(props.tareaCargada)}
                    >
                    Borrar
                    </Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;
