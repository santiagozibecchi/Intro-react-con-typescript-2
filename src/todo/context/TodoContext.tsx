import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

// defino los tipos de que va a recibir el provider, incluye initialState and actions
export type TodoContextProps = {
      todoState: TodoState;
      toggleTodo: ( id: string ) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);