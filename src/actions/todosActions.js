import C from '../constants';
import api from '../helpers/apiCalls'
import {addTodo, Headers} from '../helpers/todoAPIHelpers'

export default {
    add(title){
      return dispatch => {
       fetch(addTodo , {
         method: 'POST',
         header: Headers,
        	body: JSON.stringify({
        		title: title
        	})
        })
        .then(response => response.json())
        .then(todo => dispatch({
          type: C.ADD_TODO, todo
        }))
        .catch(error => console.log(error))
       }
    },
    delete(id){
      return dispatch => {
        fetch('http://localhost:3000/todo/delete/' + id , {
          method: 'DELETE',
          header: Headers,
        })
        .then(response => response)
        .then(todo => dispatch({
          type: C.DELETE_TODO, id
        }))
        .catch(error => console.log(error))
       }
    },
    toggle(id){
      return dispatch => {
        fetch('http://localhost:3000/todo/toggleCompleted/' + id , {
          method: 'PUT',
          header: Headers,
        })
        .then(response => response.json())
        .then(todo => dispatch({
          type: C.COMPLETE_TODO, id
        }))
        .catch(error => console.log(error))
       }
    },
    completeAll(){
       return dispatch => {
        fetch('http://localhost:3000/todos/complete' , {
          method: 'PUT',
          header: Headers,
          })
        .then(response => response)
        .then(todo => dispatch({
          type: C.COMPLETE_TODOS
        }))
        .catch(error => console.log(error))
       }
    },
    clearAll(){
      return dispatch => {
        fetch('http://localhost:3000/todos/clear' , {
          method: 'PUT',
          header: Headers,
          })
          .then(response => response)
          .then(todo => dispatch({
            type: C.CLEAR_COMPLETED
          }))
          .catch(error => console.log(error))
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
