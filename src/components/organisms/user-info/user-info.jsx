import clsx from 'clsx'
import { useState, useEffect } from 'react'

import s from './user-info.module.css'
import { getUserInfo } from '../../../service/github'
import Link from '../../atoms/link'

export default function UserInfo({ username, onError }) {
    const [user, setUser] = useState()

    useEffect(() => {
        if (!username) return
        ;(async () => {
            const userInfo = await getUserInfo(username)

            if (!userInfo) onError?.()

            setUser(userInfo)
        })()
    }, [username])

    return user ? (
        <div className={clsx('content', s.container)}>
            <img
                className={s.image}
                src={user.avatar}
                alt={`User ${user.username} avatar`}
            />
            <div className={s.info}>
                <Link className={s.username} href={user.link} target='_blank'>
                    <h2>{user.username}</h2>
                </Link>
                {user.bio && (
                    <p>
                        <strong>Bio:</strong> {user.bio}
                    </p>
                )}
                <Link href={`/starred/${username}`}>
                    Starred repositories {'->'}
                </Link>
            </div>
        </div>
    ) : null
}
