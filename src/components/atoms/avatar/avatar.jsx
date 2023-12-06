import * as AvatarRa from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.css'

export default function Avatar({ username, src, className }) {
    return (
        <AvatarRa.Root className={clsx(s.avatar, className)}>
            <AvatarRa.Image
                className={s.avatarImage}
                src={src}
                alt={`${username} avatar`}
            />
            <AvatarRa.Fallback className={s.avatarFallback} delayMs={1000}>
                {username[0]}
            </AvatarRa.Fallback>
        </AvatarRa.Root>
    )
}
