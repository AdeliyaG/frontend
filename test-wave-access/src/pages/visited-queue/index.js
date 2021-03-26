import React from "react";
import {Link} from "react-router-dom";
import UserList from "../../features/queue-list";
import {useStore} from "react-redux";

const VisitedQueuePage = () => {
    const visitedQueue = useStore().getState().visitedQueue;

    return (
        <>
            <Link to="/" className="d-block mt-3 mb-3">&#8592; Активная очередь и запись</Link>
            <UserList users={visitedQueue}/>
        </>
    )
};

export default VisitedQueuePage;
