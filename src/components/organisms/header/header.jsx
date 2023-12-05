import s from './header.module.css'
import { memo } from 'react'
import Logo from '../../atoms/logo'
import clsx from 'clsx'

function Header({ className }) {
    return (
        <header className={clsx('content', s.header, className)}>
            <Logo />
        </header>
    )
}

export default memo(Header, (prev, next) => prev.className === next.className)
