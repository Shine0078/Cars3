import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("Samuel Abraham");

  useEffect(() => {
    console.log("Component Mounted - Hello from Home");
  }, []);

  return (
<>
  <div className="min-h-screen bg-black text-white flex flex-col items-center">
    <div className="container mx-auto px-6 py-12">

      {/* Welcome Section */}
      <section className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-blue-600 leading-tight mb-4 transition-all duration-300 transform hover:scale-105">
          Welcome to My Portfolio
        </h1>
        <h2 className="text-2xl text-gray-300">
          I'm {name}, a Passionate Web Developer
        </h2>
      </section>

      {/* About Me Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">About Me</h2>
        <p className="text-lg text-gray-300 mt-4 max-w-4xl mx-auto leading-relaxed">
          I am a full-stack web developer specializing in building modern, responsive websites and applications. With experience in
          technologies such as Next.js, React, and Tailwind CSS, I am passionate about creating seamless and engaging user experiences.
          I am always excited to learn new technologies and improve my skills.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-500 text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800">Frontend Development</h3>
            <p className="text-gray-600 mt-2">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800">Backend Development</h3>
            <p className="text-gray-600 mt-2">Node.js, Express, MongoDB, PostgreSQL, RESTful APIs</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800">Version Control & Deployment</h3>
            <p className="text-gray-600 mt-2">Git, GitHub, GitLab, Vercel, Netlify, Docker</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-500 text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800">Portfolio Website</h3>
            <p className="text-gray-600 mt-2">A dynamic portfolio website built with Next.js to showcase my projects and skills.</p>
            <a href="https://github.com/yourusername/portfolio" className="text-blue-500 mt-2 block">View on GitHub</a>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800">Task Manager App</h3>
            <p className="text-gray-600 mt-2">A full-stack task management application built with React and Node.js to help users manage their tasks.</p>
            <a href="https://github.com/yourusername/task-manager" className="text-blue-500 mt-2 block">View on GitHub</a>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="font-bold text-lg text-gray-800">Blog Platform</h3>
            <p className="text-gray-600 mt-2">A blog platform with user authentication and CRUD functionalities, built using Next.js and MongoDB.</p>
            <a href="https://github.com/yourusername/blog-platform" className="text-blue-500 mt-2 block">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-300 mt-4">If you have any questions or would like to work with me, feel free to reach out.</p>
        <a
          href="mailto:sampleemail@example.com"
          className="mt-6 inline-block px-8 py-3 text-white bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </section>

    </div>
  </div>
</>


  );
}
