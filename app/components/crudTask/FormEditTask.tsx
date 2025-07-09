"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Task, TaskType, useTaskStore } from "./task";
import { Dialog, DialogBackdrop } from "@headlessui/react";

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
    setOpen(false)
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
            className="min-h-[300px] min-w-[300px] resize-none rounded-lg py-4 px-4 mt-4 border border-stone-400"
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
