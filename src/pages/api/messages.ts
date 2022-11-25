import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({
    messages: [
      {
        id: '5e5b8465-f4a2-40b0-b7e8-a17ac748a154',
        user: {
          id: '2a1977f9-f7cb-413b-afa5-f1bc2413cfc2',
          name: 'p-chan',
          gender: 'male',
          thumbnail_image_url: 'https://p-chan.im/avatar.png',
        },
        body: 'たったら書く',
        created_at: '2022-11-25T13:02:21+09:00',
        updated_at: '2022-11-25T13:02:21+09:00',
      },
      {
        id: 'bfbdc3c9-339c-4e68-a8d8-996d121a4183',
        user: {
          id: 'a1e54c45-a7b8-46ab-ac97-aa2dd3919d9f',
          name: 'anonymous',
          gender: null,
          thumbnail_image_url: null,
        },
        body: '2get',
        created_at: '2022-11-25T13:05:38+09:00',
        updated_at: '2022-11-25T13:05:38+09:00',
      },
      {
        id: '0c974bcb-e30e-4500-a86c-1b07a0d52b66',
        user: {
          id: 'e5583672-e6f9-4f82-ba6b-64dfd37f7536',
          name: 'anonymous',
          gender: null,
          thumbnail_image_url: null,
        },
        body: 'スレ立て乙',
        created_at: '2022-11-25T14:07:01+09:00',
        updated_at: '2022-11-25T14:07:01+09:00',
      },
    ],
  })
}
