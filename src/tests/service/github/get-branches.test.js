import { describe, test, expect } from 'vitest'
import { getBranches } from '../../../service/github'

describe('Get list of branches for repository from GitHub', () => {
    const input = ['potyoma', 'github-explorer']

    test('should return array of strings for valid username & repository pair', async () => {
        const res = await getBranches(...input)

        expect(Array.isArray(res)).toBe(true)
    })

    test('should return only one main branch for current repo', async () => {
        const res = await getBranches(...input)

        expect(res.length).toBe(1)
        expect(res[0]).toBe('main')
    })

    test('should return null if input is invalid', async () => {
        const res = await getBranches(input[0], 'daks;hfsgl')
        expect(res).toBeNull()
    })
})
