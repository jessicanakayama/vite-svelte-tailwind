import { writable } from 'svelte/store'
import { getPhotos } from '../api/photo.service'

export const photos = writable([])

export async function loadPhotos() {
  const data = await getPhotos()

  photos.set(data)
}