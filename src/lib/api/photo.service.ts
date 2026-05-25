import { PHOTO_URL } from './urls'
import type { Photo } from '../models/photo.model'

export async function getPhotos(): Promise<Photo[]> {
  const response = await fetch(PHOTO_URL)

  const data = await response.json()

  return data.map((photo: any) => {
    return {
      id: photo.id,
      author: photo.author,
      download_url: photo.download_url
    }
  })
}