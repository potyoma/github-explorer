import { describe, expect, test } from 'vitest'
import { countPages } from '../../utils'

describe('Reads number of pages from header', () => {
    test('should extract number of pages', async () => {
        const header = new Headers()
        header.append(
            'Link',
            '<https://api.github.com/user/47383480/repos?sort=updated&per_page=10&page=2>; rel="next", <https://api.github.com/user/47383480/repos?sort=updated&per_page=10&page=6>; rel="last"'
        )

        const res = countPages(header)

        expect(res).toBe(6)
    })

    test('should return 1 if no header', async () => {
        const res = countPages(null)

        expect(res).toBe(1)
    })

    test('should return 1 if no Link header', async () => {
        const header = new Headers()

        const res = countPages(header)

        expect(res).toBe(1)
    })
})
