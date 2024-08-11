const getGenerateList = (tasks: Array<object>, filterId: number) => {
  const result = tasks.filter(item => item.status.id === filterId)

  return result;
}

export {
  getGenerateList
}