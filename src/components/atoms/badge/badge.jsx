import clsx from 'clsx'

import s from './badge.module.css'

export default function Badge({ children, className }) {
    return <span className={clsx(s.badge, className)}>{children}</span>
}
