import { useEffect, useState } from 'react'

import s from './repository-list.module.css'
import { getRepositories } from '../../../service/github'
import { REPO_LIMIT } from './const'
import Repository from '../../molecules/repository'

export default function RepositoryList({ username, onError }) {
    const [repos, setRepos] = useState()

    useEffect(() => {
        if (!username) return
        ;(async () => {
            const repos = await getRepositories(username, REPO_LIMIT)
            if (!repos) return onError?.()
            setRepos(repos)
        })()
    }, [username])

    return (
        <div className='content'>
            <ul className={s.list}>
                {repos?.map((r) => (
                    <li key={r.id}>
                        <Repository repo={r} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
