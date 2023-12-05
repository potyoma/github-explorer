import clsx from 'clsx'
import s from './button.module.css'

export default function Button({ className, children, ...props }) {
    return (
        <button {...props} className={clsx(s.button, className)}>
            {children}
        </button>
    )
}
