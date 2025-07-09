import { create } from "zustand";

export enum TaskType {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export interface Task {
  id: string;
  content: string;
  type: TaskType;
  date_create: Date;
}

export interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
}

export interface RudTaskState {
  tasks: Task[];
  removeTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id: string) =>
    set((state) => ({ tasks: [...state.tasks.filter((e) => e.id != id)] })),
}));
