const url = 'http://192.168.59.103:3000/';
// const url = 'http://localhost:3000/';
const getTodos = url + 'todos';
const addTodo = url + 'todo/add';
const updateTodo = url + 'todo/update/';
const deleteTodo = url + 'todo/delete/';
const toggleTodo = url + 'todo/toggleCompleted/';
const completeTodos = url + 'todos/complete';
const clearTodos = url + 'todos/clear';
const todosOrder = url + 'todos/order';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    "Accept-language": '*'
}

const todoAPI = {

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
    return fetch(addTodo , {
    method: 'POST',
     header: headers,
    	body: JSON.stringify({
    		title: todoTitle
    	})
    })
    .then(status)
    .then(response => {
      return response.json()
    })
    .catch(error => {
       return error.then(error => {
          return Promise.reject(error.message)
      })
    })
  },

  updateTodo(id,todoTitle) {
    return fetch(updateTodo + id , {
    method: 'PUT',
     header: headers,
      body: JSON.stringify({
        title: todoTitle
      })
    })
    .then(status)
    .then(response => {
      return response.json()
    })
    .catch(error => {
       return error.then(error => {
          return Promise.reject(error.message)
      })
    })
  },

  deleteTodo(id) {
    return fetch(deleteTodo + id , {
    method: 'DELETE',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response
    })
    .catch(error => {
       return error.then(error => {
          return Promise.reject(error.message)
      })
    })
  },

  toggle(id) {
    return fetch(toggleTodo + id , {
    method: 'PUT',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response.json()
    })
    .catch(error => {
       return error.then(error => {
          return Promise.reject(error.message)
      })
    })
  },

  completeTodos() {
    return fetch(completeTodos , {
    method: 'PUT',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response
    })
    .catch(error => {
       return error.then(error => {
          return Promise.reject(error.message)
      })
    })
  },

  clearTodos() {
    return fetch(clearTodos , {
    method: 'PUT',
    header: headers,
    })
    .then(status)
    .then(response => {
      return response
    })
    .catch(error => {
       return error.then(error => {
          return Promise.reject(error.message)
      })
    })
  },

  todosOrder(todoOrder) {
    return fetch(todosOrder, {
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
    .catch(error => {
       return error.then(error => {
          return Promise.reject(error.message)
      })
    })
  },
};

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response.json())
  }
}

export default todoAPI;
