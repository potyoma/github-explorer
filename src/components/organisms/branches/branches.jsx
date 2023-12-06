import clsx from 'clsx'
import { useState, useEffect } from 'react'

import s from './branches.module.css'
import Badge from '../../atoms/badge'
import { getBranches } from '../../../service/github'
import Loader from '../../atoms/loader'

export default function Branches({
    username,
    repository,
    onError,
    defaultBranch,
}) {
    const [branches, setBranches] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!(username && repository)) return
        ;(async () => {
            setLoading(true)
            const foundBranches = await getBranches(username, repository)
            !foundBranches && onError?.()
            foundBranches && setBranches(branches)
            setLoading(false)
        })()
    }, [username, repository])

    const branchList = [defaultBranch].concat(
        branches?.filter((b) => b !== defaultBranch) ?? []
    )

    return (
        <ul className={clsx('content', s.list)}>
            <Loader loading={loading}>
                {branchList.map((b) => (
                    <li key={b}>
                        <Badge className={b === defaultBranch && s.current}>
                            {b}
                        </Badge>
                    </li>
                ))}
            </Loader>
        </ul>
    )
}
