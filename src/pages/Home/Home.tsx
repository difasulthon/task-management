import React from "react";
import {
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

import StatusLabel from "../../components/StatusLabel";
import CardItem from "../../components/CardItem";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useDebounce from "../../hooks/useDebounce";
import { getTasks } from "../../utils/Storage";
import type { LoaderData } from "../../types/General.types";
import type { Task } from "../../types/Task.type";

import {
  generateSearchTask,
  getGenerateList,
  handleOnClickRightIcon,
  onNewClicked,
  onTaskItemClicked,
} from "./Home.handlers";

export async function loader({ request }): LoaderFunctionArgs {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("search") || "";

  const tasks = (await getTasks()) as LoaderData<typeof loader>;
  const filteredTasks = searchQuery ? generateSearchTask(searchQuery) : tasks;

  return { tasks: filteredTasks, searchQuery };
}

const Home = (): React.JSX.Element => {
  const navigate = useNavigate();
  const { tasks, searchQuery } = useLoaderData();

  const [keyWord, setKeyWord] = React.useState<string>(searchQuery);
  const keyWordDebounce = useDebounce(keyWord, 1000);

  React.useEffect(() => {
    const params = new URLSearchParams();

    if (keyWordDebounce) {
      params.set("search", keyWordDebounce);
    } else {
      params.delete("search");
    }

    navigate(`?${params.toString()}`, { replace: true });
  }, [keyWordDebounce, navigate]);

  const taskList = React.useMemo(() => {
    if (!keyWordDebounce) {
      return getTasks() || tasks;
    } else {
      return generateSearchTask(keyWordDebounce);
    }
  }, [keyWordDebounce]);

  const listToDo = getGenerateList(taskList, 1);
  const listInProgress = getGenerateList(taskList, 2);
  const listFinish = getGenerateList(taskList, 3);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex px-5 w-8/12 justify-between mt-10">
        <form method="get" onSubmit={() => {}} role="search">
          <Input
            onChange={(e) => setKeyWord(e.target.value)}
            value={keyWord}
            type="text"
            placeholder="Search task"
            rightIcon={<box-icon name="x"></box-icon>}
            onClickRightIcon={() => handleOnClickRightIcon(setKeyWord)}
          />
        </form>
        <Button
          onClick={onNewClicked(navigate)}
          icon={<box-icon name="plus" color="white" size="sm"></box-icon>}
          label="New Task"
        />
      </div>
      <div className="flex justify-center gap-5 mt-14">
        <div className="flex flex-col">
          <StatusLabel status="TO DO" />
          <div className="p-1 mt-7 rounded-md bg-custom-greySecondary h-full">
            {listToDo &&
              listToDo.map((item: Task) => (
                <CardItem
                  key={item.id}
                  onClick={onTaskItemClicked(navigate, item.id)}
                  data={item}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <StatusLabel status="IN PROGRESS" />
          <div className="p-1 mt-7 rounded-md bg-custom-greySecondary h-full">
            {listInProgress &&
              listInProgress.map((item: Task) => (
                <CardItem
                  key={item.id}
                  onClick={onTaskItemClicked(navigate, item.id)}
                  data={item}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <StatusLabel status="FINISH" />
          <div className="p-1 mt-7 rounded-md bg-custom-greySecondary h-full">
            {listFinish &&
              listFinish.map((item: Task) => (
                <CardItem
                  key={item.id}
                  onClick={onTaskItemClicked(navigate, item.id)}
                  data={item}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
