import { USER_URL } from './urls'
import type { UserList } from '../models/user.model'

export async function getUsers(): Promise<UserList> {
  const response = await fetch(USER_URL)

  const data = await response.json()

  return data.results.map((user: any, index: number) => {
    return {
      id: index.toString(),
      name: user.name.first,
      username: user.login.username,
      avatar: user.picture.large
    }
  })
}