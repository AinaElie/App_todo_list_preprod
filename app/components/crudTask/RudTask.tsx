"use client";

import { useState } from "react";
import CardTask from "./CardTask";
import { Task } from "./task";
import StatusLog from "../StatusLog";

export default function RudTask({ tasks }: { tasks: Task[] }) {
  const [isLoading, setLoading] = useState(false);
  const [log, setLog] = useState("");
  const [status, setStatus] = useState(404);

  async function create() {
    setLoading(true);
    try {
      const resUser = await fetch("/api/users");

      if (resUser.status != 200) {
        const data = await resUser.json();
        setLog(data.message);
        setStatus(resUser.status);
      }
      const dataUser = await resUser.json();

      const req = await fetch(`/api/users/tasks?withId=${dataUser.data.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tasks),
      });

      if (req.status === 201) {
        const res = await req.json();
        setLog(res.message);
        setStatus(req.status);
      } else {
        const res = await req.json();
        setLog(res.message);
        setStatus(req.status);
        console.error("Error", res.details);
      }
    } catch (error) {
      setLog(`${error}`);
      setStatus(500);
      console.error("Error servor :", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ml-8 py-4 px-8 h-full w-full flex flex-wrap gap-8 relative">
      <div className="absolute -top-9 right-4 flex justify-around items-center px-4 w-1/2">
        <StatusLog status={status} message={log} />
        <button
          onClick={create}
          className="group border border-indigo-700 py-2 px-4 cursor-pointer flex bg-indigo-700 hover:bg-white rounded-lg transition-all"
        >
          {" "}
          {isLoading ? (
            <p className="group-hover:text-indigo-700 text-white pr-2">...</p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-white group-hover:stroke-indigo-700"
            >
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
              <path d="M7 3v4a1 1 0 0 0 1 1h7"></path>
            </svg>
          )}
          <p className="group-hover:text-indigo-700 text-white pl-2">
            Save all
          </p>
        </button>
      </div>
      {tasks.length != 0
        ? tasks.map((task) => <CardTask key={task.id} task={task} />)
        : "Not task at the moment"}
    </div>
  );
}
