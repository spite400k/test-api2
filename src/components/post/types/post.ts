import { Timestamp } from 'firebase/firestore'
import { StorageObject } from '@/components/storage/types/obj'

export type Post = {
  id: string
  title?: string
  slug?: string
  category?: string
  publish: boolean
  releaseDate: Timestamp
  markdown?: string
  thumbnail?: StorageObject
  custom?: any
}
