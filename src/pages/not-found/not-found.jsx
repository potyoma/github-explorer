import clsx from 'clsx'
import s from './not-found.module.css'

export default function NotFound() {
    return (
        <div className={clsx('content', s.container)}>
            <h1>404</h1>
            <h2>Could not find anything.</h2>
            <span className={s.emoji}>😞</span>
        </div>
    )
}
