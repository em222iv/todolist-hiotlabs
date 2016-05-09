
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response.statusText)
  }
}

const url = 'http://localhost:3000/';
const getTodos = url + 'todos';
const addTodo = url + 'add';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    "Accept-language": '*'
}

const api = {

	getTodos() {
    return fetch(getTodos, {
     method: 'GET',
     header: headers
    })
    .then(status)
    .then(response => {
      return response.json()
    })
    .catch(function(error) {
      return error;
    });
	},

  addTodo(todoTitle) {
    return fetch('http://localhost:3000/add' , {
    method: 'POST',
     header: headers,
    	body: JSON.stringify({
    		title: todoTitle
    	})
    })
    .then(status)
    .then(response => {
      return response.json()
    }).catch(error => {
       return error;
    });
  },

  deleteTodo(id) {
    return fetch('http://localhost:3000/todo/delete/' + id , {
    method: 'DELETE',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response
    }).catch(function(error) {
     console.log('failed', error);
    });
  },

  toggleCompleteTodo(id) {
    return fetch('http://localhost:3000/todo/toggleCompleted/' + id , {
    method: 'PUT',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response.json()
    }).catch(function(error) {
     console.log('failed', error);
    });
  },

  completeTodos() {
    return fetch('http://localhost:3000/todos/complete' , {
    method: 'PUT',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response
    }).catch(function(error) {
     console.log('failed', error);
    });
  },

  clearTodos() {
    return fetch('http://localhost:3000/todos/clear' , {
    method: 'PUT',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response
    }).catch(function(error) {
     console.log('failed', error);
    });
  },

  todosOrder(todoOrder) {
    return fetch('http://localhost:3000/todos/order', {
     method: 'PUT',
     header: headers,
     body: JSON.stringify({
    		order: todoOrder
     })
    })
    .then(status)
    .then(response => {
      return response
    })
    .catch(function(error) {
       new Error('PROMISE REJECTION ERROR: ' + error)
    });
  },

};
export default api;
