import { useEffect, useState } from 'react'
import { MessageModel, createMessages } from '../models/message'

type Props = {
  messages: MessageModel[]
}

const Component = ({ messages }: Props) => {
  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map(({ id, body }) => {
          return <li key={id}>{body}</li>
        })}
      </ul>
    </div>
  )
}

export const Container = () => {
  const [messages, setMessages] = useState<MessageModel[]>([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch('/api/messages')
      const json = await response.json()

      const typedJSON = createMessages(json.messages)

      setMessages(typedJSON)
    })()
  }, [])

  return <Component messages={messages} />
}

export default Container
