
const defaultState = {
    todos: []
};

export const customerReducer = (state = defaultState, action) => {
        switch (action.type) {
            case "ADD_TODO":
                return {...state, todos: [...state.todos, action.payload]}
            case "REMOVE_TODO":
                return {...state, todos:   state.todos.filter(todo => todo.id !== action.payload)}
            case "CHECKBOX":
                return {...state, todos: state.todos.map(todo => {
                    if (todo.id === action.payload){
                        return {...todo, isDone: !todo.isDone}
                    } else {
                        return todo
                    }
                })}
            case "DELETE_ALL": 
                return {...state, todos: state.todos.filter(todo => todo.isDone === false)}
            default: 
                return state

        }
}





// const defaultState = {
//     todos: []
// };

// export const customerReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case "ADD_TODO":
//             return { ...state, todos: [...state.todos, action.payload] };
//         case "REMOVE_TODO":
//             return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
//         case "CHECKBOX":
//             return {
//                 ...state, todos: state.todos.map(todo => {
//                     if (todo.id === action.payload) {
//                         return { ...todo, isDone: !todo.isDone }; // Toggle isDone
//                     } else {
//                         return todo;
//                     }
//                 })
//             };
//         default:
//             return state;
//     }
// };
