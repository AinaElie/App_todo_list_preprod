"use client";

import CardTask from "./CardTask";
import { Task } from "./task";

export default function RudTask({ tasks }: { tasks: Task[] }) {
  return (
    <div className="ml-8 py-4 px-8 h-full w-full flex flex-wrap gap-8">
      {tasks.length != 0
        ? tasks.map((task) => (
            <CardTask
              key={task.id}
              task={task}
            />
          ))
        : "Not task at the moment"}
    </div>
  );
}
