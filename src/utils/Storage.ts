import { STORAGE_TYPE } from "../constants/Constants";

function setTasks(data: Array<object>){
  localStorage.setItem(STORAGE_TYPE.TASK, JSON.stringify(data));
}

function getTasks(){
  const result = localStorage.getItem(STORAGE_TYPE.TASK);

  return result ? JSON.parse(result) : [];
}

export {
  setTasks,
  getTasks
}