import { listStatus } from "../../configs/Options.config";
import { getTasks, setTasks } from "../../utils/Storage";
import { taskSchema } from '../../schemas/Task.schema';

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

const handleSubmit = async (e, state, navigate, errorStates) => {
  e.preventDefault();

  const {setError, setIsShowError} = errorStates

  try{
    await taskSchema.validate(state)

    setError('')
    setIsShowError(false)

    const newTask = {
      ...state,
      id: crypto.randomUUID(),
      status: listStatus[0],
      createdAt: new Date(),
      lastModified: new Date(),
      taskNumber: generateTaskNumber()
    }
  
    const existingTasks = getTasks()
    const newTasks = [
      ...existingTasks,
      newTask
    ]
  
    setTasks(newTasks)
    
    navigate('/');
  } catch(error) {
    setError(error.message)
    setIsShowError(true)
    console.log('error', error.message)
  }
};

export {
  handleInput,
  handleSelect,
  handleSubmit
}