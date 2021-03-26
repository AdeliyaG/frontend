const initialState = {
    activeQueue: [
        {id: 1, lastName: "Петров", firstName: "Петя"},
        {id: 2, lastName: "Иванов", firstName: "Иван"},
        {id: 3, lastName: "Сергеев", firstName: "Сергей"}
    ],
    visitedQueue: [
        {id: 42, lastName: "Данилов", firstName: "Данил"}
    ],
};

const addUserReducer = (state = initialState, action) => {
    if (action.type === "ADD_USER") {
        return {...state, activeQueue: state.activeQueue.concat([action.payload]) }
    } else {
        return state;
    }
};

export default addUserReducer;
