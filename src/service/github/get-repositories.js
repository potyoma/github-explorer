import { get } from './request'
import { countPages } from '../../utils'

export const getRepositories = async (
    username,
    type = 'repos',
    page = 1,
    limit = 10
) => {
    const params = { sort: 'updated', per_page: limit, page }
    const response = await get(`users/${username}/${type}`, params)

    if (response.status !== 200) return []

    const json = await response.json()

    const mapped = json.map((repo) => ({
        id: repo.id,
        name: repo.name,
        repoName: repo.full_name,
        user: { username: repo.owner.login },
    }))

    return [mapped, countPages(response.headers)]
}
