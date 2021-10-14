import uuid from 'uuid'
export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo)}// add a uuid so that todos with the same text dont get deleted together
      // return { todos: state.todos.concat(action.payload.text) };

    case 'DELETE_TODO':
      // return { todos: state.todos.filter((todo) => todo !== action.payload)}
      // return all the todos that ARENT the one we sent in payload

      return { todos: state.todos.filter((todo) => todo.id !== action.payload)}
    default:
      return state;
  }
}
