"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Task, TaskType, useTaskStore } from "./task";
import {
  Dialog,
  DialogBackdrop,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

interface EditFormProps {
  task: Task;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FormEditTask({ task, open, setOpen }: EditFormProps) {
  const [text, setText] = useState(task.content);
  const [degree, setDegree] = useState(task.type);
  const updatedTask = useTaskStore((state) => state.updateTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: task.id,
      content: text,
      type: degree,
      date_create: task.date_create,
    };
    updatedTask(newTask);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-20">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto h-screen flex justify-center items-center">
        <form
          className="flex flex-col relative w-1/2 h-4/5 px-4 bg-white py-8 rounded-2xl"
          onSubmit={handleSubmit}
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
            className="stroke-red-600 cursor-pointer absolute top-2 right-2"
            onClick={() => setOpen(false)}
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <textarea
            className="min-h-[300px] min-w-[300px] resize-none rounded-lg py-4 px-4 mt-4 border border-stone-400 font-FiraSans"
            placeholder="Add text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <div className="my-2 flex justify-end items-center pr-4">
            <Listbox value={degree} onChange={setDegree}>
              <div className="relative mr-4 w-1/4">
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
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
              </svg>
              <p className="text-white group-hover:text-black">Update</p>
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
