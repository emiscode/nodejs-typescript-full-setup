interface User {
  name: string
}

const user: User = {
  name: 'Emilio',
}

console.log(`LOG => ${JSON.stringify(user)}`)

export default user
