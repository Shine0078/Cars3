import { useState } from 'react';

export default function Projects() {
  // State for holding project information
  const [project, setProject] = useState({
    name: "Portfolio Project",
    language: "Next.js",
    description: "A personal portfolio website to showcase projects, skills, and achievements.",
    tools: "React, Next.js, Tailwind CSS, Vercel",
    githubLink: "https://github.com/username/portfolio",
    liveLink: "https://portfolio.example.com",
    image: "https://via.placeholder.com/600x400"  // Placeholder image link
  });

  return (
    <div className="container mx-auto p-6">
      {/* Project Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">{project.name}</h1>
        <h2 className="text-2xl mt-4 text-gray-700">Built with {project.language}</h2>
      </section>

      {/* Project Description */}
      <section className="text-center mb-12">
        <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">{project.description}</p>
      </section>

      {/* Project Image */}
      <section className="text-center mb-12">
        <img
          src={project.image}
          alt={project.name}
          className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
        />
      </section>

      {/* Tools Used */}
      <section className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-blue-500">Tools Used</h3>
        <p className="text-lg text-gray-800 mt-4">{project.tools}</p>
      </section>

      {/* Links */}
      <section className="text-center mb-12">
        <div className="flex justify-center gap-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-6 py-2 rounded-lg shadow-md"
          >
            View on GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-600 px-6 py-2 rounded-lg shadow-md"
          >
            View Live
          </a>
        </div>
      </section>
    </div>
  );
}
