import { randomUUID } from 'crypto'

export default class Entity {
  constructor (id) {
    this.id = id || randomUUID()
  }
}
