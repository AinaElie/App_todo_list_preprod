"use client";

import { useState } from "react";
import { Task, TaskType, useTaskStore } from "./task";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

export default function FormAddTask() {
  const [text, setText] = useState("");
  const [degree, setDegree] = useState(TaskType.Low);
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTask: Task = {
      id: crypto.randomUUID(),
      content: text,
      type: degree,
      date_create: new Date(),
    };
    addTask(newTask);
    setDegree(TaskType.Low);
    setText("");
  };

  return (
    <form className="w-1/4 h-2/3 flex flex-col" onSubmit={handleSubmit}>
      <textarea
        className="min-h-[300px] min-w-[300px] resize-none rounded-lg py-4 px-4 border border-stone-400 text-left font-FiraSans"
        placeholder="Add text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <div className="my-2 flex justify-end items-center">
        <Listbox value={degree} onChange={setDegree}>
          <div className="relative mr-4 w-4/5">
            <ListboxButton
              className={`grid w-full cursor-pointer grid-cols-1 rounded-md bg-white py-3 pr-2 pl-3 text-left outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 ${
                degree == TaskType.Low
                  ? "focus:outline-green-700 outline-green-700 text-green-700"
                  : ""
              } ${
                degree == TaskType.Medium
                  ? "focus:outline-yellow-500 outline-yellow-500 text-yellow-500"
                  : ""
              } ${
                degree == TaskType.High
                  ? "focus:outline-red-700 outline-red-700 text-red-700"
                  : ""
              }`}
            >
              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                <span className="block truncate">{degree}</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`${
                  degree == TaskType.Low ? "stroke-green-700" : ""
                } ${degree == TaskType.Medium ? "stroke-yellow-500" : ""} ${
                  degree == TaskType.High ? "stroke-red-700" : ""
                } col-start-1 row-start-1 size-5 self-center justify-self-end`}
              >
                <path d="m7 15 5 5 5-5"></path>
                <path d="m7 9 5-5 5 5"></path>
              </svg>
            </ListboxButton>
            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
            >
              <ListboxOption
                value={TaskType.Low}
                className="group relative cursor-pointer py-3 mx-1 rounded-md pr-9 pl-3 text-white-900 select-none data-focus:bg-green-700 data-focus:text-white data-focus:outline-hidden"
              >
                {TaskType.Low}
              </ListboxOption>
              <ListboxOption
                value={TaskType.Medium}
                className="group relative cursor-pointer py-3 mx-1 rounded-md pr-9 pl-3 text-white-900 select-none data-focus:bg-yellow-500 data-focus:text-white data-focus:outline-hidden"
              >
                {TaskType.Medium}
              </ListboxOption>
              <ListboxOption
                value={TaskType.High}
                className="group relative cursor-pointer py-3 mx-1 rounded-md pr-9 pl-3 text-white-900 select-none data-focus:bg-red-700 data-focus:text-white data-focus:outline-hidden"
              >
                {TaskType.High}
              </ListboxOption>
            </ListboxOptions>
          </div>
        </Listbox>
        <button
          type="submit"
          className="group border flex border-black py-3 px-5 rounded-lg bg-black hover:bg-white transition-all cursor-pointer"
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
  );
}
