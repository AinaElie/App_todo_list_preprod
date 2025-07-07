"use client";

import { useState } from "react";
import { create } from "zustand";
import ChipsTask from "./ChipsTask";

export enum TaskType {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

interface Task {
  content: string;
  type: TaskType;
  date_create: Date;
}

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));

export default function AddTask() {
  const [text, setText] = useState("");
  const [degree, setDegree] = useState(TaskType.Low);
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask: Task = {
      content: text,
      type: degree,
      date_create: new Date(),
    };
    addTask(newTask);
    setDegree(TaskType.Low);
    setText("");
  };

  return (
    <div className="w-full h-full flex">
      <form className="w-1/4 h-2/3 flex flex-col py-5" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[300px] min-w-[300px] resize-none rounded-lg py-4 px-4 border border-stone-400"
          placeholder="Add text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <div className="my-2 flex justify-end items-center pr-4">
          <div className="relative mr-4">
            <select
              className="w-full bg-transparent placeholder:text-black text-black text-sm rounded-lg pl-3 pr-12 py-4 transition duration-300 ease focus:outline-none focus:border-black hover:border-black shadow-sm shadow-stone-400 focus:shadow-md appearance-none cursor-pointer"
              value={degree}
              onChange={(e) => setDegree(e.target.value as TaskType)}
            >
              <option value={TaskType.High}>High</option>
              <option value={TaskType.Medium}>Medium</option>
              <option value={TaskType.Low}>Low</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-5 w-5 ml-1 absolute top-4 right-2.5 stroke-black"
            >
              <path d="m7 15 5 5 5-5"></path>
              <path d="m7 9 5-5 5 5"></path>
            </svg>
          </div>
          <button
            type="submit"
            className="group border flex border-black p-3 px-5 rounded-lg bg-black hover:bg-white transition-all cursor-pointer"
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
              className="stroke-white group-hover:stroke-black mr-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
              <path d="M12 8v8"></path>
            </svg>
            <p className="text-white group-hover:text-black">Create</p>
          </button>
        </div>
      </form>
      <div className="ml-4 py-4 h-full w-full flex flex-wrap gap-2">
        {tasks.length != 0
          ? tasks.map((task) => (
              <div className="border border-stone-400 w-1/2 p-4 rounded-lg shadow-lg shadow-stone-400 focus:shadow-md">
                <p>{task.content}</p>
                <div className="flex justify-between items-center">
                  <ChipsTask taskType={task.type} />
                  <p className="border border-zinc-400 px-4 py-2 rounded-2xl text-zinc-400">
                    {new Date(task.date_create).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          : "Not task at the moment"}
      </div>
    </div>
  );
}
