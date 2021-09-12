const endPoint = "https://jsonplaceholder.typicode.com/todos/";

export const todosToolkitApi = {
  getTodos() {
    return fetch(endPoint).then(data => data.json());
  },
  getTodoById(id) {
    return fetch(endPoint + id).then(data => data.json());
  }
};
