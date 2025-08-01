import { create } from "zustand";

export enum TaskPriority {
  High = "HIGH",
  Medium = "MEDIUM",
  Low = "LOW",
}

export const taskPriority = [TaskPriority.High, TaskPriority.Medium, TaskPriority.Low];

export interface Task {
  id: string;
  content: string;
  type: TaskPriority;
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
