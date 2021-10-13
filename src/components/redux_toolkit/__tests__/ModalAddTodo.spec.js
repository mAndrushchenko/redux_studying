// import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { ModalAddTodo } from '../modal_add_todo'


jest.mock('react-redux');
jest.mock('../../../store/redux_toolkit/slices/todosSlice');

test('should contains todo', () => {
  const closeModal = jest.fn();
  const addTodo = jest.fn();
  const wrapper = mount( <ModalAddTodo isModalOpen={true} closeModal={closeModal} onAddTodo={addTodo}/>);
  wrapper
    .find({ 'data-testid': 'todo-input' })
    .simulate('change', { target: { value: 'Make tests' } })

  wrapper.update();

  wrapper.find({ 'data-testid': 'loginForm' }).simulate('submit', {
    preventDefault: () => {},
  });
});
