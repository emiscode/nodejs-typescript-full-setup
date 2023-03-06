interface User {
  name: string
}

const user: User = {
  name: 'Emilio',
}

console.log(`=> ${JSON.stringify(user)}`)

export default user
