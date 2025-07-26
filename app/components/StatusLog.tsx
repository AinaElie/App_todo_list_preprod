export default function StatusLog({
  status,
  message,
}: {
  status: number;
  message: string;
}) {
  if (status == 201) {
    return (
      <div className="w-3/5 py-2 px-4 shadow-lg shadow-stone-200 mx-4 rounded-lg text-center text-sm text-green-700 border border-green-700 flex justify-around items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-green-700"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
        <p>{message}</p>
      </div>
    );
  } else if (status == 404) {
    return (
      <div className="w-2/4 py-2 px-4 shadow-lg shadow-stone-200 mx-4 rounded-lg text-center text-sm text-red-600 border border-text-red-600 flex justify-around items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-red-600"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m15 9-6 6"></path>
          <path d="m9 9 6 6"></path>
        </svg>
        <p>{message || "Not tasks added"}</p>
      </div>
    );
  } else {
    return (
      <div className="w-1/2 py-2 px-4 shadow-lg shadow-stone-200 mx-4 rounded-lg text-center text-sm text-red-600 border border-text-red-600 flex justify-around items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="stroke-red-600"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m15 9-6 6"></path>
          <path d="m9 9 6 6"></path>
        </svg>
        <p>{message}</p>
      </div>
    );
  }
}
