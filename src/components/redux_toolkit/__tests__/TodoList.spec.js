import React from 'react';
import { mount } from 'enzyme';
import { useSelector } from 'react-redux'
import { TodoList } from "../todo_list";

jest.mock('react-redux');

const todosMock = [
    {
        userId: 1,
        id: Date.now(),
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: Date.now() + 1,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: Date.now() + 2,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: Date.now() + 3,
        title: "et porro tempora",
        completed: true
    }
]

test('should contains todos', () => {
    useSelector.mockReturnValue(todosMock);
    const wrapper = mount(<TodoList />);

    todosMock.forEach((todo, index) => {
      expect(wrapper.find('TodoItem').at(index).prop('todo')).toEqual(todo);
    })
});
