import React from "react";
import {Link} from "react-router-dom";
import ModalForm from "../../features/modal-form";
import UserList from "../../features/queue-list";
import {connect} from "react-redux";

const ActiveQueuePage = ({activeQueue}) => {

    return (
        <>
            <Link to="/visited" className="d-block mt-3 mb-3">Посетившие доктора &#8594;</Link>
            <ModalForm/>
            <UserList users={activeQueue}/>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        activeQueue: state.activeQueue
    };
};

export default connect(mapStateToProps, null)(ActiveQueuePage);
