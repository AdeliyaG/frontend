import React from "react";

const ListItem = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
        </tr>
    )
};

export default ListItem;
