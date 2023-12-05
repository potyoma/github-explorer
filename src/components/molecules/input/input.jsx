import s from './input.module.css'
import clsx from 'clsx'

export default function Input({ children, className, ...props }) {
    return (
        <div className={clsx(s.container, className)}>
            <input {...props} className={s.input} />
            {children && <label className={s.label}>{children}</label>}
        </div>
    )
}
