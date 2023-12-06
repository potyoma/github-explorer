import { memo } from 'react'
import clsx from 'clsx'

import Link from '../../atoms/link'
import Logo from '../../atoms/logo'
import s from './header.module.css'

function Header({ className }) {
    return (
        <header className={clsx('content', s.header, className)}>
            <Link href='/'>
                <Logo />
            </Link>
        </header>
    )
}

export default memo(Header, (prev, next) => prev.className === next.className)
