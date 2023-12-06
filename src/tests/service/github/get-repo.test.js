import { describe, test, expect } from 'vitest'
import { getRepo } from '../../../service/github'

describe('Get repository from GitHub', () => {
    const input = ['potyoma', 'github-explorer']

    test('should return repository for valid data', async () => {
        const res = await getRepo(...input)

        expect(res).not.toBe(null)
    })

    test('should return null for invalid input', async () => {
        const res = await getRepo(input[0], 'asl;kdfjsakdl;gj')

        expect(res).toBeNull()
    })
})
