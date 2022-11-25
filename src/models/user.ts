import { z } from 'zod'

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.union([z.literal('male'), z.literal('female')]).optional(),
  thumbnailImageURL: z.string().optional(),
})

export type UserModel = z.infer<typeof userSchema>

export const createUser = (json: any) => userSchema.parse(json)

export const createUsers = (json: any[]) => json.map(createUser)
