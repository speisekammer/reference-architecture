import TodoApp from './TodoApp'
import { ReactElement } from 'react'
import DummyTaskContextProvider from '../../testHelpers/dummyProviders/DummyTaskContextProvider'

export default {
  title: 'TodoApp',
  component: TodoApp
}

export const DefaultTodoApp = (): ReactElement => <DummyTaskContextProvider>
  <TodoApp /></DummyTaskContextProvider>
