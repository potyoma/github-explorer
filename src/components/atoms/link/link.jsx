import clsx from 'clsx'

import s from './link.module.css'

export default function Link({ children, className, ...props }) {
    return (
        <a {...props} className={clsx(s.link, className)}>
            {children}
        </a>
    )
}
