import { randomUUID } from 'crypto'

export default class BaseEntity {
  constructor (id) {
    this.id = id || randomUUID()
  }
}
