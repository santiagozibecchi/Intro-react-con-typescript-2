import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction =
      | { type: 'addTodo', payload: Todo }
      | { type: 'toggleTodo', payload: { id: string } }


export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {

      switch (action.type) {
            case 'addTodo':
                  return {
                        ...state,
                        todos: [
                              ...state.todos, action.payload
                        ]
                  }
            case 'toggleTodo':
                  return {
                        ...state,
                        // ...todo => para evitar que mutemos los hijos dentro del todo state
                        // esparso todas las propiedades que se encuentran dentro del todo
                        // spread de cada una de las propiedades del todo para asegurarme de
                        // que estoy creando un nuevo
                        todos: state.todos.map(({ ...todo }) => {
                              if (todo.id === action.payload.id) {
                                    todo.completed = !todo.completed
                              }
                              return todo;
                        })
                  }


            default:
                  return state;
      }

}