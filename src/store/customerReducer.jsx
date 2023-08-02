import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  todos: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState: defaultState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCheckbox: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    deleteAllDone: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isDone);
    },
  },
});

export const { addTodo, removeTodo, toggleCheckbox, deleteAllDone } =
  customerSlice.actions;
export default customerSlice.reducer;






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
                
                // const defaultState = {
                //     todos: []
                // };
                
                // export const customerReducer = (state = defaultState, action) => {
                //         switch (action.type) {
                //             case "ADD_TODO":
                //                 return {...state, todos: [...state.todos, action.payload]}
                //             case "REMOVE_TODO":
                //                 return {...state, todos:   state.todos.filter(todo => todo.id !== action.payload)}
                //             case "CHECKBOX":
                //                 return {...state, todos: state.todos.map(todo => {
                //                     if (todo.id === action.payload){
                //                         return {...todo, isDone: !todo.isDone}
                //                     } else {
                //                         return todo
                //                     }
                //                 })}
                //             case "DELETE_ALL": 
                //                 return {...state, todos: state.todos.filter(todo => todo.isDone === false)}
                //             default: 
                //                 return state
                
                //         }
                // }