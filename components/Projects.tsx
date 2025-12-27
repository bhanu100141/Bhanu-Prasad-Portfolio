export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description:
        "A full-stack web application built with Next.js and Node.js featuring real-time updates and responsive design.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project 2",
      description:
        "E-commerce platform with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Express", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project 3",
      description:
        "Social media application with user authentication, posts, comments, and real-time notifications.",
      technologies: ["React", "Node.js", "Socket.io", "Redis"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
