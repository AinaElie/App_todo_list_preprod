import { create } from "zustand";

export enum TaskType {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export const taskType = [TaskType.High, TaskType.Medium, TaskType.Low];

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
  updateTask: (updatedTask: Task) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id: string) =>
    set((state) => ({ tasks: [...state.tasks.filter((e) => e.id != id)] })),
  updateTask: (updatedTask: Task) =>
    set((state) => ({
      tasks: state.tasks.map((task) => task.id === updatedTask.id ? updatedTask : task),
    })),
}));
