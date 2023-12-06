import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

import s from './repo-page.module.css'
import Loader from '../../components/atoms/loader'
import Branches from '../../components/organisms/branches'
import Link from '../../components/atoms/link'
import Badge from '../../components/atoms/badge'
import { getRepo } from '../../service/github'

export default function RepoPage() {
    const [repo, setRepo] = useState()
    const [loading, setLoading] = useState(false)

    const { username, repository } = useParams() ?? {}
    const navigate = useNavigate()

    const handleError = () => navigate('/error')

    useEffect(() => {
        if (!(username && repository)) return
        ;(async () => {
            setLoading(true)
            const foundRepo = await getRepo(username, repository)
            !foundRepo && handleError()
            foundRepo && setRepo(foundRepo)
            setLoading(false)
        })()
    }, [username, repository])

    return (
        <div className={clsx('content', s.container)}>
            <Loader loading={loading}>
                {repo ? (
                    <>
                        <h1>
                            Branches for {repo.name}
                            <Link href={`/${repo.user.username}`}>
                                <Badge>{repo.user.username}</Badge>
                            </Link>
                        </h1>
                        <Branches
                            username={repo.user.username}
                            repository={repo.name}
                            onError={handleError}
                            defaultBranch={repo.defaultBranch}
                        />
                    </>
                ) : null}
            </Loader>
        </div>
    )
}
