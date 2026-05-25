import { writable } from 'svelte/store'
import { getUsers } from '../api/user.service'

export const users = writable([])

export async function loadUsers() {
  const data = await getUsers()

  users.set(data)
}