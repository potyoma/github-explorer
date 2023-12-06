import { memo } from 'react'
import s from './footer.module.css'
import clsx from 'clsx'

import Link from '../../atoms/link'

function Footer({ className }) {
    const currentYear = new Date(Date.now()).getFullYear()

    return (
        <footer className={clsx('content', s.footer, className)}>
            <div className={s.links}>
                <Link
                    href='https://github.com/potyoma/github-explorer'
                    target='_blank'>
                    GitHub Explorer
                </Link>
                <span>|</span>
                <Link href='https://github.com/potyoma' target='_blank'>
                    @potyoma
                </Link>
                <span>|</span>
                <span>{currentYear}</span>
            </div>
        </footer>
    )
}

export default memo(Footer, (prev, next) => prev.className === next.className)
