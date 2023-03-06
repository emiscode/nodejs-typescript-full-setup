interface User {
  name: string
}

const user: User = {
  name: 'Emilio',
}

console.log(`LOG 2 => ${JSON.stringify(user)}`)

export default user
