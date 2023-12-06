import { get } from './request'

export const getRepo = async (username, repository) => {
    const response = await get(`repos/${username}/${repository}`)

    if (response.status !== 200) return null

    const json = await response.json()
    
    return {
        name: json.name,
        defaultBranch: json.default_branch,
        user: { username: json.owner.login },
    }
}
