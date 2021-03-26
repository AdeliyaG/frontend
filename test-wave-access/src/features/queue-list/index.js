import React from "react";
import {Table} from "react-bootstrap";
import ListItem from "../list-item";

const UserList = (props) => {
    return (
        <Table responsive striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Фамилия</th>
                <th>Имя</th>
            </tr>
            </thead>
            <tbody>
            {props.users.map(user => {
                return <ListItem user={user} key={user.id}/>
            })}
            </tbody>
        </Table>
    )
};

export default UserList;
