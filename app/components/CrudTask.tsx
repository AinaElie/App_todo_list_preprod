"use client";

import FormAddTask from "./crudTask/FormAddTask";
import RudTask from "./crudTask/RudTask";
import { useTaskStore } from "./crudTask/task";

export default function CrudTask() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="w-full h-full flex">
      <FormAddTask />
      <RudTask tasks={tasks} />
    </div>
  );
}
