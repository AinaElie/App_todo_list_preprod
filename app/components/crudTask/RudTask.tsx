"use client";

import ChipsTask from "../ChipsTask";
import { RudTaskState } from "./task";

export default function RudTask({ tasks, removeTask }: RudTaskState) {
  return (
    <div className="ml-8 py-4 px-8 h-full w-full flex flex-wrap gap-8">
      {tasks.length != 0
        ? tasks.map((task) => (
            <div
              key={task.id}
              className="relative flex flex-col justify-between border border-stone-400 p-4 rounded-lg shadow-lg shadow-stone-400 focus:shadow-md min-h-[400px] max-h-[400px] max-w-[400px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-red-600 absolute top-2 right-2 cursor-pointer"
                onClick={() => removeTask(task.id)}
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              <p className="w-full h-4/5 overflow-hidden pt-2">
                {task.content}
              </p>
              <div className="flex justify-between items-center bg-white">
                <ChipsTask taskType={task.type} />
                <p className="border border-zinc-400 px-4 py-2 rounded-2xl text-zinc-400">
                  {new Date(task.date_create).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        : "Not task at the moment"}
    </div>
  );
}
