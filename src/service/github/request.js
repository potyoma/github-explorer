const TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const request = (method) => async (path) =>
    await fetch(`/api/github/${path}`, {
        method: method ?? 'GET',
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        },
    })

export const get = request('GET')
