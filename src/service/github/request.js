const TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const isServer = typeof window !== 'object'
const GITHUB_PATH = isServer ? 'https://api.github.com' : '/api/github'

const buildParams = (params) => {
    if (!params) return ''

    const searchParams = new URLSearchParams(params)
    return `?${searchParams.toString()}`
}

const request = (method) => async (path, params) =>
    await fetch(`${GITHUB_PATH}/${path}${buildParams(params)}`, {
        method: method ?? 'GET',
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

export const get = request('GET')
