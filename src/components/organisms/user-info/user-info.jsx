import clsx from 'clsx'
import { useState, useEffect } from 'react'

import s from './user-info.module.css'
import { getUserInfo } from '../../../service/github'
import Link from '../../atoms/link'
import Avatar from '../../atoms/avatar'
import Loader from '../../atoms/loader'

export default function UserInfo({ username, onError }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!username) return
        ;(async () => {
            setLoading(true)
            const userInfo = await getUserInfo(username)
            !userInfo && onError?.()
            userInfo && setUser(userInfo)
            setLoading(false)
        })()
    }, [username])

    return (
        <div className={clsx('content', s.container)}>
            <Loader loading={loading}>
                {user ? (
                    <>
                        <Avatar src={user.avatar} username={user.username} />
                        <Link
                            className={s.username}
                            href={user.link}
                            target='_blank'>
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
                    </>
                ) : null}
            </Loader>
        </div>
    )
}
