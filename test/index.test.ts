import user from '../src'

describe('test', () => {
  test('pass', () => {
    const { name, birthDate } = user
    expect(name).toBe('Emilio')
    expect(birthDate).toBe(1985)
  })
})
