function RepoCard() {
  const projects = [
    {
      id: 1,
      name: 'testi 1',
      description: 'testii',
      html_url: 'https://github.com/your-username/project-1',
      language: 'JavaScript',
    },
    {
      id: 2,
      name: 'testit 2',
      description: 'This is a brief description of Project 2',
      html_url: 'https://github.com/your-username/project-2',
      language: 'Python',
    },
  ];

  return (
    <>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-64 h-48 bg-gray-200 rounded-lg shadow-md p-4"
            >
              <h2 className="text-lg font-bold">{project.name}</h2>
              <p className="text-sm">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View on GitHub
                </a>
                <span className="text-gray-500">{project.language}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default RepoCard;
