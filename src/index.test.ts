import { fixedRound, arithmeticSequence, parseTime, getVal, sleep } from './index'

test('parseTime', () => {
	expect(parseTime(+new Date, '{y}/{m}/{d}')).toBe('2021/11/17')
	expect(parseTime(+new Date, '{y}-{m}-{d}')).toBe('2021-11-17')
})

test('fixedRound', () => {
	expect(fixedRound(2.1)).toBe('2.10')
})

test('getVal', () => {
	const a: { b: number, c?: number } = { b: 1 }
	expect(getVal(() => a.c, false)).toEqual(false)
})

it('sleep', async () => {
	expect.assertions(1)
	const rst = await sleep(2000)
	expect(rst).toBeUndefined()
})

test('arithmeticSequence', () => {
	expect(arithmeticSequence(0, 2, 5)).toEqual([0, 2, 4, 6, 8])
	expect(arithmeticSequence(1, 5, 8)).toEqual([1, 6, 11, 16, 21, 26, 31, 36])
})
