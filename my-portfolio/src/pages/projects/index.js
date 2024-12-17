import { useState } from 'react'

export default function Projects() {

    let [project, setProject] = useState({
        name: "portfolio project",
        language: "nextjs"
    })

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-blue-600">{name}</h1>
  
        <div className="mt-4">
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-xl text-gray-700">{description}</p>
        </div>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Technologies Used:</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>{language}</li>
            <li>{tools}</li>
          </ul>
        </div>
  
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 px-6 py-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            View on GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-500 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    )


}