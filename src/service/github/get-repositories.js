import { get } from './request'

export const getRepositories = async (username, limit) => {
    const params = { sort: 'updated' }
    limit && (params.per_page = limit)
    const response = await get(`users/${username}/repos`, params)

    if (response.status !== 200) return

    const json = await response.json()

    const mapped = json.map((repo) => ({
        id: repo.id,
        name: repo.name,
        repoName: repo.full_name,
        user: { username: repo.owner.login },
    }))

    return mapped
}
