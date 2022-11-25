import { z } from 'zod'

import { userSchema } from './user'

const messageSchema = z.object({
  id: z.string(),
  user: userSchema,
  body: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type MessageModel = z.infer<typeof messageSchema>

export const createMessage = (json: any) => messageSchema.parse(json)

export const createMessages = (json: any[]) => json.map(createMessage)
