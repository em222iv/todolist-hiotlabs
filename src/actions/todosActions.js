import C from '../constants';
import api from '../helpers/apiCalls'

export default {
    add(title){
      return dispatch => {
         api.addTodo(title).then(response => {
            dispatch({
                type: C.ADD_TODO, response
              })
         }).catch(err => {
           console.log('2',err)
         });
       }
    },
    delete(id){
      return dispatch => {
         api.deleteTodo(id).then(todo => {
            dispatch({
                type: C.DELETE_TODO, id
              })
         }).catch((err) => {
           console.log('Action error: ', err)
         });
       }
    },
    toggle(id){
      return dispatch => {
         api.toggleCompleteTodo(id).then(todo => {
           console.log(todo);
            dispatch({
                type: C.COMPLETE_TODO, id
              })
         }).catch((err) => {
              console.log('Action error: ', err)
         });
       }
    },
    completeAll(){
      return dispatch => {
         api.completeTodos().then(response => {
            dispatch({
                type: C.COMPLETE_TODOS
              })
         }).catch((err) => {
           console.log('Action error: ', err)
         });
       }
    },
    clearAll(){
      return dispatch => {
         api.clearTodos().then(response => {
            dispatch({
                type: C.CLEAR_COMPLETED
              })
         }).catch(err => {
           console.log('Action error: ', err)
         });
       }
    },
    order(order){
      return dispatch => {
         api.todosOrder(order).then(response => {
            dispatch({
                type: C.TODOS_ORDER, order
              })
         }).catch((err) => {
           console.log('Action error: ',err)
         });
       }
    },
};
