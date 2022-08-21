import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "forkify-app",
      github: "https://github.com/aNdrefLo2008/forkify-app"
    },

    {
      id: 2,
      title: "mapty-app",
      github: "https://github.com/aNdrefLo2008/mapty-app"
    },

    {
      id: 3,
      title: "DOM-manipulation",
      github: "https://github.com/aNdrefLo2008/DOM-Manipulation"
    },

    {
      id: 4,
      title: "agency-app",
      github: "https://github.com/aNdrefLo2008/agency-app-example"
    },
  ]


  return (
    <div className='py-[250px]' id="section-3">
        <div className='mt-[-100px] text-center'>
          <h1 className='md:text-5xl text-3xl font-bold'>My Personal Projects</h1>
        </div>
        <ul className='mt-10 grid md:grid-cols-4 sm:grid-cols-2 sm:grid-row-2 grid-cols-1 p-6 justify-items-center items-center'>
          {projects.map((project) => (
            <li key={project.id} className="sm:p-6 p-4 flex flex-col text-center">
              <h1 className='text-black md:text-3xl text-2xl font-semibold'>{project.title}</h1>
              <a href={project.github} className="mt-8 hover:text-blue-800">GitHub Repository</a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Projects