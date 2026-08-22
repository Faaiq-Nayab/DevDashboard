import React, { useEffect, useState } from "react";
import {
  Plus,
  CheckCircle2,
  Circle,
  Clock3,
  Trash2,
} from "lucide-react";

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("devdashboard-tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        title: "Finish dashboard UI",
        project: "DevDashboard",
        priority: "High",
        status: "In Progress",
        due: "Today",
        completed: false,
      },
      {
        id: 2,
        title: "Create Projects page",
        project: "DevDashboard",
        priority: "Medium",
        status: "In Progress",
        due: "Tomorrow",
        completed: false,
      },
      {
        id: 3,
        title: "Fix mobile sidebar",
        project: "DevDashboard",
        priority: "High",
        status: "Completed",
        due: "Aug 12",
        completed: true,
      },
    ];
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("devdashboard-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Add task
  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      project: "DevDashboard",
      priority: "Medium",
      status: "Todo",
      due: "No due date",
      completed: false,
    };

    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Toggle task
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              status: !task.completed ? "Completed" : "Todo",
            }
          : task
      )
    );
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;

    return true;
  });

  // Stats
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div
      className="
        bg-slate-100
        p-4
        sm:p-6
        md:py-8
        md:pl-2
        md:pr-8

        md:fixed
        md:inset-x-0
        md:top-16
        md:bottom-0
        md:left-72
        md:overflow-hidden
      "
    >
      <div
        className="
          flex
          flex-col

          md:h-full
          md:min-h-0
          md:overflow-hidden
        "
      >
        {/* Header */}
        <div className="shrink-0">
          <p className="text-bold text-lg md:text-xl sm:text-lg select-none">
            Manage and keep track of your tasks.
          </p>
        </div>

        {/* Add Task */}
        <div className="mt-5 flex shrink-0 gap-2 sm:mt-7 sm:gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            placeholder="What needs to be done?"
            className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            onClick={addTask}
            className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Plus size={18} />

            <span className="hidden sm:inline">
              Add Task
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-5 grid shrink-0 grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-3 sm:gap-4">
          {/* Total */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Total Tasks
              </p>

              <Circle
                size={19}
                className="text-slate-400"
              />
            </div>

            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {totalTasks}
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Completed
              </p>

              <CheckCircle2
                size={19}
                className="text-green-500"
              />
            </div>

            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {completedTasks}
            </p>
          </div>

          {/* Active */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Active
              </p>

              <Clock3
                size={19}
                className="text-blue-500"
              />
            </div>

            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {activeTasks}
            </p>
          </div>
        </div>

        {/* Task Container */}
        <div
          className="
            mt-5
            flex
            min-h-[400px]
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white

            sm:mt-7

            md:min-h-0
            md:flex-1
          "
        >
          {/* Task Header */}
          <div className="flex shrink-0 flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-semibold text-slate-900">
              My Tasks
            </h2>

            <div className="flex gap-1 sm:gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  filter === "all"
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                All
              </button>

              <button
                onClick={() => setFilter("active")}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  filter === "active"
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                Active
              </button>

              <button
                onClick={() => setFilter("completed")}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  filter === "completed"
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:bg-slate-50"
                }`}
              >
                Completed
              </button>
            </div>
          </div>

          {/* Tasks */}
          <div
            className="
              divide-y
              divide-slate-100

              md:min-h-0
              md:flex-1
              md:overflow-y-auto
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {filteredTasks.length === 0 ? (
              <div className="p-10 text-center">
                <p className="text-sm text-slate-400">
                  No tasks here.
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 px-4 py-4 transition hover:bg-slate-50 sm:gap-4 sm:px-5"
                >
                  {/* Complete */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="shrink-0"
                  >
                    {task.completed ? (
                      <CheckCircle2
                        size={21}
                        className="text-green-500"
                      />
                    ) : (
                      <Circle
                        size={21}
                        className="text-slate-300 hover:text-blue-500"
                      />
                    )}
                  </button>

                  {/* Task Info */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`truncate text-sm font-medium ${
                        task.completed
                          ? "text-slate-400 line-through"
                          : "text-slate-800"
                      }`}
                    >
                      {task.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {task.project}
                    </p>
                  </div>

                  {/* Priority */}
                  <span
                    className={`hidden rounded-full px-2.5 py-1 text-xs font-medium sm:inline-block ${
                      task.priority === "High"
                        ? "bg-red-50 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-yellow-50 text-yellow-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {task.priority}
                  </span>

                  {/* Status */}
                  <span
                    className={`hidden rounded-full px-2.5 py-1 text-xs font-medium md:inline-block ${
                      task.completed
                        ? "bg-green-50 text-green-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {task.status}
                  </span>

                  {/* Delete */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="shrink-0 rounded-md p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                    title="Delete task"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;