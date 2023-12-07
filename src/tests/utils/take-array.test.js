import { describe, test, expect } from 'vitest'
import { takeArray } from '../../utils'

describe('Generates array with values in range', () => {
    test('should return [0...4] for 0 current and total >= 5', () => {
        const input1 = [5, 0]
        const input2 = [6, 0]

        const res1 = takeArray(...input1)
        const res2 = takeArray(...input2)

        const expectation = Array.from({ length: 5 }, (_, i) => i)

        expect(res1).toStrictEqual(expectation)
        expect(res2).toStrictEqual(expectation)
    })

    test('should return [] for current more than start and less than total', () => {
        const input1 = [12, 6]
        const input2 = [18, 7]

        const res1 = takeArray(...input1)
        const res2 = takeArray(...input2)

        const expectation1 = Array.from({ length: 5 }, (_, i) => i + 4)
        const expectation2 = Array.from({ length: 5 }, (_, i) => i + 5)


        expect(res1).toStrictEqual(expectation1)
        expect(res2).toStrictEqual(expectation2)
    })
})
