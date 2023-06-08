//useState siempre tiene q estar importado para poder usar hook
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
    // -Funciones y logica

    //Tareas de local storaf
    let tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) || [];

    // Crear un State
    const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);
    const [tarea, setTarea] = useState("");
    const [tareaVacia, setTareaVacia] = useState(false);

    //Ciclo de vida del componente
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(arregloTareas));
    }, [arregloTareas]);

    // Nomeclatura sugerida por React HANDLE
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarea.trim() === "") {
            setTareaVacia(true);
            return;
        }
        setArregloTareas([...arregloTareas, tarea]);
        setTarea("");
        setTareaVacia(false);
    };

    const borrarTarea = (valor) => {
        const arregloModificado = arregloTareas.filter((val) => {
            return val !== valor;
        });
        setArregloTareas(arregloModificado);
    };

    // -Maquetado
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control
                        type="text"
                        placeholder="Ingrese una tarea."
                        onChange={(e) => setTarea(e.target.value.trimStart())}
                        value={tarea}
                        className={tareaVacia ? "border border-danger" : ""}
                    />
                    <Button variant="primary" type="submit">
                        Crear
                    </Button>
                </Form.Group>
            </Form>

            {/*Aqui invoco la lista de tareas*/}
            <ListaTareas
                arregloTareas={arregloTareas}
                borrarTarea={borrarTarea}
            />
        </div>
    );
};

export default Formulario;
