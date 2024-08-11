import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import Constants from "../../constants";
import StatusLabel from "../../components/StatusLabel";
import CardItem from "../../components/CardItem";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { getTasks } from "../../utils/Storage";
import type { LoaderData } from "../../types/General.types";

import { getGenerateToDoList } from "./Home.handlers";

const { ROUTES } = Constants;

const onNewClicked = (navigate) => () => navigate(ROUTES.NEW_TASK);

const onTaskItemClicked = (navigate) => () => navigate(ROUTES.TASK);

export async function loader() {
  const tasks = (await getTasks()) as LoaderData<typeof loader>;

  return { tasks };
}

const Home = (): React.JSX.Element => {
  const navigate = useNavigate();
  const { tasks } = useLoaderData();

  const [keyWord, setKeyWord] = React.useState<string>("");

  const listToDo = getGenerateToDoList(tasks);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex px-5 w-8/12 justify-between mt-10">
        <form method="post" onSubmit={() => {}}>
          <Input
            onChange={(e) => setKeyWord(e.target.value)}
            value={keyWord}
            type="text"
            placeholder="Search task"
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
          <div className="p-1 mt-7 rounded-md bg-custom-secondary">
            {listToDo &&
              listToDo.map((item) => (
                <CardItem
                  key={item.id}
                  onClick={onTaskItemClicked(navigate)}
                  data={item}
                />
              ))}
            {/* <CardItem onClick={onTaskItemClicked(navigate)} />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem /> */}
          </div>
        </div>
        <div className="flex flex-col">
          <StatusLabel status="IN PROGRESS" />
          <div className="p-1 mt-7 rounded-md bg-custom-secondary">
            {/* <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem /> */}
          </div>
        </div>
        <div className="flex flex-col">
          <StatusLabel status="FINISH" />
          <div className="p-1 mt-7 rounded-md bg-custom-secondary">
            {/* <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
