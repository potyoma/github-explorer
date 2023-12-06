import { useParams, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import s from './starred-repositories.module.css'
import PaginatedRepo from '../../components/organisms/paginated-repo'
import Badge from '../../components/atoms/badge'

export default function StarredRepositories() {
    const { username } = useParams()
    const navigate = useNavigate()

    const handleError = () => navigate('/error')

    return (
        <div className={clsx('content', s.container)}>
            <h1>
                Starred repositories of <Badge>{username}</Badge>
            </h1>
            <PaginatedRepo.Provider username={username}>
                <PaginatedRepo.List />
                <PaginatedRepo.Pages />
            </PaginatedRepo.Provider>
        </div>
    )
}
