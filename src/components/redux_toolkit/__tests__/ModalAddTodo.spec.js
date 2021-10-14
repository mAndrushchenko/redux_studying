// import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { ModalAddTodo } from '../modal_add_todo'


jest.mock('react-redux');
jest.mock('../../../store/redux_toolkit/slices/todosSlice');

test('should close modal', () => {
  const closeModal = jest.fn();
  const addTodo = jest.fn();
  const wrapper = mount(<ModalAddTodo isModalOpen={true} closeModal={closeModal} onAddTodo={addTodo}/>);
  wrapper
      .find({ 'data-testid': 'close-modal' })
      .first()
      .simulate('click')

  expect(closeModal).toHaveBeenCalledTimes(1);
});

test('should create todo', () => {
  const closeModal = jest.fn();
  const addTodo = jest.fn();
  const wrapper = mount( <ModalAddTodo isModalOpen={true} closeModal={closeModal} onAddTodo={addTodo}/>);
  wrapper
    .find({ 'data-testid': 'todo-input' })
    .first()
    .simulate('change', { target: { value: 'Make tests' } })

  wrapper.update();

  wrapper.find({ 'data-testid': 'add-todo-form' }).simulate('submit', {
    preventDefault: () => {},
  });
  expect(addTodo).toHaveBeenCalledTimes(1);
});

test('should hide modal', () => {
  const closeModal = jest.fn();
  const addTodo = jest.fn();
  const wrapper = mount(<ModalAddTodo isModalOpen={false} closeModal={closeModal} onAddTodo={addTodo}/>);

  expect(wrapper
      .find({ 'data-testid': 'add-todo-form' }).exists()).toBeFalsy();
});