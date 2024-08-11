import { getTasks, setTasks } from "../../utils/Storage"

const getTaskById = (id: string) => {
  const task = getTasks().find(item => item.id === id)

  return task;
}

const handleEditTitle = (id: string, value: string) => {
  const tasks = getTasks()
  tasks.map(item => {
    if(item.id === id) {
      item.title = value
    }
  })

  setTasks(tasks);
}

const handleEditDescription = (id: string, value: string) => {
  const tasks = getTasks()
  tasks.map(item => {
    if(item.id === id) {
      item.description = value
    }
  })

  setTasks(tasks);
}

export {
  getTaskById,
  handleEditTitle,
  handleEditDescription
}