import { createContext, useState, useEffect } from 'react'

export const PaginatedRepoContext = createContext()
import { getRepositories } from '../../../service/github'

export default function PaginatedRepoProvider({ children, username, onError }) {
    const [repos, setRepos] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(3)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!username) return
        ;(async () => {
            setLoading(true)
            const [repos, total] = await getRepositories(
                username,
                'starred',
                page
            )

            if (!repos) onError?.()

            setRepos(repos)
            setTotalPages(total)
            setLoading(false)
        })()
    }, [username, page])

    const onChangePage = (num) => setPage(num)

    return (
        <PaginatedRepoContext.Provider
            value={{
                onChangePage,
                repos,
                page,
                loading,
                totalPages,
                noRepos: repos?.length <= 0,
            }}>
            {children}
        </PaginatedRepoContext.Provider>
    )
}
