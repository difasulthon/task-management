import { listStatus } from "../../configs/Options.config";
import { getTasks, setTasks } from "../../utils/Storage";

const handleInput = (e, dispatch, type) => {
  const value = e.target.value;

  dispatch({
    type: type,
    payload: value,
  });
};

const handleSelect = (item, dispatch, type) => {
  dispatch({
    type,
    payload: item
  })
};

const generateTaskNumber = () => {
  const tasks = getTasks()
  const newId = tasks.length ? tasks[tasks.length - 1].taskNumber + 1 : 1;

  return newId;
}

const handleSubmit = (e, state, navigate) => {
  e.preventDefault();
  const newTask = {
    ...state,
    id: crypto.randomUUID(),
    status: listStatus[0],
    createdAt: new Date(),
    lastModified: new Date(),
    taskNumber: `TMON-${generateTaskNumber()}`
  }

  const existingTasks = getTasks()
  const newTasks = [
    ...existingTasks,
    newTask
  ]

  setTasks(newTasks)
  
  navigate('/');
};

export {
  handleInput,
  handleSelect,
  handleSubmit
}