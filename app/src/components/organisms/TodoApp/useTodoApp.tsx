import { useTaskContext } from '../../../TaskContext'
import { TaskRepresentation, TaskUseCases } from 'interactors'

interface UseTodoAppReturnType {
  tasks: TaskRepresentation[]
  taskUseCases?: TaskUseCases
}

const useTodoApp = (): UseTodoAppReturnType => {
  const { tasks, taskUseCases } = useTaskContext()

  // example, here we could use more hooks and provide them to our to do app, like  const [t] = useTranslation()

  return { tasks, taskUseCases }
}

export default useTodoApp
