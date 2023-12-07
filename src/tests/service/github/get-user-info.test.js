import { describe, test, expect } from 'vitest'
import { getUserInfo } from '../../../service/github/get-user-info'

describe('Fetches user data from GitHub', () => {
    const input = 'potyoma'

    test('should return valid data for user', async () => {
        const res = await getUserInfo(input)

        expect(res).not.toBeNull()
    })

    test('should return valid link to profile', async () => {
        const link = 'https://github.com/potyoma'

        const res = await getUserInfo(input)

        expect(res.link).toBe(link)
    })

    test('should return null for invalid username', async () => {
        const username = 'asdkl;fjgd'

        const res = await getUserInfo(username)

        expect(res).toBeNull()
    })
})
