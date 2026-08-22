import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Developer Dashboard",
      description: "A dashboard built with React and Tailwind CSS.",
      status: "In Progress",
      tech: ["React", "Tailwind"],
    },
    {
      name: "Weather App",
      description: "A weather application using a weather API.",
      status: "Completed",
      tech: ["React", "API", "Tailwind"],
    },
    {
      name: "Task Manager",
      description: "A simple task management application.",
      status: "Planning",
      tech: ["React", "JavaScript"],
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 select-none">Projects</h1>
          <p className="text-gray-500 mt-1 select-none">
            Manage and track your development projects.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition cursor-pointer select-none">
          + New Project
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition select-none"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {project.name}
              </h2>

              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : project.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-3 mb-5">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md"
                >
                  {technology}
                </span>
              ))}
            </div>

            <button className="mt-6 text-blue-600 text-sm font-medium hover:underline">
              View Project →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
