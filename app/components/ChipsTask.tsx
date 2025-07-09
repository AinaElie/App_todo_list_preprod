import { TaskType } from "./crudTask/task";

export default function ChipsTask({ taskType }: { taskType: TaskType }) {
  if (taskType == TaskType.Low) {
    return (
      <div className="py-3 px-3 border w-1/4 flex justify-center items-center my-4 bg-green-700 text-white rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-white"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
        </svg>
        <p className="pl-2 text-sm font-FiraSans">{taskType}</p>
      </div>
    );
  }
  else if (taskType == TaskType.Medium) {
       return (
      <div className="py-3 px-3 border w-1/3 flex justify-center items-center my-4 bg-yellow-500 text-white rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-white"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
        </svg>
        <p className="pl-2 text-sm font-FiraSans">{taskType}</p>
      </div>
    );
  }
  else if (taskType == TaskType.High) {
       return (
      <div className="py-3 px-3 border w-1/4 flex justify-center items-center my-4 bg-red-700 text-white rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-white"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
        </svg>
        <p className="pl-2 text-sm font-FiraSans">{taskType}</p>
      </div>
    );
  }
  return <div className={`py-4 px-8 border`}>TaskType not defined</div>;
}
