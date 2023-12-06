import clsx from 'clsx'

import s from './repository.module.css'
import Link from '../../atoms/link'
import Badge from '../../atoms/badge'
import TruncatedText from '../truncated-text'

export default function Repository({ repo }) {
    const {
        name,
        user: { username },
    } = repo

    return (
        <div className={clsx('content', s.container)}>
            <Link href={`/repository/${username}/${name}`}>
                <h3>
                    <TruncatedText content={name} />
                </h3>
            </Link>
            <Link href={`/${username}`}>
                <Badge>{username}</Badge>
            </Link>
        </div>
    )
}
