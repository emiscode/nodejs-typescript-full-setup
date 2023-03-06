interface User {
  name: string
  birthDate: number
}

const user: User = {
  name: 'Emilio',
  birthDate: 1985,
}

console.log(`=> ${JSON.stringify(user)}`)

export default user
