import s from './badge.module.css'

export default function Badge({ children }) {
    return <span className={s.badge}>{children}</span>
}
