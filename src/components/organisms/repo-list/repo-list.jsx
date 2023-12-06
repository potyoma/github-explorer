import Repository from '../../molecules/repository'
import s from './repo-list.module.css'

export default function RepoList({ repos }) {
    return (
        <ul className={s.list}>
            {repos?.map((r) => (
                <li key={r.id}>
                    <Repository repo={r} />
                </li>
            ))}
        </ul>
    )
}
