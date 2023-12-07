import { describe, test, expect } from 'vitest'
import { getRepositories } from '../../../service/github/get-repositories'

describe('Fetches repositories list from GitHub', () => {
    const username = 'potyoma'

    test('should return ten or less', async () => {
        const res = await getRepositories(username)

        expect(res.length).toBeLessThan(11)
    })

    test('should return empty for invalid username', async () => {
        const res = await getRepositories('daksl;gjjlkjdlksda;jglksdajglk')

        expect(res.length).toBe(0)
    })
})
