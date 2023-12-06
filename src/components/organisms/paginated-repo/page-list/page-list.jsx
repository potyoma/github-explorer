import { useContext } from 'react'

import { PaginatedRepoContext } from '../paginated-repo'
import RawPageList from '../../../molecules/page-list/page-list'

export default function PageList() {
    const { totalPages, page, onChangePage, noRepos } =
        useContext(PaginatedRepoContext)

    return noRepos ? null : (
        <RawPageList
            total={totalPages}
            current={page}
            onChange={onChangePage}
        />
    )
}
