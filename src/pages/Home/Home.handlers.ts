import Constants from "../../constants";
import type { Task } from "../../types/Task.type";
import { getTasks } from "../../utils/Storage";

const {ROUTES} = Constants

const getGenerateList = (tasks: Array<object>, filterId: number) => {
  const result = tasks
    .filter(item => item.status.id === filterId)
    .sort((a, b) => a.title.localeCompare(b.title))

  return result;
}

const generateSearchTask = (value: string) => {
  const keyWord = value.toLowerCase();

  const getTaskByKeyword: Array<Task> = getTasks().filter((item: Task) => {
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    const status = item.status.label.toLowerCase();
    const label = item.label.label.toLowerCase();
    const priority = item.priority.label.toLowerCase();
    const taskNumber = "tmon-" + item.taskNumber.toString();

    return (
      title.includes(keyWord) ||
      description.includes(keyWord) ||
      status.includes(keyWord) ||
      label.includes(keyWord) ||
      priority.includes(keyWord) ||
      taskNumber.includes(keyWord)
    );
  });

  return getTaskByKeyword;
};

const handleOnClickRightIcon = (setKeyWord) => {
  setKeyWord("");
};

const onNewClicked = (navigate) => () => navigate(ROUTES.NEW_TASK);

const onTaskItemClicked = (navigate, id) => () =>
  navigate(`${ROUTES.TASK}/${id}`);

export {
  getGenerateList,
  handleOnClickRightIcon,
  generateSearchTask,
  onNewClicked,
  onTaskItemClicked
}