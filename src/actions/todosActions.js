import C from '../constants';

export default {
    add(title){
      console.log(title);
        return {
          type: C.ADD_TODO, title
        };
    },
};
