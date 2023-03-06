import user from '../src'

describe('test', () => {
  test('pass', () => {
    const name = user.name
    expect(name).toBe('Emilio')
  })
})
