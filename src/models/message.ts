import { z } from 'zod'

import { userSchema } from './user'

const messageSchema = z.preprocess(
  (json: any) => {
    return {
      id: json.id,
      user: json.user,
      body: json.body,
      createdAt: json.created_at,
      updatedAt: json.updated_at,
    }
  },
  z.object({
    id: z.string(),
    user: userSchema,
    body: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  })
)

export type MessageModel = z.infer<typeof messageSchema>

export const createMessage = (json: any) => messageSchema.parse(json)

export const createMessages = (json: any[]) => json.map(createMessage)
