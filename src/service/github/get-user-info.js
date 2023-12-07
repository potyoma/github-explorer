import { get } from './request'

export const getUserInfo = async (username) => {
    const response = await get(`users/${username}`)

    if (response.status !== 200) return null

    const json = await response.json()

    return {
        avatar: json.avatar_url,
        username: json.login,
        link: json.html_url,
        bio: json.bio,
    }
}
