import React from "react";
import StatsCard from "./components/StatsCard";
import { FaCode, FaClock, FaArrowTrendUp } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

import {
  Code2,
  Globe,
  CheckSquare,
  ArrowRight,
} from "lucide-react";


// =========================
// Stats
// =========================

const cards = [
  {
    title: "Projects",
    value: "6",
    subtitle: "Active projects",
    icon: <FaCode className="text-blue-500 text-2xl" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "Tasks Done",
    value: "24",
    subtitle: "This week",
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
    value: "8",
    subtitle: "To complete",
    icon: <FaArrowTrendUp className="text-yellow-500 text-2xl" />,
    iconBg: "bg-yellow-100",
  },
];


// =========================
// Recent Projects
// =========================

const projects = [
  {
    name: "Developer Dashboard",
    description: "Personal dashboard to track my progress",
    time: "2h ago",
    icon: Code2,
    iconBg: "bg-slate-900",
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with React",
    time: "1d ago",
    icon: Globe,
    iconBg: "bg-blue-500",
  },
  {
    name: "Task Manager App",
    description: "A simple to-do app with charts",
    time: "3d ago",
    icon: CheckSquare,
    iconBg: "bg-green-500",
  },
];


// =========================
// Upcoming Tasks
// =========================

const tasks = [
  {
    title: "Finish Projects page",
    due: "Today",
  },
  {
    title: "Add task filtering",
    due: "Tomorrow",
  },
  {
    title: "Build Analytics page",
    due: "Friday",
  },
];


const Dashboard = () => {
  return (
    <div className="h-full overflow-hidden bg-gray-100">
      <div className="h-full overflow-hidden p-4">

        {/* Greeting */}
        <div className="mb-4">
          <span className="text-2xl font-bold select-none">
            Hi Faaiq 🖐️
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

              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <div
                    key={project.name}
                    className="flex items-center gap-4"
                  >

                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${project.iconBg}`}
                    >
                      <Icon size={20} />
                    </div>


                    {/* Project Info */}
                    <div className="min-w-0 flex-1">

                      <h3 className="text-sm font-semibold text-slate-900">
                        {project.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {project.description}
                      </p>

                    </div>


                    {/* Time */}
                    <span className="self-start text-sm text-slate-500">
                      {project.time}
                    </span>

                  </div>
                );
              })}

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

              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  {/* Task Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <CheckSquare
                      size={20}
                      className="text-blue-500"
                    />
                  </div>


                  {/* Task Info */}
                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-semibold text-slate-900">
                      {task.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {task.due}
                    </p>

                  </div>

                </div>
              ))}

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