import React, { useEffect, useState } from "react";
import StatsCard from "./components/StatsCard";
import { FaCode, FaClock, FaArrowTrendUp } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

import { Code2, Globe, CheckSquare, ArrowRight } from "lucide-react";

const Dashboard = () => {
  // =========================
  // Load Tasks & Projects
  // =========================

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("devdashboard-tasks");
    const savedProjects = localStorage.getItem("devdashboard-projects");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // =========================
  // Task Stats
  // =========================

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  // =========================
  // Stats Cards
  // =========================

  const cards = [
    {
      title: "Projects",
      value: projects.length,
      subtitle: "Active projects",
      icon: <FaCode className="text-blue-500 text-2xl" />,
      iconBg: "bg-blue-100",
    },
    {
      title: "Tasks Done",
      value: completedTasks,
      subtitle: "Completed tasks",
      icon: <IoCheckmarkCircle className="text-green-500 text-2xl" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Hours Coded",
      value: "18.5",
      subtitle: "This week",
      icon: <FaClock className="text-purple-500 text-2xl" />,
      iconBg: "bg-purple-100",
    },
    {
      title: "Tasks Pending",
      value: pendingTasks,
      subtitle: "To complete",
      icon: <FaArrowTrendUp className="text-yellow-500 text-2xl" />,
      iconBg: "bg-yellow-100",
    },
  ];

  // =========================
  // Recent Projects
  // =========================

  const recentProjects = projects.slice(-3).reverse();

  // =========================
  // Upcoming Tasks
  // =========================

  const upcomingTasks = tasks.filter((task) => !task.completed).slice(0, 3);

  return (
    <div className="h-full overflow-hidden bg-gray-100">
      <div className="h-full overflow-hidden p-4">
        {/* Greeting */}
        <div className="mb-4">
          <span className="text-2xl font-bold select-none">
            Welcome back 🖐️
          </span>

          <span className="block pt-1 text-sm text-gray-500 select-none">
            Here's what's happening with your projects today.
          </span>
        </div>

        {/* =========================
            Stats Cards
        ========================= */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <StatsCard
              key={index}
              title={card.title}
              value={card.value}
              subtitle={card.subtitle}
              icon={card.icon}
              iconBg={card.iconBg}
            />
          ))}
        </div>

        {/* =========================
            Bottom Section
        ========================= */}

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* =========================
              Recent Projects
          ========================= */}

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Recent Projects
            </h2>

            <div className="mt-4 space-y-4">
              {recentProjects.length === 0 ? (
                <p className="py-4 text-sm text-slate-400">No projects yet.</p>
              ) : (
                recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white">
                      <Code2 size={20} />
                    </div>

                    {/* Project Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {project.name}
                      </h3>

                      <p className="mt-1 truncate text-sm text-slate-500">
                        {project.description || "No description provided."}
                      </p>
                    </div>

                    {/* Status */}
                    <span className="hidden shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 sm:inline-block">
                      {project.status}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* View All */}
            <Link
              to="/projects"
              className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* =========================
              Upcoming Tasks
          ========================= */}

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Upcoming Tasks
            </h2>

            <div className="mt-4 space-y-4">
              {upcomingTasks.length === 0 ? (
                <p className="py-4 text-sm text-slate-400">No pending tasks.</p>
              ) : (
                upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-4">
                    {/* Task Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <CheckSquare size={20} className="text-blue-500" />
                    </div>

                    {/* Task Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {task.title}
                      </h3>
                    </div>

                    {/* Priority */}
                    <span
                      className={`hidden shrink-0 rounded-full px-2.5 py-1 text-xs font-medium sm:inline-block ${
                        task.priority === "High"
                          ? "bg-red-50 text-red-600"
                          : task.priority === "Medium"
                            ? "bg-yellow-50 text-yellow-600"
                            : "bg-green-50 text-green-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* View All */}
            <Link
              to="/tasks"
              className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all tasks
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
