const endPoint = "https://jsonplaceholder.typicode.com/todos/";

export const todosApi = {
  getTodos() {
    return fetch(endPoint).then(data => data.json());
  },
  getTodoById(id) {
    return fetch(endPoint + id).then(data => data.json());
  }
};
