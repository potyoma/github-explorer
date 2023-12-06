import { useEffect, useState } from 'react'

import { getRepositories } from '../../../service/github'
import RepoList from '../repo-list'
import Loader from '../../atoms/loader'

export default function RepositoryList({ username, onError }) {
    const [repos, setRepos] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!username) return
        ;(async () => {
            setLoading(true)
            const [repos] = await getRepositories(username)
            !repos && onError?.()
            repos && setRepos(repos)
            setLoading(false)
        })()
    }, [username])

    return (
        <div className='content'>
            <Loader loading={loading}>
                <RepoList repos={repos} />
            </Loader>
        </div>
    )
}
