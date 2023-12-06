import { get } from './request'

export const getBranches = async (username, repository) => {
    const response = await get(`repos/${username}/${repository}/branches`)

    if (response.status !== 200) return null

    const json = await response.json()

    return json.map((b) => b.name)
}
