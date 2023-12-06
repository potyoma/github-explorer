import clsx from 'clsx'

import s from './page-list.module.css'
import Button from '../../atoms/button/button'
import { takeArray } from '../../../utils'

export default function PageList({ total, current, onChange }) {
    const items = takeArray(total, current)

    return (
        <ul className={s.list}>
            <Button disabled={current === 1} onClick={() => onChange?.(1)}>
                {'<<'}
            </Button>
            <Button
                disabled={current === 1}
                onClick={() => onChange?.(current - 1)}>
                {'<'}
            </Button>
            {items.map((page) => {
                const pageNumber = page + 1
                return (
                    <li
                        key={page}
                        className={clsx(pageNumber === current && s.current)}>
                        <Button onClick={() => onChange?.(pageNumber)}>
                            {pageNumber}
                        </Button>
                    </li>
                )
            })}
            <Button
                disabled={current === total}
                onClick={() => onChange?.(current + 1)}>
                {'>'}
            </Button>
            <Button
                disabled={current === total}
                onClick={() => onChange?.(total)}>
                {'>>'}
            </Button>
        </ul>
    )
}
