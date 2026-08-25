import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Clock3,
  FolderKanban,
} from "lucide-react";

const Analytics = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("devdashboard-tasks");
    const savedProjects = localStorage.getItem("devdashboard-projects");

    setTasks(savedTasks ? JSON.parse(savedTasks) : []);
    setProjects(savedProjects ? JSON.parse(savedProjects) : []);
  }, []);

  // =========================
  // Task Stats
  // =========================

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const activeTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  // =========================
  // Project Stats
  // =========================

  const activeProjects = projects.filter(
    (project) => project.status !== "Completed"
  ).length;

  // =========================
  // Project Progress
  // =========================

  const getProjectProgress = (status) => {
    if (status === "Completed") return 100;
    if (status === "In Progress") return 50;
    return 0;
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <p className="text-bold text-lg md:text-xl sm:text-lg select-none">
          Track your development progress and productivity.
        </p>
      </div>

      {/* =========================
          Stats
      ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Total Tasks */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-slate-50 rounded-lg">
              <Circle className="w-5 h-5 text-slate-500" />
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-3">
            Total Tasks
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
            {totalTasks}
          </h2>
        </div>

        {/* Completed Tasks */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-3">
            Completed Tasks
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
            {completedTasks}
          </h2>
        </div>

        {/* Active Projects */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-purple-50 rounded-lg">
              <FolderKanban className="w-5 h-5 text-purple-600" />
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-3">
            Active Projects
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
            {activeProjects}
          </h2>
        </div>

        {/* Completion Rate */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Clock3 className="w-5 h-5 text-blue-600" />
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-3">
            Task Completion
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-0.5">
            {completionRate}%
          </h2>
        </div>
      </div>

      {/* =========================
          Task Summary
      ========================= */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Task Summary */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div>
            <h2 className="font-semibold text-slate-800">
              Task Summary
            </h2>

            <p className="text-sm text-slate-500 mt-0.5">
              Your current task progress
            </p>
          </div>

          {/* Completion */}
          <div className="flex justify-center py-7">
            <div className="relative flex items-center justify-center w-36 h-36 rounded-full border-[12px] border-slate-100">
              <div
                className="absolute inset-[-12px] rounded-full border-[12px] border-blue-500"
                style={{
                  clipPath: `polygon(
                    0 0,
                    100% 0,
                    100% ${completionRate}%,
                    0 ${completionRate}%
                  )`,
                }}
              />

              <div className="text-center">
                <p className="text-3xl font-bold text-slate-800">
                  {completionRate}%
                </p>

                <p className="text-xs text-slate-400">
                  completed
                </p>
              </div>
            </div>
          </div>

          {/* Task Stats */}
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-green-500"
                />

                <span className="text-sm text-slate-600">
                  Completed
                </span>
              </div>

              <span className="font-semibold text-slate-800">
                {completedTasks}
              </span>
            </div>

            <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <Clock3
                  size={17}
                  className="text-blue-500"
                />

                <span className="text-sm text-slate-600">
                  Active
                </span>
              </div>

              <span className="font-semibold text-slate-800">
                {activeTasks}
              </span>
            </div>

            <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <Circle
                  size={17}
                  className="text-slate-400"
                />

                <span className="text-sm text-slate-600">
                  Total
                </span>
              </div>

              <span className="font-semibold text-slate-800">
                {totalTasks}
              </span>
            </div>
          </div>
        </div>

        {/* Project Completion */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="font-semibold text-slate-800">
                Project Completion
              </h2>

              <p className="text-sm text-slate-500 mt-0.5">
                Progress across your projects
              </p>
            </div>

            <span className="text-xs font-medium text-slate-400">
              {projects.length} projects
            </span>
          </div>

          {projects.length === 0 ? (
            <p className="text-sm text-slate-400 text-center py-8">
              No projects yet.
            </p>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => {
                const progress = getProjectProgress(
                  project.status
                );

                return (
                  <div key={project.id}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-700">
                        {project.name}
                      </span>

                      <span className="text-xs text-slate-500">
                        {progress}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 mt-1">
                      {project.status}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* =========================
          Productivity Summary
      ========================= */}

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="font-semibold text-slate-800">
            Productivity Summary
          </h2>

          <p className="text-sm text-slate-500 mt-0.5">
            Your current development activity
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500">
              Tasks Completed
            </p>

            <p className="text-xl font-bold text-slate-800 mt-1">
              {completedTasks}
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500">
              Tasks Remaining
            </p>

            <p className="text-xl font-bold text-slate-800 mt-1">
              {activeTasks}
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-500">
              Projects
            </p>

            <p className="text-xl font-bold text-slate-800 mt-1">
              {projects.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;