import { fixedRound } from './index'

test('fixedRound', () => {
	expect(fixedRound(2.1)).toBe('2.10')
})
