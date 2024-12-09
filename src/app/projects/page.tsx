"use client"

import { useEffect, useState } from "react"
import { AiOutlineLink, AiOutlineFork, AiOutlineEye, AiOutlineStar } from "react-icons/ai"

type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
};

const RepositoryCardComponent = ({ repository }: { repository: Repository }) => {
  return (
    <div
      className="w-full bg-light-300 flex flex-col space-y-1 p-2 rounded-3xl text-dark-700 dark:bg-dark-500 dark:text-light-300">
      <div className="flex-center lowercase hover:underline">
        <a href={repository.html_url} target="_blank" rel="noreferrer">
          <AiOutlineLink className="inline mr-1" />{repository.name}
        </a>
      </div>
      <div className="flex-center">
        {repository.description}
      </div>
      <div className="flex-center space-x-3">
        <div><AiOutlineFork className="inline mr-1" />{repository.forks_count}</div>
        <div><AiOutlineEye className="inline mr-1" />{repository.watchers_count}</div>
        <div><AiOutlineStar className="inline mr-1" />{repository.stargazers_count}</div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    async function getRepositories() {
      let res = await fetch("https://api.github.com/users/respects-in-durka/repos")
      let data = await res.json()
      setRepositories(data)
    }

    getRepositories().then()
  }, [])

  if (!repositories.length) {
    return <div>Loading...</div>
  }


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4 mx-4">
      {repositories.map(r => <RepositoryCardComponent key={r.id} repository={r} />)}
    </div>
  )
};
