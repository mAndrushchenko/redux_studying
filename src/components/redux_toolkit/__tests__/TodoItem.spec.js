// import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { TodoItem } from "../todo_item";
import { Checkbox, Typography } from '@material-ui/core'
import { deleteTodo, toggleTodo } from '../../../store/redux_toolkit/slices/todosSlice'
import { useDispatch } from 'react-redux'

jest.mock('react-redux');
jest.mock('../../../store/redux_toolkit/slices/todosSlice');

test('should contains todo', () => {
  const todo = {
    userId: 1,
    id: Date.now(),
    title: "delectus aut autem",
    completed: false
  };
  const wrapper = mount(<TodoItem todo={todo} />);

  expect(wrapper.text()).toMatch(todo.title);
});

test('should display complete todo', () => {
  const todo = {
    userId: 1,
    id: Date.now(),
    title: "delectus aut autem",
    completed: true
  };
  const wrapper = mount(<TodoItem todo={todo} />);

  expect(wrapper.find(Typography).prop('color')).toBe('textSecondary');
  expect(wrapper.find(Typography).prop('style').textDecoration).toBe('line-through');
});

test('should delete todo', () => {
  const todo = {
    userId: 1,
    id: Date.now(),
    title: "delectus aut autem",
    completed: false
  };
  useDispatch.mockReturnValue(jest.fn());
  const wrapper = mount(<TodoItem todo={todo} />);

  wrapper
    .find({ 'data-testid': 'delete-button' })
    .first()
    .simulate('click');

  expect(deleteTodo).toHaveBeenCalledTimes(1);
  expect(deleteTodo).toHaveBeenCalledWith({ id: todo.id });
});

test('should complete todo', () => {
  const todo = {
    userId: 1,
    id: Date.now(),
    title: "delectus aut autem",
    completed: false
  };
  useDispatch.mockReturnValue(jest.fn());
  const wrapper = mount(<TodoItem todo={todo} />);

  const checkBox = wrapper.find(Checkbox);
  expect(checkBox).toHaveLength(1);

  wrapper
    .find(Checkbox).props().onChange({ checked: true });

  wrapper.update();

  expect(toggleTodo).toHaveBeenCalledTimes(1);
  expect(toggleTodo).toHaveBeenCalledWith({ id: todo.id });
});
