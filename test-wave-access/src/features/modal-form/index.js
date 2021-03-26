import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch, useStore} from "react-redux";
import {addUser} from "../../app/redux/action";
import "./index.css"

const ModalForm = () => {
    const dispatch = useDispatch();
    const activeQueue = useStore().getState().activeQueue;

    const [user, setUser] = useState({id: 0, lastName: "", firstName: ""});

    const [show, setShow] = useState(false);
    const handleSubmitClose = () => {
        if (user.lastName.trim() && user.firstName.trim()) {
            setShow(false);
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.lastName.trim() && user.firstName.trim()) {
            dispatch(addUser(user));
            setUser({id: 0, lastName: "", firstName: ""})
        }
    };

    const changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let lastId = activeQueue[activeQueue.length - 1].id;

        setUser(prev => ({
            ...prev, ...{
                id: lastId + 1,
                [name]: value
            }
        }))
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mb-3">Записаться к доктору</Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Записаться на прием</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="">
                            <Form.Label>Введите фамилию:</Form.Label>
                            <Form.Control name="lastName" type="text" placeholder="Иванов"
                                          value={user.lastName}
                                          onChange={changeHandler}/>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Введите имя:</Form.Label>
                            <Form.Control name="firstName" type="text" placeholder="Иван"
                                          value={user.firstName}
                                          onChange={changeHandler}/>
                        </Form.Group>
                        <Button type="submit" variant="primary" className="form__button"
                                onClick={handleSubmitClose}>Отправить</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default ModalForm;
