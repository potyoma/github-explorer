import { memo } from 'react'
import s from './footer.module.css'
import clsx from 'clsx'

function Footer({ className }) {
    const currentYear = new Date(Date.now()).getFullYear()

    return (
        <footer className={clsx('content', s.footer, className)}>
            <div className={s.links}>
                <a href='https://github.com/potyoma/github-explorer'>
                    GitHub Explorer
                </a>
                <span>|</span>
                <a href='https://github.com/potyoma' target='_blank'>
                    @potyoma
                </a>
                <span>|</span>
                <span>{currentYear}</span>
            </div>
        </footer>
    )
}

export default memo(Footer, (prev, next) => prev.className === next.className)
