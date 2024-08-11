const getGenerateToDoList = (tasks: Array<object>) => {
  const result = tasks.filter(item => item.status.id === 1)

  return result;
}

export {
  getGenerateToDoList
}