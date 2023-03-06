interface User {
  name: string
  birthDate: number
}

const user: User = {
  name: 'Emilio',
  birthDate: 1985,
}

console.log(`LOG => ${JSON.stringify(user)}`)

export default user
