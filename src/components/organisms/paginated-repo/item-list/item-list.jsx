import { useContext } from 'react'

import { PaginatedRepoContext } from '../paginated-repo'
import RepoList from '../../repo-list'
import Loader from '../../../atoms/loader'

export default function ItemList() {
    const { repos, loading, noRepos } = useContext(PaginatedRepoContext)

    return (
        <Loader loading={loading}>
            {noRepos ? <h2>No repos</h2> : <RepoList repos={repos} />}
        </Loader>
    )
}
