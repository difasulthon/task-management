import type { SelectableItem, Task } from "../../types/Task.type";
import { getTasks, setTasks } from "../../utils/Storage"

const getTaskById = (id: string) => {
  const task = getTasks().find(item => item.id === id)

  return task;
}

const handleEditTitle = (id: string, value: string) => {
  const tasks = getTasks()
  tasks.map((item: Task) => {
    if(item.id === id) {
      item.title = value
      item.lastModified = new Date()
    }
  })

  setTasks(tasks);
}

const handleEditDescription = (id: string, value: string) => {
  const tasks = getTasks()
  tasks.map((item: Task) => {
    if(item.id === id) {
      item.description = value
      item.lastModified = new Date()
    }
  })

  setTasks(tasks);
}

const handleEditStatus = (id: string, value: SelectableItem) => {
  const tasks = getTasks()
  tasks.map((item: Task) => {
    if(item.id === id) {
      item.status = value
      item.lastModified = new Date()
    }
  })

  setTasks(tasks);
}

const handleEditLabel = (id: string, value: SelectableItem) => {
  const tasks = getTasks()
  tasks.map((item: Task) => {
    if(item.id === id) {
      item.label = value
      item.lastModified = new Date()
    }
  })

  setTasks(tasks);
}

const handleEditPriority = (id: string, value: SelectableItem) => {
  const tasks = getTasks()
  tasks.map((item: Task) => {
    if(item.id === id) {
      item.priority = value
      item.lastModified = new Date()
    }
  })

  setTasks(tasks);
}

const handleDeleteTask = (id: string) => {
  const tasks: Array<Task> = getTasks()
  const newTasks = tasks.filter((item: Task) => item.id !== id)

  setTasks(newTasks)
}

const handleDeleteClick = (id: string, navigate) => {
  handleDeleteTask(id)
  
  navigate('/')
}

export {
  getTaskById,
  handleEditTitle,
  handleEditDescription,
  handleEditStatus,
  handleEditLabel,
  handleEditPriority,
  handleDeleteClick
}