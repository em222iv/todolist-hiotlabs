import C from '../constants';
import todoAPI from '../helpers/todoAPI'


export default {
    add(title){
      return dispatch => {
        todoAPI.addTodo(title)
        .then(todo => dispatch({
             type: C.ADD_TODO, todo
         }))
        .catch((error) => {
          console.log(error)
        });
       }
    },
    update(id,title){
      return dispatch => {
        todoAPI.updateTodo(id,title)
        .then(todo => {
          dispatch({
             type: C.UPDATE_TODO, title, id
         })})
         .catch((error) => {
           console.log(error)
         });
       }
    },
    delete(id){
      return dispatch => {
        todoAPI.deleteTodo(id)
        .then(todo => dispatch({
             type: C.DELETE_TODO, id
         }))
         .catch((error) => {
           console.log(error)
         });
       }
    },
    toggle(id){
      return dispatch => {
       todoAPI.toggle(id)
       .then(todo => dispatch({
            type: C.COMPLETE_TODO, id
        }))
        .catch((error) => {
          console.log(error)
        });
     }
    },
    completeAll(){
       return dispatch => {
        todoAPI.completeTodos()
        .then(todo => dispatch({
             type: C.COMPLETE_TODOS
         }))
         .catch((error) => {
           console.log(error)
         });
       }
    },
    clearAll(){
      return dispatch => {
        todoAPI.clearTodos()
        .then(todo => dispatch({
             type: C.CLEAR_COMPLETED
         }))
         .catch((error) => {
           console.log(error)
         });
        }
    },
    order(order){
      return dispatch => {
         todoAPI.todosOrder(order).then(response => {
            dispatch({
                type: C.TODOS_ORDER, order
              })
         })
         .catch((error) => {
           console.log(error)
         });
       }
    },
};
