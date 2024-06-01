import { sample } from 'lodash'
import { faker } from '@faker-js/faker'


export const users = [...Array(20)].map((_, index) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatarUrl: `/aasets/images/avatars/avatar_${index+1}.jpg`,
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample(['admin', 'editor', 'user', 'guest', 'manager', 'employee']),
}))