"use client";

import { useState } from "react";
import ChipsTask from "../ChipsTask";
import { Task, useTaskStore } from "./task";
import FormEditTask from "./FormEditTask";

export default function CardTask({ task }: { task: Task }) {
  const removeTask = useTaskStore((state) => state.removeTask);
  const [editing, setEditing] = useState(false);

  return (
    <div className="relative flex flex-col justify-between border border-stone-400 p-4 rounded-lg shadow-lg shadow-stone-400 focus:shadow-md min-h-[400px] max-h-[400px] max-w-[400px] min-w-[400px]">
      <div className="absolute top-2 right-2 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-zinc-500 mr-4 cursor-pointer"
          onClick={() => setEditing(true)}
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-red-600 cursor-pointer"
          onClick={() => removeTask(task.id)}
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </div>
      <p className="w-full h-4/5 overflow-hidden pt-8 px-3 font-FiraSans font-medium ">{task.content}</p>
      <div className="flex justify-between items-center bg-white">
        <ChipsTask taskType={task.type} />
        <p className="border border-zinc-400 px-4 py-2 rounded-2xl text-zinc-400">
          {new Date(task.date_create).toLocaleDateString()}
        </p>
      </div>

      <FormEditTask task={task} open={editing} setOpen={setEditing} />
    </div>
  );
}
