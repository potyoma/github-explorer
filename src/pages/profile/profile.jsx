import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import s from './profile.module.css'
import { getUserInfo } from '../../service/github'
import UserInfo from '../../components/organisms/user-info'

export default function Profile() {
    const { username } = useParams()
    const navigate = useNavigate()

    const handleError = () => navigate('/error')

    return (
        <div className={s.container}>
            <div>
                <UserInfo onError={handleError} username={username} />
            </div>
            <div className={s.repositories}></div>
        </div>
    )
}
