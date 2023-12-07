import { useParams, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import s from './profile.module.css'
import UserInfo from '../../components/organisms/user-info'
import RepositoryList from '../../components/organisms/repository-list'

export default function Profile() {
    const { username } = useParams()
    const navigate = useNavigate()

    const handleError = () => navigate('/error')

    return (
        <div className={s.container}>
            <div className={s.userInfo}>
                <UserInfo onError={handleError} username={username} />
            </div>
            <div className={clsx(s.repositories, 'content')}>
                <h1 className={s.repoHeading}>Repositories</h1>
                <RepositoryList onError={handleError} username={username} />
            </div>
        </div>
    )
}
