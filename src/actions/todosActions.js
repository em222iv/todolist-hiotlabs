import C from '../constants';

export default {
    add(title){
        return {
          type: C.ADD_TODO, title
        };
    },
    delete(id){
        return {
          type: C.DELETE_TODO, id
        };
    },
    toggle(id,completed){
        return {
          type: C.COMPLETE_TODO, id
        };
    },
    completeAll(){
        return {
          type: C.COMPLETE_TODOS
        };
    },
    clearAll(){
        return {
          type: C.CLEAR_COMPLETED
        };
    },
    order(order){
        return {
          type: C.TODOS_ORDER, order
        };
    }
};
