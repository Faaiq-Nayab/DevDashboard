import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("devdashboard-projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tech: "",
    status: "Planning",
    github: "",
    live: "",
  });

  useEffect(() => {
    localStorage.setItem("devdashboard-projects", JSON.stringify(projects));
  }, [projects]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    const newProject = {
      id: Date.now(),
      name: formData.name.trim(),
      description: formData.description.trim(),
      tech: formData.tech
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      status: formData.status,
      github: formData.github.trim(),
      live: formData.live.trim(),
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);

    setFormData({
      name: "",
      description: "",
      tech: "",
      status: "Planning",
      github: "",
      live: "",
    });

    setShowModal(false);
  };

  const deleteProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id),
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-bold text-lg md:text-xl sm:text-lg select-none">
            Manage and track your development projects.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-3 py-3 sm:px-4 sm:py-2 md:px-1 md:py-1 flex items-center rounded-lg hover:bg-blue-700 transition cursor-pointer select-none"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Add Task</span>
        </button>
      </div>

      {/* Empty State */}
      {projects.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">
            No projects yet
          </h2>

          <p className="text-gray-500 mt-2 mb-5">
            Add your first project to start tracking your work.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            + Add Project
          </button>
        </div>
      ) : (
        /* Project Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h2>

                <span
                  className={`shrink-0 text-xs font-medium px-3 py-1 rounded-full ${
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

              {/* Description */}
              <p className="text-gray-500 text-sm mt-3 mb-5">
                {project.description || "No description provided."}
              </p>

              {/* Technologies */}
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((technology, index) => (
                    <span
                      key={`${technology}-${index}`}
                      className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-sm font-medium hover:underline"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>

              {/* Delete */}
              <button
                onClick={() => deleteProject(project.id)}
                className="mt-5 text-red-500 text-sm font-medium hover:underline cursor-pointer"
              >
                Delete Project
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Project Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Add Project
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Add a project to your dashboard.
                </p>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Developer Dashboard"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Personal productivity dashboard"
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Tech */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Technologies
                </label>

                <input
                  type="text"
                  name="tech"
                  value={formData.tech}
                  onChange={handleChange}
                  placeholder="React, Tailwind, JavaScript"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <p className="text-xs text-gray-400 mt-1">
                  Separate technologies with commas.
                </p>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer"
                >
                  <option value="Planning">Planning</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {/* GitHub */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GitHub URL
                </label>

                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username/project"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Live URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Live URL
                </label>

                <input
                  type="url"
                  name="live"
                  value={formData.live}
                  onChange={handleChange}
                  placeholder="https://your-project.vercel.app"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
