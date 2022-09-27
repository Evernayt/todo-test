import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";

type TaskState = {
  tasks: ITask[];
  activeTaskFilterId: number;
};

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      title: "Математика",
      description: "Стр.4, упр.36 а, б.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Русский язык",
      description: "Учебник, стр.4, упр.36 а, б.",
      isCompleted: true,
    },
    {
      id: 3,
      title: "ИЗО",
      description:
        "Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстяные нитки",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Литература",
      description: "Учебник, стр.4, упр.36 а, б.",
      isCompleted: true,
    },
  ],
  activeTaskFilterId: 1,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload);
    },
    changeTask(state, action: PayloadAction<ITask>) {
      const tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      state.tasks = tasks;
    },
    removeTaskById(state, action: PayloadAction<number>) {
      const tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = tasks;
    },
    setActiveFilterId(state, action: PayloadAction<number>) {
      state.activeTaskFilterId = action.payload;
    },
    showAllTasksFilter(state) {
      state.tasks = initialState.tasks;
    },
    filterTasksByIsCompleted(state, action: PayloadAction<boolean>) {
      state.tasks = initialState.tasks;
      const tasks = state.tasks.filter(
        (task) => task.isCompleted === action.payload
      );
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  changeTask,
  removeTaskById,
  setActiveFilterId,
  showAllTasksFilter,
  filterTasksByIsCompleted,
} = taskSlice.actions;

export default taskSlice.reducer;
