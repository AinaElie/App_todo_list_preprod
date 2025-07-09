"use client";

import FormAddTask from "./crudTask/FormAddTask";
import RudTask from "./crudTask/RudTask";
import { useTaskStore } from "./crudTask/task";

export default function CrudTask() {
  const tasks = useTaskStore((state) => state.tasks);
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="w-full h-full flex">
        <FormAddTask />
        <RudTask tasks={tasks} removeTask={removeTask} />
    </div>
  );
}
